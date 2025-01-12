import { createTransport, SendMailOptions } from "nodemailer";
import { config } from "../config";
import { templates } from "./templates";

const transporter = createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: config.email.user,
    pass: config.email.password,
  },
});

export async function sendEmail({
  to = "",
  template,
  template_variables,
}: {
  to?: string;
  template?: string;
  template_variables?: any;
}) {
  if (!to) {
    throw new Error("Recipient email address ('to') is required.");
  }

  if (!template) {
    throw new Error("Template name is required.");
  }

  const options: SendMailOptions = {
    from: config.email.user,
    to,
  };

  try {
    await useTemplate(options, template, template_variables);
    const { response, messageId } = await transporter.sendMail(options);
    Logger.info(
      `Email sent successfully. Response: ${response}, Message ID: ${messageId}`
    );
  } catch (error) {
    Logger.error("Error while sending email:", { error });
    // throw new CustomError(`Failed to send email: ${error || "Unknown error"}`);
    throw error;
  }
}

async function useTemplate(
  options: SendMailOptions,
  templateName: string,
  variables: any
) {
  const template = templates.find((t) => t.name === templateName);

  if (!template) {
    throw new Error(`Template "${templateName}" not found.`);
  }

  options.subject = variables?.subject || template.subject;

  if (template.body) {
    options.html = await template.body(variables);
  } else {
    throw new Error(`Template "${templateName}" does not have a valid body.`);
  }
}

// import { auth } from "../auth";

const apiHelper = async (
  endpoint: string,
  method = "GET",
  data?: Record<string, any>,
  headers = {},
  params?: Record<string, any>
) => {
  try {
    // const session = await auth();
    let url = "https://concept-map-kkny.onrender.com/web" + endpoint;
    const options: RequestInit = {
      method,
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${session?.user.token}`,
        ...headers,
      },
    };

    if (data && method !== "GET") {
      options.body = JSON.stringify(data);
    }

    if (params && method === "GET") {
      const queryParams = new URLSearchParams(params).toString();
      url = `${url}?${queryParams}`;
    }

    const response = await fetch(url, options);

    const result = await response.json();
    if (!response.ok) {
      throw new Error(JSON.stringify(result) || "Something went wrong");
    }

    return result;
  } catch (error: any) {
    console.log(error);
    let errorResponse;
    try {
      errorResponse = JSON.parse(error.message);
    } catch (error: any) {
      errorResponse = error.message;
    }

    return errorResponse;
  }
};

export default apiHelper;

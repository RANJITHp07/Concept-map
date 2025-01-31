"use client";

import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Input } from "@repo/ui/components/input";
import { ShadcnButton } from "@repo/ui/components/ShadcnButton";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@repo/ui/components/select";
import { Textarea } from "@repo/ui/components/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ScriptFormSchema } from "../../../lib/validator/script";

type ScriptCategory = "CategoryA" | "CategoryB" | "CategoryC";
type IndustryCategory = "Industry1" | "Industry2" | "Industry3";
type ScriptType = "TypeA" | "TypeB" | "TypeC";

export function CreateForm() {
  const {
    handleSubmit,
    formState: { errors },
    setValue,
    clearErrors,
    getValues,
  } = useForm({
    resolver: zodResolver(ScriptFormSchema),
  });

  const handleInputChange = (field: string, value: string) => {
    console.log(value);
    setValue(field, value);
    clearErrors(field);
  };

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="p-4 md:p-6 lg:p-8 containers">
      <div className="px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-6 flex items-center gap-3">
          {/* <ShadcnButton variant="ghost" size="icon" className="rounded-full">
            <ArrowLeft className="h-5 w-5" />
            <span className="sr-only">Go back</span>
          </ShadcnButton> */}
          <h1 className="text-xl font-semibold">Create New Script</h1>
        </div>

        {/* Form */}
        <div className="space-y-6 px-4 sm:px-6 lg:px-10">
          {/* Select Type Section */}
          {/* <FormSection title="Select Type">
            <Select
              onValueChange={(value) => handleSelectChange("type", value)}
            >
              <SelectTrigger className="w-full bg-white">
                <SelectValue placeholder="Choose Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="type1">Type 1</SelectItem>
                <SelectItem value="type2">Type 2</SelectItem>
                <SelectItem value="type3">Type 3</SelectItem>
              </SelectContent>
            </Select>
          </FormSection> */}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <FormSection title="Adding Details">
              <div className="space-y-4">
                <FormField
                  label="Main Title"
                  name="mainTitle"
                  value={getValues("mainTitle")}
                  onChange={(
                    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
                  ) => handleInputChange("mainTitle", e.target.value)}
                  maxLength={80}
                  required
                />
                <FormField
                  label="Description"
                  name="description"
                  value={getValues("description")}
                  onChange={(
                    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
                  ) => handleInputChange("description", e.target.value)}
                  maxLength={500}
                  required
                  textarea
                />
                <FormField
                  label="Category"
                  name="category"
                  value={getValues("category")}
                  onChange={(value: string) =>
                    handleInputChange("category", value)
                  }
                  select
                  options={[
                    { value: "CategoryA", label: "Category A" },
                    { value: "CategoryB", label: "Category B" },
                    { value: "CategoryC", label: "Category C" },
                  ]}
                />
                <FormField
                  label="Industry Category"
                  name="industryCategory"
                  value={getValues("industryCategory")}
                  onChange={(value) =>
                    handleInputChange("industryCategory", value)
                  }
                  select
                  options={[
                    { value: "Industry1", label: "Industry 1" },
                    { value: "Industry2", label: "Industry 2" },
                    { value: "Industry3", label: "Industry 3" },
                  ]}
                />
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <FormField
                    label="Country"
                    name="country"
                    value={getValues("price")}
                    onChange={(value) => handleInputChange("price", value)}
                    type="number"
                    required
                  />
                  <FormField
                    label="State"
                    name="state"
                    value={getValues("currency")}
                    onChange={(value) => handleInputChange("currency", value)}
                    required
                  />
                </div>
              </div>
            </FormSection>

            <div className="flex justify-end">
              <ShadcnButton type="submit">Save Details</ShadcnButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

function FormSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm border">
      <div className="bg-[#f6f6f6] px-5 py-3 -mx-6 -mt-6 rounded-t-3xl mb-6">
        <h2 className="text-base font-medium">{title}</h2>
      </div>
      {children}
    </div>
  );
}

function FormField({
  label,
  name,
  value,
  onChange,
  maxLength,
  required,
  textarea,
  select,
  options,
  type = "text",
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: any) => void;
  maxLength?: number;
  required?: boolean;
  textarea?: boolean;
  select?: boolean;
  options?: { value: string; label: string }[];
  type?: string;
}) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <label htmlFor={name} className="text-sm text-gray-600">
          {label}
        </label>
        {maxLength && (
          <span className="text-sm text-gray-400">
            {value?.length ?? 0}/{maxLength} Characters
          </span>
        )}
      </div>
      {textarea ? (
        <Textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className="min-h-[120px] bg-white"
          placeholder={`Enter ${label.toLowerCase()}`}
          maxLength={maxLength}
          required={required}
        />
      ) : select ? (
        <Select onValueChange={onChange} value={value}>
          <SelectTrigger id={name} className="bg-white">
            <SelectValue placeholder={`Choose ${label}`} />
          </SelectTrigger>
          <SelectContent>
            {options?.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      ) : (
        <Input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          className="bg-white"
          placeholder={`Enter ${label.toLowerCase()}`}
          maxLength={maxLength}
          required={required}
        />
      )}
    </div>
  );
}

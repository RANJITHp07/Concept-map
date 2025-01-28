"use client"

import { useState } from "react"
import { ArrowLeft } from "lucide-react"
import { Input } from "@repo/ui/components/input"
import { Button } from "@repo/ui/components/Button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@repo/ui/components/select"
import { Textarea } from "@repo/ui/components/textarea"

type ScriptCategory = "CategoryA" | "CategoryB" | "CategoryC"
type IndustryCategory = "Industry1" | "Industry2" | "Industry3"
type ScriptType = "TypeA" | "TypeB" | "TypeC"

export function CreateForm() {
  const [formData, setFormData] = useState({
    mainTitle: "",
    description: "",
    category: "",
    industryCategory: "",
    price: "",
    currency: "",
    type: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, maxLength?: number) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: maxLength ? value.slice(0, maxLength) : value,
    }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <div className="p-4 md:p-6 lg:p-8 containers">
      <div className="px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-6 flex items-center gap-3">
          <Button variant="ghost" size="icon" className="rounded-full">
            <ArrowLeft className="h-5 w-5" />
            <span className="sr-only">Go back</span>
          </Button>
          <h1 className="text-xl font-semibold">Create New</h1>
        </div>

        {/* Form */}
        <div className="space-y-6 px-4 sm:px-6 lg:px-10">
          {/* Select Type Section */}
          <FormSection title="Select Type">
            <Select onValueChange={(value) => handleSelectChange("type", value)}>
              <SelectTrigger className="w-full bg-white">
                <SelectValue placeholder="Choose Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="type1">Type 1</SelectItem>
                <SelectItem value="type2">Type 2</SelectItem>
                <SelectItem value="type3">Type 3</SelectItem>
              </SelectContent>
            </Select>
          </FormSection>

          <form onSubmit={handleSubmit} className="space-y-6">
            <FormSection title="Adding Details">
              <div className="space-y-4">
                <FormField
                  label="Main Title"
                  name="mainTitle"
                  value={formData.mainTitle}
                  onChange={(e) => handleInputChange(e, 80)}
                  maxLength={80}
                  required
                />
                <FormField
                  label="Description"
                  name="description"
                  value={formData.description}
                  onChange={(e) => handleInputChange(e, 500)}
                  maxLength={500}
                  required
                  textarea
                />
                <FormField
                  label="Category"
                  name="category"
                  value={formData.category}
                  onChange={(value) => handleSelectChange("category", value)}
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
                  value={formData.industryCategory}
                  onChange={(value) => handleSelectChange("industryCategory", value)}
                  select
                  options={[
                    { value: "Industry1", label: "Industry 1" },
                    { value: "Industry2", label: "Industry 2" },
                    { value: "Industry3", label: "Industry 3" },
                  ]}
                />
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <FormField
                    label="Price"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    type="number"
                    required
                  />
                  <FormField
                    label="Currency"
                    name="currency"
                    value={formData.currency}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
            </FormSection>

            <div className="flex justify-end">
              <Button type="submit">Submit</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

function FormSection({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm border">
      <div className="bg-[#f6f6f6] px-5 py-3 -mx-6 -mt-6 rounded-t-3xl mb-6">
        <h2 className="text-base font-medium">{title}</h2>
      </div>
      {children}
    </div>
  )
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
  label: string
  name: string
  value: string
  onChange: (e: any) => void
  maxLength?: number
  required?: boolean
  textarea?: boolean
  select?: boolean
  options?: { value: string; label: string }[]
  type?: string
}) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <label htmlFor={name} className="text-sm text-gray-600">
          {label}
        </label>
        {maxLength && (
          <span className="text-sm text-gray-400">
            {value.length}/{maxLength} Characters
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
  )
}


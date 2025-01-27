
export interface UploadingFile {
    id: string
    name: string
    progress: number
    size: number
  }
  
  export interface UploadedFile {
    id: string
    name: string
    size: number
  }
  
  export type SupportedFileType =
    | "image/jpeg"
    | "image/png"
    | "application/pdf"
    | "application/illustrator"
    | "application/msword"
  
  export const SUPPORTED_FILE_TYPES: SupportedFileType[] = [
    "image/jpeg",
    "image/png",
    "application/pdf",
    "application/illustrator",
    "application/msword",
  ]
  
  export const MAX_FILE_SIZE = 10 * 1024 * 1024 // 10MB
  
  

export function validateFile(file: File): { isValid: boolean; error?: string } {
  if (!SUPPORTED_FILE_TYPES.includes(file.type as SupportedFileType)) {
    return {
      isValid: false,
      error: "File type not supported. Please upload JPEG, PNG, PDF, AI, or Word files.",
    }
  }

  if (file.size > MAX_FILE_SIZE) {
    return {
      isValid: false,
      error: "File size exceeds 10MB limit.",
    }
  }

  return { isValid: true }
}

export function formatFileSize(bytes: number): string {
  if (bytes === 0) return "0 Bytes"
  const k = 1024
  const sizes = ["Bytes", "KB", "MB", "GB"]
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return `${Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`
}


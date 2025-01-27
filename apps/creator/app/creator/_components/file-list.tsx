import { X } from "lucide-react"
import { Button } from "@repo/ui/components/Button"

import { formatFileSize } from "../../../lib/utils/files"

interface File {
  id: string
  name: string
  size: number
  progress?: number
}

interface Props {
  uploadingFiles: File[]
  uploadedFiles: File[]
  onRemoveFile: (id: string) => void
}

const FileUploadSection: React.FC<Props> = ({ uploadingFiles, uploadedFiles, onRemoveFile }) => {
  if (uploadingFiles.length === 0 && uploadedFiles.length === 0) {
    return (
      <div className=" flex-1 ml-4 flex items-center justify-center h-32   w-auto lg:w-[50%] md:w-[50%]">
        <p className="text-sm text-gray-500">You have no uploaded files. Please upload a file.</p>
      </div>
    )
  }

  return (
    <div className="space-y-4 w-full">
      {uploadingFiles.length > 0 && (
        <div>
          {/* <h3 className="text-sm font-medium text-gray-900">Uploading Files</h3> */}
          {uploadingFiles.map((file) => (
            <div key={file.id} className="space-y-2 ">
              <div className="flex justify-center items-center">
                {/* <span className="text-sm truncate max-w-[200px]">{file.name}</span> */}
                <span className="text-sm text-gray-500">{file.progress < 100 ? `${file.progress}%` : ""}</span>
              </div>
              {file.progress < 100 && (
                <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-orange-400 transition-all duration-300"
                    style={{ width: `${file.progress}%` }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {uploadedFiles.length > 0 && (
        <div>
          <h3 className="text-sm font-medium text-gray-900">Uploaded Files</h3>
          <div className="space-y-2">
            {uploadedFiles.map((file) => (
              <div key={file.id} className="flex justify-between items-center bg-gray-50 p-2 rounded">
                <div className="flex flex-col">
                  <span className="text-sm truncate max-w-[200px]">{file.name}</span>
                  <span className="text-xs text-gray-500">{formatFileSize(file.size)}</span>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 hover:bg-gray-200"
                  onClick={() => {
                    onRemoveFile(file.id)
                    if (uploadedFiles.length === 1) {
                      // If this is the last file, trigger a re-render to show the "no files" message
                      setTimeout(() => onRemoveFile(file.id), 0)
                    }
                  }}
                >
                  <X className="h-4 w-4" />
                  <span className="sr-only">Remove file</span>
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default FileUploadSection


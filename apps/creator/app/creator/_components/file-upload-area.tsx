import { useRef } from "react";
import { CloudUpload } from "lucide-react";
import { ShadcnButton } from "@repo/ui/components/ShadcnButton";

interface FileUploadAreaProps {
  onFileSelect: (files: FileList) => void;
}

export function FileUploadArea({ onFileSelect }: FileUploadAreaProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    onFileSelect(e.dataTransfer.files);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      className=" border-2 w-auto lg:w-[50%] md:w-[50%] border-dashed border-gray-300 rounded-lg p-8 text-center bg-white transition-colors hover:border-orange-400 "
    >
      <div
        className="flex flex-col items-center gap-4 cursor-pointer"
        onClick={() => fileInputRef.current?.click()}
        role="ShadcnButton"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            fileInputRef.current?.click();
          }
        }}
      >
        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
          <CloudUpload className="w-8 h-8 text-orange-400" />
        </div>
        <div className="space-y-2">
          <p className="text-sm">
            Drag & drop files or{" "}
            <ShadcnButton
              variant="link"
              className="text-orange-400 p-0 h-auto font-normal"
              onClick={(e) => {
                e.stopPropagation();
                fileInputRef.current?.click();
              }}
            >
              Browse
            </ShadcnButton>
          </p>
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            onChange={(e) => e.target.files && onFileSelect(e.target.files)}
            multiple
            accept=".jpg,.jpeg,.png,.pdf,.ai,.doc,.docx"
          />
          <p className="text-sm text-gray-500">
            Supported formats: JPEG, PNG, PDF, AI, Word
          </p>
        </div>
      </div>
    </div>
  );
}

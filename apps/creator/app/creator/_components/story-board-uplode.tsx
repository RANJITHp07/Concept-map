"use client";

import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent, CardHeader } from "@repo/ui/components/card";
import { Input } from "@repo/ui/components/input";
import { ShadcnButton } from "@repo/ui/components/ShadcnButton";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@repo/ui/components/select";
import { FileUploadArea } from "./file-upload-area";

import { validateFile } from "../../../lib/utils/files";
import FileUploadSection from "./file-list";

export interface UploadingFile {
  id: string;
  name: string;
  progress: number;
  size: number;
}

export interface UploadedFile {
  id: string;
  name: string;
  size: number;
  file: any
}

export default function StoryBoardUpload({ setUploadFile, uploadRef, uploadError }: any) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [uploadingFiles, setUploadingFiles] = useState<UploadingFile[]>([]);
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [error, setError] = useState<string>("");

  const handleFiles = async (fileList: FileList) => {
    const files = Array.from(fileList);
    setError("");

    for (const file of files) {
      const { isValid, error } = validateFile(file);
      if (!isValid) {
        setError(error || "Invalid file");
        continue;
      }

      const uploadingFile: UploadingFile = {
        id: crypto.randomUUID(),
        name: file.name,
        progress: 0,
        size: file.size,
      };

      setUploadingFiles((prev) => [...prev, uploadingFile]);

      // Simulate file upload
      const interval = setInterval(() => {
        setUploadingFiles((prev) => {
          const fileIndex = prev.findIndex((f) => f.id === uploadingFile.id);
          if (fileIndex === -1) return prev;

          const newFiles = [...prev];
          newFiles[fileIndex]!.progress += 10;

          if (newFiles[fileIndex]!.progress >= 100) {
            clearInterval(interval);
            setUploadedFiles((prev) => [
              ...prev,
              {
                id: uploadingFile.id,
                name: file.name,
                file: file,
                size: file.size,
              },
            ]);
            return prev.filter((f) => f.id !== uploadingFile.id);
          }

          return newFiles;
        });
      }, 500);
    }
  };

  const removeFile = (fileId: string) => {
    setUploadedFiles((prev) => prev.filter((file) => file.id !== fileId));
  };


  const handlePrice = (field: string, value: string) => {
    setUploadFile((prev: any) => ({ ...prev, [field]: value }))
  }

  useEffect(() => {
    setUploadFile((prev: any) => ({ ...prev, files: uploadedFiles }))
  }, [uploadedFiles])



  return (
    <div ref={uploadRef} className="py-4 px-4 sm:px-6 lg:px-[100px]">
      <Card className="bg-white border-none containers mx-auto">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-7 bg-[#FEF6EA] rounded-t-lg">
          <div className="flex items-center gap-3">
            <div className="bg-orange-400 p-3 rounded-full">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-semibold">New Story Board</h2>
              <p className="text-sm text-gray-500">
                Create design for new project
              </p>
            </div>
          </div>
          <ShadcnButton
            variant="ghost"
            size="icon"
            onClick={() => setIsExpanded(!isExpanded)}
            aria-expanded={isExpanded}
            aria-label={isExpanded ? "Collapse form" : "Expand form"}
          >
            {isExpanded ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </ShadcnButton>
        </CardHeader>

        {isExpanded && (
          <CardContent className="space-y-6 p-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Upload Story Board</h3>
              <div className="flex flex-col md:flex-row gap-4 ">
                <FileUploadArea onFileSelect={handleFiles} />
                <FileUploadSection
                  uploadingFiles={uploadingFiles}
                  uploadedFiles={uploadedFiles}
                  onRemoveFile={removeFile}
                />
              </div>
              {error && (
                <p className="mt-2 text-sm text-red-600" role="alert">
                  {error}
                </p>
              )}
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Add Pricing</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Select onValueChange={(value: string) => handlePrice("currency", value)}>
                    <SelectTrigger className="py-7 border  focus:outline-none focus:ring-1 focus:ring-[#f5a623] text-gray-600 border-black">
                      <SelectValue placeholder="Choose Currency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="usd">USD</SelectItem>
                      <SelectItem value="eur">EUR</SelectItem>
                      <SelectItem value="gbp">INR</SelectItem>
                    </SelectContent>
                  </Select>
                  {error.currency && <p className="text-xs mt-1 text-red-400">{error.currency}</p>}
                </div>
                <div>
                  <Input placeholder="Add Price" type="number"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      const value = e.target.value;
                      if (/^\d*$/.test(value)) {
                        handlePrice("price", value);
                      }

                    }} />
                  {error.price && <p className="text-xs mt-1 text-red-400">{error.price}</p>}
                </div>
              </div>
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  );
}

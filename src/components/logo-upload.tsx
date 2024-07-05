"use client";

import { FileUploader } from "@/components/ui/file-uploader";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { CardContent, CardFooter } from "./ui/card";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import axios from "axios";
import Image from "next/image";

export function LogoUpload({
  onUploadComplete,
  fileURL,
  onRemove,
}: {
  onUploadComplete: (fileURL: string) => void;
  onRemove: () => void;
  fileURL: string;
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [progress, setProgress] = useState<Record<string, number>>({});
  const [estimatedSeconds, setEstimatedSeconds] = useState<
    Record<string, number>
  >({});

  async function handleUpload(files: File[]) {
    try {
      if (!files[0])
        return toast.error(
          "Error occured while uploading video. Please try again."
        );

      const formData = new FormData();

      formData.set("file", files[0]);

      const { data } = await axios.post("/api/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (event) => {
          if (event.lengthComputable) {
            const percentComplete = (event.progress || 0.5) * 100;
            setEstimatedSeconds({ [files[0].name]: event.estimated as number });
            setProgress({ [files[0].name]: percentComplete });
          }
        },
      });

      onUploadComplete(data.fileURL as string);
      router.refresh();
    } catch (error) {
      return toast.error(
        "Error occured while uploading video. Please try again."
      );
    }
  }

  if (fileURL) {
    return (
      <>
        <CardContent className="p-0">
          <Image
            src={fileURL}
            alt="File"
            height={50}
            width={50}
            className="w-full h-60 object-cover"
          />
        </CardContent>
        <CardFooter className="p-0">
          <Button
            variant="destructive"
            size="sm"
            onClick={onRemove}
            type="button"
          >
            Remove Logo
          </Button>
        </CardFooter>
      </>
    );
  }

  return (
    <CardContent className="p-0">
      <div className="space-y-6">
        <FileUploader
          onUpload={handleUpload}
          maxFiles={1}
          accept={{
            "image/*": [".jpg", ".jpeg", ".png", ".avif", ".webp"],
          }}
          progresses={progress}
          estimatedSeconds={estimatedSeconds}
        />
      </div>
    </CardContent>
  );
}

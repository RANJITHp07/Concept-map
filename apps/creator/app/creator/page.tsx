'use client'
import React, { useRef, useState } from "react";
// import { Header } from "./_components/header";
import { CreateForm } from "./_components/createform";
import { ScriptWriter } from "./_components/new-script-form";
import StoryBoardUpload from "./_components/story-board-uplode";
import SynopsisWriter from "./_components/synopsis-writer";
import { ShadcnButton } from "@repo/ui/components/ShadcnButton";
import Button from "@repo/ui/components/Button";
import Header from "@repo/ui/components/Header";
import { useRouter } from "next/navigation";
import apiHelper from "../../lib/apiHelper";
import { apis } from "../../lib/api";
import toast, { Toaster } from "react-hot-toast";

export default function page() {
  const router = useRouter()
  const createForm = useRef<HTMLFormElement | null>(null)
  const scriptRef = useRef<HTMLDivElement>(null);
  const uploadRef = useRef<HTMLDivElement>(null);
  const synopsisRef = useRef<HTMLDivElement>(null);
  const [basicDetails, setBasicDetails] = useState<any>(null)
  const [scriptDetail, setScriptDetail] = useState<any>(null)
  const [uploadFile, setUploadFile] = useState<any>(null)
  const [synopsis, setSynopsis] = useState<any>(null)
  const [error, setError] = useState<any>({
    script: {
      currency: null,
      price: null
    },
    fileURLToPath: {
      currency: null,
      price: null,
      file: null
    },
    synopsis: {
      currency: null,
      price: null,
      description: null
    }
  })

  const hasValidScenes = () =>
    scriptDetail?.scripts?.some(
      (item: any) =>
        item.scenes.filter((scene: any) => scene.content?.trim()).length > 0
    );

  const validateAndSetError = () => {

    // {
    //   "main_title": "The Journey of Dreams",
    //     "description": "nullnulljdwkjkjkewjdkjkwdk",
    //       "genre": "BEAUTY",
    //         "industry_category": "TRAVEL & HOSPITALITY",
    //           "category": "TVC",
    //             "type": [
    //               "SCRIPT",
    //               "STORY_BOARD"
    //             ],
    //               "userId": "679516d7f94aa54b14dabfba",
    //                 "script": {
    //     "content": [
    //       {
    //         "name": "Script 1",
    //         "script": [
    //           {
    //             "name": "Scene 0",
    //             "description": ""
    //           }
    //         ]
    //       }
    //     ]
    //   },
    //   "story_board": {
    //     "content": []
    //   },
    //   "synopsis": { },
    //   "country": [
    //     "Antigua And Barbuda"
    //   ],
    //     "state": [
    //       "Saint Paul Parish"
    //     ]
    // }
    let flag = true
    setError((prevError: any) => {
      const newErrors = {
        script: {
          currency: hasValidScenes() && !scriptDetail?.currency ? "Currency is required" : null,
          price: (hasValidScenes() && !scriptDetail?.price) ? "Price is required" : null
        },
        fileURLToPath: {
          currency: (uploadFile?.files?.length > 0 && !uploadFile?.currency) ? "Currency is required" : null,
          price: (uploadFile?.files?.length > 0 && !uploadFile?.price) ? "Price is required" : null
        },
        synopsis: {
          currency: (synopsis && !synopsis?.currency) ? "Currency is required" : null,
          price: (synopsis && !synopsis?.price) ? "Price is required" : null,
        }
      };

      if (newErrors.script.currency || newErrors.script.price) {
        flag = false
        scriptRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      } else if (newErrors.fileURLToPath.currency || newErrors.fileURLToPath.price) {
        flag = false
        uploadRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      } else if (newErrors.synopsis.currency || newErrors.synopsis.price) {
        flag = false
        synopsisRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      }

      return newErrors;
    })
    return flag
  };


  const handlePublish = async () => {
    try {
      if (createForm) {
        createForm?.current?.requestSubmit()
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = async (data: any) => {
    try {
      const basicDetails = data

      if (!basicDetails) {
        createForm?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }

      const type = [];

      if (hasValidScenes()) type.push('SCRIPT');
      if (uploadFile?.files?.length > 0) type.push('STORY_BOARD')
      if (synopsis) type.push('SYNOPSIS');

      if (type.length == 0) {
        toast.error("Please create at least one among script, synopsis, or storyboard to proceed")
        return
      }

      const flag = validateAndSetError()

      console.log(flag)
      if (!flag) return

      let urls = null
      if (uploadFile) {
        const formData = new FormData();

        uploadFile.files.forEach((item: any, index: number) => {
          formData.append(`files`, item.file);
        });

        // Send the FormData using apiHelper
        const response = await apiHelper(apis.uploadFile, "POST", formData);
        urls = response.data.map((item: string) => item)
      }


      const toCreate = {
        main_title: basicDetails.mainTitle,
        description: basicDetails.description,
        genre: basicDetails.genre,
        industry_category: basicDetails.industryCategory,
        category: basicDetails.category,
        type: type,
        userId: '679516d7f94aa54b14dabfba',
        script: scriptDetail.scripts.map((item: any) => ({
          name: item.name,
          script: item.scenes.filter((scene: any) => scene.content?.trim()),
        })).length > 0 ? {
          price: scriptDetail.price,
          currecny: scriptDetail.currency,
          content: scriptDetail.scripts.map((item: any) => ({
            name: item.name,
            script: item.scenes
              .filter((scene: any) => scene.content?.trim()) // Filter out empty content
              .map((scene: any, index: number) => ({
                name: `Scene ${index + 1}`, // Index starts from 1
                description: scene.content,
              })),
          }))

        } : {},
        story_board: uploadFile.files.length > 0 ?
          {
            price: uploadFile.price,
            currecny: uploadFile.currency,
            content: uploadFile.files.map((item: any, index: number) => {
              return {
                name: item.name,
                cloud_url: urls[index]
              }
            })
          } : {},
        synopsis: synopsis ? {
          price: synopsis.price,
          currecny: synopsis.currency,
          content: synopsis.content
        } : {},
        country: [basicDetails.country],
        state: [basicDetails.state]

      }

      const response = await apiHelper(apis.createScript, "POST", toCreate);
      if (response.status == 'success') {
        toast.success("Created successfully")
        router.push('/creator-dashboard')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <Toaster position="top-center" />
      <Header page={"creator"} />
      <CreateForm createForm={createForm} setBasicDetails={setBasicDetails} handleSubmitForm={handleSubmit} />
      <ScriptWriter setScriptDetail={setScriptDetail} scriptRef={scriptRef} error={error.script} />
      <StoryBoardUpload setUploadFile={setUploadFile} uploadRef={uploadRef} uploadError={error.fileURLToPath} />
      <SynopsisWriter setSynopsis={setSynopsis} synopsisRef={synopsisRef} error={error.synopsis} />
      <div className=" px-4 sm:px-6 lg:px-[100px] mb-5">
        {" "}
        <Button actionName="Publish Now" onClick={handlePublish} />
      </div>
    </div>
  );
}

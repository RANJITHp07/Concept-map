import React from "react";
import { Header } from "./_components/header";
import { CreateForm } from "./_components/createform";
import { ScriptWriter } from "./_components/new-script-form";
import StoryBoardUpload from "./_components/story-board-uplode";
import SynopsisWriter from "./_components/synopsis-writer";
import { ShadcnButton } from "@repo/ui/components/ShadcnButton";
import Button from "@repo/ui/components/Button";

export default function page() {
  return (
    <div>
      <Header />
      <CreateForm />
      <ScriptWriter />
      <StoryBoardUpload />
      <SynopsisWriter />
      <div className=" px-4 sm:px-6 lg:px-[100px] mb-5">
        {" "}
        <Button actionName="Publish Now" />
      </div>
    </div>
  );
}

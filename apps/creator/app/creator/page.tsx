import React from 'react'
import { Header } from './_components/header'
import { CreateForm } from './_components/createform'
import { ScriptWriter } from './_components/new-script-form'
import StoryBoardUpload from './_components/story-board-uplode'
import SynopsisWriter from './_components/synopsis-writer'


export default function page() {
  return (
    <div>
        <Header/>
        <CreateForm/>
        <ScriptWriter/>
        <StoryBoardUpload/>
        <SynopsisWriter/>
    </div>
  )
}

import React from "react"
import { PlusCircle, MinusCircle } from "lucide-react"
import { Input } from "@repo/ui/components/input"
import { Button } from "@repo/ui/components/Button"
import { Textarea } from "@repo/ui/components/textarea"

interface Scene {
  name: string
  description: string
}

interface ScriptItem {
  name: string
  scenes: Scene[]
}

interface ScriptDetailsSectionProps {
  script: ScriptItem[]
  handleScriptChange: (scriptIndex: number, field: keyof ScriptItem, value: string) => void
  handleSceneChange: (scriptIndex: number, sceneIndex: number, field: keyof Scene, value: string) => void
  addScene: (scriptIndex: number) => void
  removeScene: (scriptIndex: number, sceneIndex: number) => void
}

export function ScriptDetailsSection({
  script,
  handleScriptChange,
  handleSceneChange,
  addScene,
  removeScene,
}: ScriptDetailsSectionProps) {
  return (
    <div className="space-y-4">
      {script.map((scriptItem, scriptIndex) => (
        <div key={scriptIndex} className="space-y-4">
          <Input
            value={scriptItem.name}
            onChange={(e) => handleScriptChange(scriptIndex, "name", e.target.value)}
            className="bg-gray-100"
            placeholder={`Script ${scriptIndex + 1} Name`}
            required
          />
          {scriptItem.scenes.map((scene, sceneIndex) => (
            <div key={sceneIndex} className="space-y-2">
              <Input
                value={scene.name}
                onChange={(e) => handleSceneChange(scriptIndex, sceneIndex, "name", e.target.value)}
                className="bg-gray-100"
                placeholder={`Scene ${sceneIndex + 1} Name`}
                required
              />
              <Textarea
                value={scene.description}
                onChange={(e) => handleSceneChange(scriptIndex, sceneIndex, "description", e.target.value)}
                className="min-h-[80px] bg-white"
                placeholder={`Scene ${sceneIndex + 1} Description`}
                required
              />
              <Button type="button" variant="outline" size="sm" onClick={() => removeScene(scriptIndex, sceneIndex)}>
                <MinusCircle className="mr-2 h-4 w-4" /> Remove Scene
              </Button>
            </div>
          ))}
          <Button type="button" variant="outline" size="sm" onClick={() => addScene(scriptIndex)}>
            <PlusCircle className="mr-2 h-4 w-4" /> Add Scene
          </Button>
        </div>
      ))}
    </div>
  )
}


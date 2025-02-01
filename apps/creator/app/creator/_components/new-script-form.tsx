"use client";

import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  FileEdit,
  PlusCircle,
  MinusCircle,
} from "lucide-react";
import { Card, CardContent, CardHeader } from "@repo/ui/components/card";
import { Input } from "@repo/ui/components/input";
import { ShadcnButton } from "@repo/ui/components/ShadcnButton";
import { Textarea } from "@repo/ui/components/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@repo/ui/components/select";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@repo/ui/components/collapsible";

interface Scene {
  id: number;
  content: string;
}

interface Script {
  id: number;
  name: string;
  scenes: Scene[];
}

export function ScriptWriter() {
  const [isOpen, setIsOpen] = useState(true);
  const [scripts, setScripts] = useState<Script[]>([
    { id: 1, name: "Script 1", scenes: [{ id: 1, content: "" }] },
  ]);

  const addScript = () => {
    const newScriptId = scripts.length + 1;
    setScripts([
      ...scripts,
      {
        id: newScriptId,
        name: `Script ${newScriptId}`,
        scenes: [{ id: 1, content: "" }],
      },
    ]);
  };

  const addScene = (scriptId: number) => {
    setScripts(
      scripts.map((script) => {
        if (script.id === scriptId) {
          const newSceneId = script.scenes.length + 1;
          return {
            ...script,
            scenes: [...script.scenes, { id: newSceneId, content: "" }],
          };
        }
        return script;
      })
    );
  };

  const removeScene = (scriptId: number, sceneId: number) => {
    setScripts(
      scripts.map((script) => {
        if (script.id === scriptId) {
          return {
            ...script,
            scenes: script.scenes.filter((scene) => scene.id !== sceneId),
          };
        }
        return script;
      })
    );
  };

  const removeScript = (scriptId: number) => {
    setScripts(scripts.filter((script) => script.id !== scriptId));
  };

  const handleSceneChange = (
    scriptId: number,
    sceneId: number,
    content: string
  ) => {
    setScripts(
      scripts.map((script) => {
        if (script.id === scriptId) {
          return {
            ...script,
            scenes: script.scenes.map((scene) =>
              scene.id === sceneId ? { ...scene, content } : scene
            ),
          };
        }
        return script;
      })
    );
  };

  const handleScriptNameChange = (scriptId: number, name: string) => {
    setScripts(
      scripts.map((script) =>
        script.id === scriptId ? { ...script, name } : script
      )
    );
  };

  return (
    <div className="py-4 flex items-start justify-center containers px-4 sm:px-6 lg:px-[100px]">
      <Card className="w-full bg-white border-none">
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-7 bg-[#FEF6EA]">
            <div className="flex items-center gap-3">
              <div className="bg-orange-400 p-3 rounded-full">
                <FileEdit className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">New Script</h2>
                <p className="text-sm text-gray-500">
                  Create design for new project
                </p>
              </div>
            </div>
            <CollapsibleTrigger asChild>
              <ShadcnButton
                variant="ghost"
                size="icon"
                className="text-gray-500"
              >
                {isOpen ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </ShadcnButton>
            </CollapsibleTrigger>
          </CardHeader>

          <CollapsibleContent>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between mt-5">
                <h3 className="text-lg font-semibold">
                  Type your Script with yourself or with the help of AI
                </h3>
                <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-md">
                  <ShadcnButton
                    variant="outline"
                    className="bg-white text-orange-500 hover:bg-orange-50"
                  >
                    <span className="mr-2">⚡</span> Use AI to write
                  </ShadcnButton>
                </div>
              </div>

              <div className="space-y-6 bg-gray-100 p-6 rounded-lg">
                {scripts.map((script) => (
                  <div key={script.id} className="space-y-4">
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium">Script</h4>
                      <ShadcnButton
                        variant="ghost"
                        size="sm"
                        onClick={() => removeScript(script.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <MinusCircle className="h-4 w-4 mr-1" /> Remove Script
                      </ShadcnButton>
                    </div>
                    <Input
                      value={script.name}
                      onChange={(e) =>
                        handleScriptNameChange(script.id, e.target.value)
                      }
                      placeholder="Enter script name"
                      className="font-semibold text-lg"
                    />
                    {script.scenes.map((scene) => (
                      <div key={scene.id} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <h4 className="font-medium">Scene {scene.id}</h4>
                          <ShadcnButton
                            variant="ghost"
                            size="sm"
                            onClick={() => removeScene(script.id, scene.id)}
                            className="text-red-500 hover:text-red-700"
                          >
                            <MinusCircle className="h-4 w-4 mr-1" /> Remove
                            Scene
                          </ShadcnButton>
                        </div>
                        <Textarea
                          className="min-h-[120px] resize-none bg-white border-0"
                          value={scene.content}
                          onChange={(e) =>
                            handleSceneChange(
                              script.id,
                              scene.id,
                              e.target.value
                            )
                          }
                          placeholder="Enter scene content..."
                        />
                      </div>
                    ))}
                    <ShadcnButton
                      variant="outline"
                      size="sm"
                      onClick={() => addScene(script.id)}
                      className="mt-2"
                    >
                      <PlusCircle className="h-4 w-4 mr-1" /> Add Scene
                    </ShadcnButton>
                  </div>
                ))}
                <ShadcnButton
                  variant="outline"
                  onClick={addScript}
                  className="mt-4"
                >
                  <PlusCircle className="h-4 w-4 mr-1" /> Add New Script
                </ShadcnButton>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Add Pricing</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Select>
                    <SelectTrigger className="py-7 border  focus:outline-none focus:ring-1 focus:ring-[#f5a623] text-gray-600 border-black">
                      <SelectValue placeholder="Choose Currency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="usd">USD</SelectItem>
                      <SelectItem value="eur">EUR</SelectItem>
                      <SelectItem value="gbp">GBP</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input placeholder="Add Price" type="number" />
                </div>
              </div>
            </CardContent>
          </CollapsibleContent>
        </Collapsible>
      </Card>
    </div>
  );
}

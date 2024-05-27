import CodeEditor from "@/components/CodeEditor";
import HelperHeader from "@/components/HelperHeader";
import RenderCode from "@/components/RenderCode";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { useParams } from "react-router-dom";


export default function Compiler ()  {
  const {urlId} = useParams()
  console.log(urlId) 
  return (
    <ResizablePanelGroup
    direction="horizontal"
    className="!h-[calc(100vh-60px)]"
  >
    <ResizablePanel
      className="h-[calc(100dvh-60px)] min-w-[350px]"
      defaultSize={50}
      // className="h-[500px]"
    >
      <HelperHeader/>
      <CodeEditor/>
    </ResizablePanel>
    <ResizableHandle />
    <ResizablePanel
      className="h-[calc(100dvh-60px)] min-w-[350px]"
      defaultSize={50}
    >
      <RenderCode/> 
    </ResizablePanel>
  </ResizablePanelGroup>
  )
}



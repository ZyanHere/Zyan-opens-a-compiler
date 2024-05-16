import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";

export default function Compiler ()  {
  return (
    <ResizablePanelGroup
    direction="horizontal"
    className="!h-[calc(100vh-60px)]"
  >
    <ResizablePanel
      // className="h-[calc(100dvh-60px)] min-w-[350px]"
      defaultSize={50}
      className="h-[500px]"
    >
    </ResizablePanel>
    <ResizableHandle />
    <ResizablePanel
      className="h-[calc(100dvh-60px)] min-w-[350px]"
      defaultSize={50}
    >
    </ResizablePanel>
  </ResizablePanelGroup>
  )
}



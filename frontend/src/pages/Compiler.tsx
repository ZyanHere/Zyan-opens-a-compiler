import CodeEditor from "@/components/CodeEditor";
import HelperHeader from "@/components/HelperHeader";
import Loader from "@/components/Loader/Loader";
import RenderCode from "@/components/RenderCode";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { useLoadCodeMutation } from "@/redux/slices/api";
import { updateFullCode } from "@/redux/slices/compilerSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { handleError } from "@/utils/handleErrors";


export default function Compiler() {
  const { urlId } = useParams();
  
  const [loadExistingCode, { isLoading }] = useLoadCodeMutation();
  const dispatch = useDispatch();

  const loadCode = async () => {
    try {
      if (urlId) {
        const response = await loadExistingCode({ urlId }).unwrap();
        dispatch(updateFullCode(response.fullCode));
      }
    } catch (error) {
      handleError(error);
    }
  };

  useEffect(() => {
    if (urlId) {
      loadCode();
    }
  }, [urlId]);

  if (isLoading)
    return (
      <div className="w-full h-[calc(100dvh-60px)] flex justify-center items-center">
        <Loader />
      </div>
    );
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
        <HelperHeader />
        <CodeEditor />
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel
        className="h-[calc(100dvh-60px)] min-w-[350px]"
        defaultSize={50}
      >
        <RenderCode />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
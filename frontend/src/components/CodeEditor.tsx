import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { tags as t } from "@lezer/highlight";
import { draculaInit } from "@uiw/codemirror-theme-dracula";
import { loadLanguage } from "@uiw/codemirror-extensions-langs";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { updateCodeValue } from "@/redux/slices/compilerSlice";

// import {javascript} from "@codemirror/lang-javascript"

export default function CodeEditor() {
  const currrentLanguage = useSelector(
    (state: RootState) => state.compilerSlice.currentLanguage
  );

  const fullCode = useSelector(
    (state: RootState) => state.compilerSlice.fullCode
  );
  const dispatch = useDispatch();

  const onChange = React.useCallback((value: string) => {
    dispatch(updateCodeValue(value));
  }, []);

  return (
    <CodeMirror
      value={fullCode[currrentLanguage]}
      height="calc(100vh - 60px - 50px)"
      className="code-editor [&>.cm-editor]:!text-[10px] md:[&>.cm-editor]:!text-xs"
      extensions={[loadLanguage(currrentLanguage)!]}
      onChange={onChange}
      theme={draculaInit({
        settings: {
          caret: "#c6c6c6",
          fontFamily: "monospace",
        },
        styles: [{ tag: t.comment, color: "#6272a4" }],
      })}
    />
  );
}

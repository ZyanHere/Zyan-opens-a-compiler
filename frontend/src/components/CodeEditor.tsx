import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { tags as t } from "@lezer/highlight";
import { draculaInit } from "@uiw/codemirror-theme-dracula";
import { loadLanguage } from "@uiw/codemirror-extensions-langs";
// import {javascript} from "@codemirror/lang-javascript"

export default function CodeEditor() {
  const [value, setValue] = React.useState("console.log('hello world')");

  const onChange = React.useCallback((val:string) => {
    console.log("val: " , val);
    setValue(val);
  }, []);

  return (
    <CodeMirror
      value={value}
      height="calc(100vh - 60px - 50px)"
      className="code-editor [&>.cm-editor]:!text-[10px] md:[&>.cm-editor]:!text-xs"
      extensions={[loadLanguage("tsx")!]}
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
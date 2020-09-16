import React from "react";
// import Drawer from "../Unit/Drawer";
// import * as monaco from "monaco-editor";
import MonacoEditor from "react-monaco-editor";
import "./editor.css";

const Editor = ({
  isVisible,
  data,
  onEditor,
  onClose,
}: // onClickInside,
{
  isVisible: boolean;
  data: any;
  onEditor: any;
  onClose: any;
}) => {
  const text = JSON.stringify(data, null, "\t");

  const save = () => {
    window.localStorage.setItem("resumeData", text);
  };
  console.log("onClose", onClose);

  const onChange = (newValue: any, e: any) => {
    console.log("onChange", newValue, e);
    save();
    onEditor(JSON.parse(newValue));
  };
  const options = {
    selectOnLineNumbers: true,
    roundedSelection: false,
    readOnly: false,
    cursorStyle: "line",
    automaticLayout: false,
    wordWrap: "wordWrapColumn",
    wordWrapColumn: 70,
  };
  // const wrapperRef = React.useRef(null);
  // useInsideAlerter(wrapperRef, handleClick);
  return (
    <div className="editor">
      {isVisible ? (
        <div className="editor-section" onClick={onClose}>
          <div
            className="editor-content"
            onClick={(e: any) => e.stopPropagation()}
          >
            <MonacoEditor
              // width="800"
              // height="600"
              language="javascript"
              theme="vs-dark"
              value={text}
              onChange={onChange}
              // @ts-ignore
              options={options}

              // editorDidMount={editorDidMount}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Editor;

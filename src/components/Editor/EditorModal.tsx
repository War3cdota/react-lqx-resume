import React from "react";
import Button from "../Unit/Button";
// import Drawer from "../Unit/Drawer";
// import * as monaco from "monaco-editor";
import Editor from "./Editor";
import "./editor.css";

const EditorModal = ({
  data,
  onEditorChange,
}: {
  data: any;
  onEditorChange: any;
}) => {
  const [isModal, setModal] = React.useState(false);

  const reset = () => {
    window.localStorage.clear();
    window.location.reload();
  };
  console.log("onEditorChange", onEditorChange);
  const download = () => {
    console.log("download", download);
    // printPartial(document.querySelector("#printPDF"));
    const toolbar = document.querySelector(".editor-toolbar");
    const resume = document.querySelector(".container");
    // @ts-ignore
    resume.style.boxShadow = null;
    // @ts-ignore
    toolbar.style.visibility = "hidden";
    window.print();
    // @ts-ignore
    toolbar.style.visibility = "visible";
    // @ts-ignore
    resume.style.boxShadow = "3px 3px 9px rgba(0, 0, 0, 0.2)";
  };
  // dom的部分printf
  /*function printPartial(dom: any, { title = document.title } = {}) {
    if (!dom) return;
    let copyDom = document.createElement("span");
    const styleDom = document.querySelectorAll("style, link, meta");
    const titleDom = document.createElement("title");
    titleDom.innerText = title;

    copyDom.appendChild(titleDom);
    Array.from(styleDom).forEach((item) => {
      copyDom.appendChild(item.cloneNode(true));
    });
    copyDom.appendChild(dom.cloneNode(true));

    const htmlTemp = copyDom.innerHTML;
    // @ts-ignore
    copyDom = null;

    const iframeDom = document.createElement("iframe");
    const attrObj = {
      height: 0,
      width: 0,
      border: 0,
      wmode: "Opaque",
    };
    const styleObj = {
      position: "absolute",
      top: "-999px",
      left: "-999px",
    };
    Object.entries(attrObj).forEach(([key, value]) =>
      // @ts-ignore
      iframeDom.setAttribute(key, value)
    );
    Object.entries(styleObj).forEach(
      // @ts-ignore
      ([key, value]) => (iframeDom.style[key] = value)
    );
    document.body.insertBefore(iframeDom, document.body.children[0]);
    const iframeWin = iframeDom.contentWindow;
    // @ts-ignore
    const iframeDocs = iframeWin.document;
    iframeDocs.write(`<!doctype html>`);
    iframeDocs.write(htmlTemp);

    // @ts-ignore
    iframeWin.focus();
    // @ts-ignore
    iframeWin.print();
    document.body.removeChild(iframeDom);
  }*/
  return (
    <React.Fragment>
      <div className="editor-toolbar">
        <Button onClick={() => setModal(true)}>编辑简历</Button>
        <Button onClick={reset}>重置简历</Button>
        <Button onClick={download}>下载简历</Button>
      </div>
      <Editor
        isVisible={isModal}
        data={data}
        onClose={() => setModal(false)}
        onEditor={onEditorChange}
      />
    </React.Fragment>
  );
};

export default EditorModal;

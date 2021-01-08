import React from "react";
import { NodeData } from "../../resumeData";

const ListItem = ({ data }: { data: NodeData }) => {
  // console.log("data", data);
  const regexHighlight = /((\*\*)([^\*]*)(\*\*))+/gm;
  let str = "负责交互式**前端框架fw.js**的页面逻辑互式**测试1**的页面逻辑";
  // @ts-ignore
  function highlightReplacer(match, p1, p2, p3, offset, string) {
    return React.createElement("span", { className: "highlight" }, p3);
  }
  str.replace(regexHighlight, highlightReplacer);
  const addHighlight = (value: string) => {
    value.replace(regexHighlight, highlightReplacer);
  };

  const list =
    data.data !== undefined &&
    data.data.map((value: string, index: number) => (
      <li key={index}>
        <div className="icon-div">
          <i className={`iconfont ${data.icon} gear-icon`}></i>
        </div>
        <div
          className="exp-list-line"
          dangerouslySetInnerHTML={{ __html: value }}
        ></div>
      </li>
    ));
  return <ul className="column-item">{list}</ul>;
};
export default ListItem;

import React from "react";
import { NodeData } from "../../resumeData";

const ListItem = ({ data }: { data: NodeData }) => {
  // console.log("data", data);
  const list =
    data.data !== undefined &&
    data.data.map((value: string, index: number) => (
      <li key={index}>
        <div className="icon-div">
          <i className={`iconfont ${data.icon} gear-icon`}></i>
        </div>
        <div className="exp-list-line">{value}</div>
      </li>
    ));
  return <ul className="column-item">{list}</ul>;
};
export default ListItem;

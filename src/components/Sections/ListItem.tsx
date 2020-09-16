import React from "react";
import { ContentListData } from "../../resumeData";

const ListItem = ({ data }: { data: ContentListData }) => {
  // console.log("data", data);
  const list = data.data.map((value: string, index: number) => (
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

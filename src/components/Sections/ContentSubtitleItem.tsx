import React from "react";
import { NodeData } from "../../resumeData";
import ListItem from "./ListItem";

const ContentSubtitleItem = ({ data }: { data: NodeData }) => {
  // console.log("data", data);
  // 类型一：标题
  const type1 = (
    <div className="column-item">
      {data.icon ? <i className={`iconfont ${data.icon} title-icon`} /> : null}
      <h3>{data.text}</h3>
    </div>
  );
  // 类型二：时间线或者位置
  const type2 = (
    <div className="column-item">
      {data.icon ? (
        <i className={`iconfont ${data.icon} timeline-location-icon`} />
      ) : null}
      <span className="timeline-loaction-text">{data.text}</span>
    </div>
  );
  // 类型三：子标题
  const type3 = (
    <div className="column-item">
      <h4>
        <span className="highlight">{data.text}</span>
      </h4>
    </div>
  );
  // 类型四: 条目
  const type4 = (
    <div className="column-item">
      <ListItem data={data} />
      <div className="exp-list-line"></div>
    </div>
  );
  return data.titletype === "title" ? (
    <>{type1}</>
  ) : data.titletype === "time|location" ? (
    <>{type2}</>
  ) : data.titletype === "datalist" ? (
    <>{type4}</>
  ) : (
    <>{type3}</>
  );
};

export default ContentSubtitleItem;

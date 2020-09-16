import React from "react";
// import DataList from "../Unit/DataList";

const ContentTitle = ({ title }: { title: string }) => {
  // list：内容列表
  return (
    <div className="content-title">
      <h2 className="title-cutline">{title}</h2>
    </div>
  );
};

export default ContentTitle;

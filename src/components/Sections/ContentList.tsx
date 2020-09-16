import React from "react";
import ContentTitle from "./ContentTitle";
import Content from "./Content";
import "./content.css";
import { ContentData, ItemData } from "../../resumeData";

const ContentList = ({ list }: { list: ContentData }) => {
  // list：内容列表
  const content = list.item.map((value: ItemData, index: number) => (
    <Content key={index} item={value} />
  ));
  return (
    <div className="content-list">
      <ContentTitle title={list.title} />
      {content}
    </div>
  );
};

export default ContentList;

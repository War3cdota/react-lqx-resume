import React from "react";
import ContentTitle from "./ContentTitle";
import Content from "./Content";
import "./content.css";
import { ChartData, ItemData } from "../../resumeData";
import PieChart from "./PieChart";

const ChartList = ({ list }: { list: ChartData }) => {
  // list：内容列表
  const content = list.item.map((value: ItemData, index: number) => (
    <Content key={index} item={value} />
  ));
  return (
    <div className="content-list">
      <ContentTitle title={list.title} />
      <div className="chart-list">
        <PieChart chartData={list.DataTable} />
        <div className="description">{content}</div>
      </div>
    </div>
  );
};

export default ChartList;

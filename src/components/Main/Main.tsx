import React from "react";
import "./main.css";
import ContentList from "../Sections/ContentList";
import { ContentData, ChartData } from "../../resumeData";
import ChartList from "../Sections/ChartList";

const Main = ({
  experience,
  project,
  education,
  selfevaluation,
  chart,
}: {
  experience: ContentData;
  project: ContentData;
  education: ContentData;
  selfevaluation: ContentData;
  chart: ChartData;
}) => {
  return (
    <>
      <section className="main-left">
        <ContentList list={experience} />
        <ContentList list={project} />
        <ChartList list={chart} />
      </section>
      <section className="main-right">
        <ContentList list={education} />
        <ContentList list={selfevaluation} />
      </section>
    </>
  );
};

export default Main;

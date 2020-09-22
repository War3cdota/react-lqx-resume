import React from "react";
import "./main.css";
import ContentList from "../Sections/ContentList";
import { ContentData, ChartData } from "../../resumeData";
import ChartList from "../Sections/ChartList";

type MailProps = {
  experience: ContentData;
  project: ContentData;
  education: ContentData;
  selfevaluation: ContentData;
  chart: ChartData;
};

const Main = ({
  experience,
  project,
  education,
  selfevaluation,
  chart,
}: MailProps) => {
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

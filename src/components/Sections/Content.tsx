import React from "react";
import ContentSubtitleItem from "./ContentSubtitleItem";
import ListItem from "./ListItem";
import { ItemData } from "../../resumeData";

const Content = ({ item }: { item: ItemData }) => {
  return (
    <div className="content-subtitle">
      <div className="subtitle-column">
        {item.title ? <ContentSubtitleItem data={item.title} /> : null}
        {item.timeline ? <ContentSubtitleItem data={item.timeline} /> : null}
      </div>
      {!(item.subTitle && item.subTitle) ? null : (
        <div className="subtitle-column">
          {item.subTitle ? <ContentSubtitleItem data={item.subTitle} /> : null}
          {item.subTitle ? <ContentSubtitleItem data={item.location} /> : null}
        </div>
      )}

      <div className="subtitle-column">
        <ListItem data={item.contentlist} />
      </div>
    </div>
  );
};

export default Content;

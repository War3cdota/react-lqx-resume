import React from "react";
import DataList from "../Unit/DataList";
import "./header.css";

const Header = ({
  name,
  englishname,
  wechat,
  description,
  information,
}: {
  name: string;
  englishname: string;
  wechat: string;
  description: undefined | Array<any>;
  information: Array<any>[];
}) => {
  // list：内容列表
  // console.log("information", information);

  return (
    <header className="header">
      <section>
        {/* <h1 className="header-background">{englishname}</h1> */}
      </section>
      <section className="header-name">
        <h1>{name}</h1>
        <h2>
          <strong>{description && description.join(" / ")}</strong>
        </h2>
      </section>
      <address className="header-information">
        <DataList data={information} isOrdered={false} />
      </address>
      <figure className="header-wechat">
        <img src={wechat} alt="请粘贴照片" />
      </figure>
    </header>
  );
};

export default Header;

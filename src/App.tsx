import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import EditorModal from "./components/Editor/EditorModal";
import resume from "./resumeData";
import Main from "./components/Main/Main";

const App = () => {
  const style: any = {
    shadow: {
      boxShadow: "3px 3px 9px rgba(0, 0, 0, 0.2)",
    },
  };
  const [data, setData] = React.useState(
    JSON.parse(
      window.localStorage.getItem("resumeData") || JSON.stringify(resume)
    )
  );
  const handleChangeData = (value: any) => {
    setData(value);
  };
  // console.log(data);
  return (
    <>
      <div className="container" style={style.shadow}>
        <EditorModal data={data} onEditorChange={handleChangeData} />
        <Header
          information={data.information}
          name={data.name}
          englishname={data.englishname}
          description={data.description}
          wechat={data.wechat}
        />
        <Main
          experience={data.experience}
          project={data.project}
          education={data.education}
          selfevaluation={data.selfevaluation}
          chart={data.skillchart}
        />
      </div>
    </>
  );
};
export default App;

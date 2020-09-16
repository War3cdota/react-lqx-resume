import React from "react";

const DataList = ({
  data,
  isOrdered,
}: {
  data: Array<any>;
  isOrdered: boolean;
}) => {
  const list = data.map((value: any, index: number) => (
    <li key={`${index}_${value}`}>
      <i className={`iconfont ${value.icon}`} /> {value.text}
    </li>
  ));
  return isOrdered ? <ol>{list}</ol> : <ul>{list}</ul>;
};

export default DataList;

import React from "react";
import Card from "./Card";
import "./List.css";

const List = (props) => {
  console.log(props.result, "11");
  return (
    <div className="mainList">
      {props.result.map((res) => (
        <div key={res.id} className="listItems">
          <Card
            id={res.id}
            deleteItem={props.deleteItem}
            inputVal={res.inputVal}
          />
        </div>
      ))}
    </div>
  );
};

export default List;

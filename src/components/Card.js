import React from "react";
import "./List.css";
import { FiTrash } from "react-icons/fi";

const Card = (props) => {
  return (
    <div>
      <li className="ilItem">
        <h1> {props.inputVal}</h1>
        <button onClick={() => props.deleteItem(props.id)}>
          <FiTrash className="dustbin" />
        </button>
      </li>
    </div>
  );
};

export default Card;

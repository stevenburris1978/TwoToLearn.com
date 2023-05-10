import React from "react";
import "./formbutton.css";

export default function FormButton(props) {
  return (
    <div id="button" className="row">
      <button>{props.category}</button>
    </div>
  );
}
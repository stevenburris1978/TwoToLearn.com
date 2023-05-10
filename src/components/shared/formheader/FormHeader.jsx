import React from "react";
import "./formheader.css";

export default function FormHeader(props) {
  return (
    <div>
      <h2 id="headerTitle">{props.category}</h2>
    </div>
  );
}
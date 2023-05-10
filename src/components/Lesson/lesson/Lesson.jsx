import React, { useContext } from "react";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import Card from "../shared/Card";
import LessonContext from "../context/LessonContext";
import "./lesson.css";

export default function Lesson({
  id,
  category,
  level,
  location,
  date,
  description,
  price,
  lesson,
  checked,

}) {
  const { checkLesson, deleteLesson, editLesson } = useContext(LessonContext);
  return (
    <>
      <Card>
        <input
          type="checkbox"
          checked={checked}
          onChange={() => checkLesson(id)}
        />

        <div
          className="text-display"

        >
          {category}
        </div>

        <div
          className="text-display"

        >
          {level}
        </div>

        <div
          className="text-display"

        >
          {location}
        </div>
        <div
          className="text-display"

        >
          {date}
        </div>
        <div
          className="text-display"

        >
          {description}
        </div>
        <div
          className="text-display"

        >
          {price}
        </div>
        <button onClick={() => editLesson(lesson)} className="edit">
          <FaEdit />
        </button>
        <button onClick={() => deleteLesson(id)} className="delete">
          <FaTrashAlt />
        </button>
      </Card>
    </>
  );
}
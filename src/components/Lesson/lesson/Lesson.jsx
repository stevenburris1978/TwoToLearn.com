import React, { useContext } from "react";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import "./lesson.css";
import Card from "../../shared/card/Card";
import LessonContext from "../../context/LessonContext";
// import { NavLink } from "react-router-dom";

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
    // const navigate = useNavigate();

  // const navigateToLessonDetails = (lesson) => {
  //   navigate("/LessonDetails", { lesson });
  // };
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
                  {/* <NavLink
          classname="addToCartButton"
          onClick={navigateToLessonDetails}
        >
          <h3 className="addToCartText">Add to Cart</h3>
         </NavLink> */}
      </Card>
    </>
  );
}
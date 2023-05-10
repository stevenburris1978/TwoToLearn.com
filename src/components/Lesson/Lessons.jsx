
import LessonContext from "../context/LessonContext";
import Lesson from "./lesson/Lesson";
import { useContext } from "react";

export default function Lessons() {

  const { lessonList } = useContext(LessonContext);
  const result = lessonList;

  return (
    <>
      {result.length ? (
        <div>
          {result.map((lesson) => (
            <Lesson
              key={lesson.data.id}
              id={lesson.id}
              category={lesson.data.category}
              level={lesson.data.level}
              location={lesson.data.location}
              date={lesson.data.date}
              description={lesson.data.description}
              price={lesson.data.price}
              checked={lesson.data.checked}
              lesson={lesson}
            />
          ))}


        </div>
      ) : (
        <p>Lesson List is empty</p>
      )}
    </>
  );
}
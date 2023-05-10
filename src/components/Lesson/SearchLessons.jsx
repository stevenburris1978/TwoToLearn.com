import React, { useState, useContext } from "react";
import SearchCard from "./searchcard/SearchCard";
import LessonContext from "../context/LessonContext";
import Lesson from "./lesson/Lesson";

export default function SearchLessons() {
  const [search, setSearch] = useState("");

  const { lessonList } = useContext(LessonContext);

  const result = lessonList.filter((lesson) => (
    lesson.data.category.toLowerCase().includes(search.toLowerCase()) ||
    lesson.data.location.toLowerCase().includes(search.toLowerCase())
  ));

  return (
    <>
      <SearchCard search={search} setSearch={setSearch} />
      
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
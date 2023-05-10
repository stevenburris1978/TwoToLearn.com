import React from "react";
import { Routes, Route } from "react-router-dom";
import Lesson from "../components/Lesson/lesson/Lesson";
import AllLessonsBox from "../components/Lesson/AllLessonsBox";

export default function LessonRoutes() {
  return (
    <Routes>
      <Route index element={<Lesson />} />
      <Route path=":id" element={<Lesson />} />
      <Route path="allLessonsBox" element={<AllLessonsBox />} />
    </Routes>
  );
}
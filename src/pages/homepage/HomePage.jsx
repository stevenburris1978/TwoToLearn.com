import Lessons from "../components/Lesson/Lessons";
import AddLesson from "../components/Lesson/AddLesson";
import AllLessonsBox from "../../components/Lesson/AllLessonsBox";

export default function HomePage() {

  return (
    <div className="container">
      <AddLesson />
      <AllLessonsBox />
      <Lessons />
    </div>
  );
  }
import AllLessonsBox from "../../components/Lesson/AllLessonsBox";
import Lessons from "../../components/Lesson/Lessons";
import AddLesson from "../../components/Lesson/addlesson/AddLesson";

export default function HomePage() {

  return (
    <div className="container">
      <AddLesson />
      <AllLessonsBox />
      <Lessons />
    </div>
  );
  }
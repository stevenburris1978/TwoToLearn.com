import { useState, createContext, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  limit,
  orderBy,
  query,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebase";
// fetch the Lesson

const LessonContext = createContext();

export const LessonProvider = ({ children }) => {
  const [lessonList, setLessonList] = useState([]);
  const [lessonEdit, setLessonEdit] = useState({
    lesson: {},
    edit: false,
  });

  useEffect(() => {
    const fetchLesson = async () => {
      try {
        const lessonListRef = collection(db, "lessonList");
        const q = query(lessonListRef, orderBy("category"), limit(10));
        const querySnapshot = await getDocs(q);
        const lessonList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }));
        setLessonList(lessonList);
      } catch (error) {
        console.error("Error Fetching Lesson List", error);
      }
    };
    fetchLesson();
  }, []);

  //Add Lesson
  const addLesson = async (newLesson) => {
    newLesson.id = uuidv4();
    newLesson.checked = false;
    try {
      const docRef = await addDoc(collection(db, "lessonList"), newLesson);
      console.log("Document written: ", docRef.id);
      setLessonList((preLessonList) => [
        ...preLessonList,
        { id: docRef.id, data: newLesson },
      ]);
    } catch (err) {
      console.log(err);
    }
  };

  //Update Lesson
  const updateLesson = async (id, updLesson) => {
    const docRef = doc(db, "lessonList", id);
    console.log(id, updLesson);
    await updateDoc(docRef, updLesson);
    setLessonList((preLessonList) => 
      preLessonList.map((lesson) =>
       lesson.id === id ? { id: lesson.id, data: updLesson } : lesson
      ));
  
  };

      //Delete Lesson

    const deleteLesson = async (id) => {
      if (window.confirm("Confirm delete!")) {
        try{
        const docRef = doc(db, "lessonList", id);
        await deleteDoc(docRef);
        setLessonList(lessonList.filter((lesson) => lesson.id !== id));
        } catch (error) {
        console.error("error when trying delete lesson", error);
        }
      }
    };

    //Edit Lesson
  const editLesson = (lesson) => {
    setLessonEdit({ lesson, edit: true });
  };

  //Checked!
  const checkLesson = (id) => {
    setLessonList(
      lessonList.map((lesson) =>
        lesson.id === id ? { ...lesson, checked: !lesson.checked } : lesson
      )
    );
  };

  return (
    <LessonContext.Provider
      value={{
        lessonList,
        deleteLesson,
        checkLesson,
        addLesson,
        editLesson,
        updateLesson,
        lessonEdit,
      }}
    >
      {children}
    </LessonContext.Provider>
  );
};

export default LessonContext;
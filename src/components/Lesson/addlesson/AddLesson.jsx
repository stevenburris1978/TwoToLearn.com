import { useFormik } from "formik";
import React, { useContext, useEffect } from "react";
import Card from "../shared/Card";
import LessonContext from "../context/LessonContext";
import "./addlesson.css";

import * as Yup from "yup";

export default function AddLesson() {
  
  const { addLesson, lessonEdit, updateLesson } = useContext(LessonContext);
  const formik = useFormik({
    initialValues: {
      category: "",
      level: "",
      location: "",
      date: "",
      description: "",
      price: "",
    },

    validationSchema: Yup.object({
      lesson: Yup.string()
        .required("Category is required"),
      level: Yup.string()
        .required("Instruction level is required"),
      location: Yup.string()
        .required("Location is required"),
      date: Yup.string()
        .required("Date is required"),
      description: Yup.string()
        .required("Description is required"),
      price: Yup.number()
        .required("Price is required"),
    }),

    onSubmit: (values) => {
      if (lessonEdit.edit === true) {
        updateProduct(lessonEdit.lesson.id, values);
        formik.resetForm();
        lessonEdit.edit = false;
      } else {
      addLesson(values);
      formik.resetForm();
    }
    },
  });

  const isButtonEdit = lessonEdit.edit === true ? false : true;

  useEffect(() => {
    if (lessonEdit.edit === true) {
      formik.setValues({
        category: lessonEdit.lesson.data.category,
        level: lessonEdit.lesson.data.level,
        location: lessonEdit.lesson.data.location,
        date: lessonEdit.lesson.data.date,
        description: lessonEdit.lesson.data.description,
        price: lessonEdit.lesson.data.price,
      });
    }
  }, 
  // eslint-disable-next-line
  [lessonEdit.edit]);
  
  return (
    <Card>
      <form onSubmit={formik.handleSubmit}>
        <h2>Add a Lesson to your list</h2>
        <div className="inputBox">
          <div className="input_row">
            <label
              htmlFor="lesson"
              className={`label ${
                formik.errors.category && formik.touched.category ? "error" : ""
              }`}
            >
              {formik.errors.category ? formik.errors.category : "Category"}
            </label>
            <input
              type="text"
              className="input"
              name="category"
              placeholder="Category"
              onChange={formik.handleChange}
              value={formik.values.category}
            />
          </div>
          <div className="input_row">
            <label
              htmlFor="level"
              className={`label ${
                formik.errors.level && formik.touched.level
                  ? "error"
                  : ""
              }`}
            >
              {formik.errors.level
                ? formik.errors.level
                : "Level"}
            </label>
            <input
              type="text"
              className="input"

              name="level"
              placeholder="Level"
              onChange={formik.handleChange}
              value={formik.values.level}
            />
          </div>
          <div className="input_row">
            <label
              htmlFor="location"
              className={`label ${
                formik.errors.location && formik.touched.location ? "error" : ""
              }`}
            >
              {formik.errors.location ? formik.errors.location : "Location"}
            </label>
            <input
              type="text"
              className="input"
              name="location"
              placeholder="Location"
              onChange={formik.handleChange}
              value={formik.values.location}
            />
          </div>
          <div className="input_row">
            <label
              htmlFor="date"
              className={`label ${
                formik.errors.date && formik.touched.date
                  ? "error"
                  : ""
              }`}
            >
              {formik.errors.date
                ? formik.errors.date
                : "Date"}
            </label>
            <input
              type="text"
              className="input"

              name="date"
              placeholder="Date"
              onChange={formik.handleChange}
              value={formik.values.date}
            />
          </div>
          <div className="input_row">
            <label
              htmlFor="description"
              className={`label ${
                formik.errors.description && formik.touched.description ? "error" : ""
              }`}
            >
              {formik.errors.description ? formik.errors.description : "Description"}
            </label>
            <input
              type="text"
              className="input"
              name="description"
              placeholder="Description"
              onChange={formik.handleChange}
              value={formik.values.description}
            />
          </div>
          <div className="input_row">
            <label
              htmlFor="price"
              className={`label ${
                formik.errors.price && formik.touched.price
                  ? "error"
                  : ""
              }`}
            >
              {formik.errors.price
                ? formik.errors.price
                : "Price"}
            </label>
            <input
              type="text"
              className="input"

              name="price"
              placeholder="Price"
              onChange={formik.handleChange}
              value={formik.values.price}
            />
          </div>
        </div>
        
        <div>
          {isButtonEdit ? (
            <button type="submit" className="btn">
              Add Lesson
            </button>
          ) : (
            <button type="submit" className="btn">
              Edit Lesson
            </button>
          )}
        </div>
      </form>
    </Card>
  );
}
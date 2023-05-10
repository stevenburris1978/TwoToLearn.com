import React, { createContext, useState,useContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartLessons, setCartLessons] = useState([]);

  const addLessonToCart = (lesson) => {
    setCartLessons((prevLessons) => [...prevLessons, lesson]);
  };

  const removeLessonFromCart = (lesson) => {
    setCartLessons((prevLessons) => {
      return prevLessons((i) => i.id !== lesson.id);
    });
  };

  const calculateTotalPrice = () => {
    return cartLessons.reduce((total, lesson) => {
      return total + lesson.price;
    }, 0);
  };

  const values = {
    cartLessons,
    addLessonToCart,
    removeLessonFromCart,
    calculateTotalPrice,
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

export const Cart = () => {
  return useContext(CartContext);
};
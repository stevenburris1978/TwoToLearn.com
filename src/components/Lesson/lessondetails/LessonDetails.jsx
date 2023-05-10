import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import "./lessondetails.css";
import { Cart } from "../../context/CartContext";
import Card from "../../shared/card/Card";
import { NavLink, useNavigate } from "react-router-dom";

const LessonDetails = ({ route }) => {
  const { lesson } = route.params;
  const { addLessonToCart } = Cart();
  const [quantity, setQuantity] = useState(1);

  const navigate = useNavigate();

  const handleAddToCart = async() => {
    try{
      await addLessonToCart({ ...lesson, quantity });
      setQuantity(1);
      navigate("/Cart");
    } catch (err) {
     console.log(err);
    }
  };

  return (
    <Card className="container">
      <div className="detailsContainer">
        <h3 className="lesson">{lesson.category}</h3>
        <h3 className="price">${lesson.price}</h3>
        <div className="quantityContainer">
          <button
            classname="button"
            onClick={() => setQuantity((prev) => prev - 1)}
            disabled={quantity === 1}
          >
            <FaMinus size={26}/>
          </button>
          <h3 className="quantity">{quantity}</h3>
          <button
            classname="button"
            onClick={() => setQuantity((prev) => prev + 1)}
          >
            <FaPlus size={26}/>
          </button>
        </div>
        
        <NavLink
          classname="addToCartButton"
          onClick={handleAddToCart}
        >
          <h3 className="addToCartText">Add to Cart</h3>
        </NavLink>
        
      </div>
    </Card>
  );
};

export default LessonDetails;
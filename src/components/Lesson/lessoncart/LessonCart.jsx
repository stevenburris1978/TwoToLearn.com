import { Cart } from "../../context/CartContext";
import "./lessoncart.css";
import Card from "../../shared/card/Card";
import Lesson from "../lesson/Lesson";

const LessonCart = () => {
  const { cartLessons, calculateTotalPrice } =
    Cart();

  return (
    <Card className="container">
      {cartLessons.length > 0 ? (
        <div>
          {cartLessons.map((lesson) => (
          <Lesson
            key={lesson.id}
            id={lesson.id}
            category={lesson.category}
            price={lesson.price}
            lesson={lesson}
          />
          ))}

          <div className="bottom">

              <h3 className="total">Total: ${calculateTotalPrice()}</h3>

          </div>

        </div>
      ) : (
        <h2 className="empty">Your cart is empty!</h2>
      )}
    </Card>
  );
};

export default LessonCart;
import { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import "./App.css";
import PropTypes from "prop-types";

export default function Carousel({ items }) {
  let [currentItemIndex, setCurrentItemIndex] = useState(0);
  let [direction, setDirection] = useState("right");

  useEffect(() => {
    setCurrentItemIndex(0);
  }, [items]);

  useEffect(() => {
    if (direction === "left" && currentItemIndex === 0) {
      setDirection("right");
    } else if (direction == "right" && currentItemIndex == items.length - 1) {
      setDirection("left");
    }
    const interval = setInterval(() => {
      if (direction == "left") {
        setCurrentItemIndex(currentItemIndex - 1);
      } else {
        setCurrentItemIndex(currentItemIndex + 1);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [currentItemIndex, items, direction]);

  let transformItems = (index) => {
    let transform = "";

    transform = `translateX(${(index - currentItemIndex) * 100}%)`;

    return transform;
  };

  const renderCurrentItem = () => {
    return (
      <div className="carousel__center">
        {items &&
          items.map((item, index) => {
            return (
              <div
                className="carousel__item"
                style={{
                  transform: transformItems(index),
                  opacity: index === currentItemIndex ? 1 : 0.5,
                }}
                key={index}
              >
                <img
                  className="carousel__image"
                  src={item._url}
                  alt={item._alt}
                />
              </div>
            );
          })}
        <button
          className="left"
          onClick={() =>
            setCurrentItemIndex(
              (currentItemIndex - 1 + items.length) % items.length
            )
          }
        >
          <IoIosArrowBack color="white" size={30} />
        </button>
        <button
          className="right"
          onClick={() =>
            setCurrentItemIndex((currentItemIndex + 1) % items.length)
          }
        >
          <IoIosArrowForward color="white" size={30} />
        </button>
      </div>
    );
  };

  return (
    <div className="carousel">
      {/* {renderPreviousItem()} */}

      {renderCurrentItem()}

      {/* {renderNextItem()} */}
    </div>
  );
}

Carousel.propTypes = {
  items: PropTypes.array.isRequired,
};

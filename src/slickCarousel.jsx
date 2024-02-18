import { useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import PropTypes from "prop-types";
import "./slickCraousel.css";
import ProdcutCard from "./ProductCard";

function CarouselSimple(props) {
  let [currentItemIndex, setCurrentItemIndex] = useState(0);

  useEffect(() => {
    if (currentItemIndex === props.items.length - 2) {
      setCurrentItemIndex(0);
    }

    const interval = setInterval(() => {
      setCurrentItemIndex((currentItemIndex + 1) % props.items.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [props.items, currentItemIndex]);

  let transformItems = (index) => {
    let transform = "";
    if (index === currentItemIndex) {
      transform = "translateX(0)";
    } else {
      transform = `translateX(${(index - currentItemIndex) * 100}%)`;
    }
    return transform;
  };

  return (
    <div className="carousel_slick">
      <div className="sidebar">
        <div>
          <h1>{props.title}</h1>
        </div>
        <div className="buttons">
          <button
            onClick={() =>
              setCurrentItemIndex(
                (currentItemIndex - 1 + props.items.length) % props.items.length
              )
            }
          >
            <IoIosArrowBack color="#b9b9b9" size={30} />
          </button>
          <button
            onClick={() =>
              setCurrentItemIndex((currentItemIndex + 1) % props.items.length)
            }
          >
            <IoIosArrowForward color="#b9b9b9" size={30} />
          </button>
        </div>
      </div>
      <div className="carousel_content">
        {props.items.map((item, index) => {
          return (
            <div
              key={index}
              className="carousel__item_slick"
              style={{
                transform: transformItems(index),
              }}
            >
              {/* <img src={item._url} alt="carousel" /> */}
              <ProdcutCard product={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

CarouselSimple.propTypes = {
  items: PropTypes.array.isRequired,
  title: PropTypes.string,
};

export default CarouselSimple;

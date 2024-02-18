import PropTypes from "prop-types";
import "./ProductCard.css";
// rating icon from react-icons
import { FaStar } from "react-icons/fa";
function ProdcutCard({ product }) {
  console.log(product);
  console.log(product.name);
  return (
    <>
      <img src={product._url} alt="product" />

      <div className="product_card_description">
        <div className="name">
          <p>{product.name}</p>
        </div>
        <div className="discount">
          {product.couponDiscountRate && (
            <p className="rate">{product.couponDiscountRate}%</p>
          )}
          {product.couponDiscountPrice && <p>{product.couponDiscountPrice}</p>}
        </div>

        <p>
          <FaStar />
          {((product.rating / 10) * 10).toFixed(1)}
        </p>
      </div>
    </>
  );
}

ProdcutCard.propTypes = {
  product: PropTypes.object,
};

export default ProdcutCard;

// Path: src/ProductCard.css

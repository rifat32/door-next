import { Fragment } from "react";
import Link from "next/link";
import { connect } from "react-redux";
import { useToasts } from "react-toast-notifications";
import { IoIosClose } from "react-icons/io";
import { getDiscountPrice } from "../../../lib/product";
import { deleteFromCart } from "../../../redux/actions/cartActions";
import { BACKEND,CURRENCY  } from "../../../../config";

const MiniCart = ({ cartItems, deleteFromCart }) => {
  let cartTotalPrice = 0;
  const { addToast } = useToasts();
  return (
    <Fragment>
      {cartItems.length > 0 ? (
        <div className="cart-box">
          <ul className="cart-list">
            {cartItems.map((product, key) => {
              const discountedPrice = parseFloat(getDiscountPrice(
                product.price,
                product.discount
              )).toFixed(2);
              cartTotalPrice += discountedPrice * product.qty;
              return (
                <li key={key}>
                  <button
                    className="item-remove"
                    onClick={() => deleteFromCart(product, addToast)}
                  >
                    <IoIosClose />
                  </button>
                  <div className="single-item">
                    <div className="single-item__image">
                      <Link
                        href={`/shop/product-basic/[slug]?slug=${product.slug}`}
                        as={"/shop/product-basic/" + product.slug}
                      >
                        <a>
                          <img src={`${BACKEND}/${product.image}`} alt="cart_thumb1" />
                        </a>
                      </Link>
                    </div>
                    <div className="single-item__content">
                      <Link
                        href={`/shop/product-basic/[slug]?slug=${product.slug}`}
                        as={"/shop/product-basic/" + product.slug}
                      >
                        <a>{product.name}</a>
                      </Link>
                      <span className="cart-quantity">
                        {" "}
                        {product.qty} x{" "}
                        <span className="cart-amount">
                          {" "}
                          <span className="price-symbol">{CURRENCY}</span>
                        </span>
                        {discountedPrice}
                      </span>
                      {product.selectedProductColor &&
                      product.selectedProductSize ? (
                        <div className="cart-variation">
                          <p>Color: {product.selectedProductColor}</p>
                          <p>Size: {product.selectedProductSize}</p>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="cart-footer">
            <p className="cart-total">
              <strong>Subtotal:</strong>{" "}
              <span className="cart-price">
                {" "}
                <span className="price-symbol">{CURRENCY}</span>
              </span>
              {parseFloat(cartTotalPrice).toFixed(2)}
            </p>
            <div className="cart-buttons">
              <Link href="/cart">
                <a className="btn btn-fill-line view-cart">View Cart</a>
              </Link>
              <Link href="/other/checkout">
                <a className="btn btn-fill-out checkout">Checkout</a>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteFromCart: (item, addToast) => {
      dispatch(deleteFromCart(item, addToast));
    }
  };
};

export default connect(null, mapDispatchToProps)(MiniCart);

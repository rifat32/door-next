import { Fragment, useState } from "react";
import Link from "next/link";
import ProductModal from "./elements/ProductModal";
import { ProductRating } from "../Product";
import { BACKEND } from "../../../config";

const ProductGridThree = ({
  product,
  discountedPrice,
  productPrice,
  cartItem,
  wishlistItem,
  compareItem,
  bottomSpace,
  addToCart,
  addToWishlist,
  deleteFromWishlist,
  addToCompare,
  deleteFromCompare,
  addToast,
  cartItems,
  sliderClass
}) => {
  const [modalShow, setModalShow] = useState(false);
  const [colorImage, setColorImage] = useState("");

  return (
    <Fragment>
       {/* <Link
                href={`/shop/[slug]?slug=${product.id}`}
                as={"/shop/" + product.id}
              >
                <a  className={`${sliderClass ? sliderClass : ""} ${
          bottomSpace ? bottomSpace : ""
        }`}> */}

    <div className={`${sliderClass ? sliderClass : ""} ${
          bottomSpace ? bottomSpace : ""
        }`}>
        <div className="product-grid product-grid--style-two">
        <Link
              href={`/shop/[slug]?slug=${product.slug}`}
              as={"/shop/" + product.id}
            >
              <a>
          <div className="product-grid__image">
          <Link
              href={`/shop/[slug]?slug=${product.slug}`}
              as={"/shop/" + product.id}
            >
              <a>
                <img
                  src={colorImage ? `${BACKEND}/${colorImage}` : `${BACKEND}/${product.image}`}
                  alt="product_img1"
                  style={{
                    height:"inherit",
                    width:"inherit"
                  }}
                  
                />
              </a>
            </Link>

            {/* <div className="product-grid__action-box">
              <ul>
                <li>
                  <button
                    onClick={
                      compareItem !== undefined
                        ? () => deleteFromCompare(product, addToast)
                        : () => addToCompare(product, addToast)
                    }
                    className={compareItem !== undefined ? "active" : ""}
                  >
                    <i className="icon-shuffle" />
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setModalShow(true)}
                    className="d-none d-lg-block"
                  >
                    <i className="icon-magnifier-add" />
                  </button>
                </li>
                <li>
                  <button
                    onClick={
                      wishlistItem !== undefined
                        ? () => deleteFromWishlist(product, addToast)
                        : () => addToWishlist(product, addToast)
                    }
                    className={wishlistItem !== undefined ? "active" : ""}
                  >
                    <i className="icon-heart" />
                  </button>
                </li>
              </ul>
            </div> */}
          </div>
          </a>
          </Link>
          <div className="product-grid__info text-center">
          <h6 className="product-title">
              <Link
                href={`/shop/[slug]?slug=${product.id}`}
                as={"/shop/" + product.id}
              >
                <a>{product.name}</a>
              </Link>
            </h6>
            <div className="product-price">
              {product.discount ? (
                <Fragment>
                  <span className="price">${discountedPrice}</span>
                  <del>${productPrice}</del>
                </Fragment>
              ) : (
                <span className="price">Starting From ${productPrice} </span>
              )}
            </div>
            {product.colors ? (
              <div className="product-switch-wrap">
                <ul>
                  {product.colors.map((single, key) => {
                    return (
                      <li key={key}>
                        <button
                          style={{ backgroundColor: `${single.color.code}` }}
                          onClick={() => setColorImage(single.color_image)}
                          className={
                            colorImage === single.color_image ? "active" : ""
                          }
                        />
                      </li>
                    );
                  })}
                </ul>
              </div>
            ) : (
              ""
            )}
            {/* <div className="rating-wrap">
              <ProductRating ratingValue={product.rating} />
              <span className="rating-num">({product.ratingCount})</span>
            </div> */}
            {/* <div className="add-to-cart">
              {product.affiliateLink ? (
                <a
                  href={product.affiliateLink}
                  target="_blank"
                  className="btn btn-fill-out btn-radius"
                >
                  <i className="icon-action-redo" /> Buy Now
                </a>
              ) : product.variation && product.variation.length >= 1 ? (
                <Link
                  href={`/shop/product-basic/[slug]?slug=${product.slug}`}
                  as={"/shop/product-basic/" + product.slug}
                >
                  <a className="btn btn-fill-out btn-radius">
                    <i className="icon-wrench" /> Select Options
                  </a>
                </Link>
              ) : product.stock && product.stock > 0 ? (
                <button
                  onClick={() => addToCart(product, addToast)}
                  disabled={
                    cartItem !== undefined &&
                    cartItem.quantity >= cartItem.stock
                  }
                  className={`btn btn-fill-out btn-radius ${
                    cartItem !== undefined ? "active" : ""
                  }`}
                >
                  <i className="icon-basket-loaded" /> Add To Cart
                </button>
              ) : (
                <button disabled className="btn btn-fill-out btn-radius">
                  <i className="icon-basket-loaded" /> Add To Cart
                </button>
              )}
            </div> */}
          </div>
        </div>
     
      {/* product modal */}
      <ProductModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        product={product}
        discountedprice={discountedPrice}
        productprice={productPrice}
        cartitems={cartItems}
        cartitem={cartItem}
        wishlistitem={wishlistItem}
        compareitem={compareItem}
        addtocart={addToCart}
        addtowishlist={addToWishlist}
        deletefromwishlist={deleteFromWishlist}
        addtocompare={addToCompare}
        deletefromcompare={deleteFromCompare}
        addtoast={addToast}
      />
        </div>
      {/* </a>
    
              </Link> */}
    </Fragment>
  );
};

export default ProductGridThree;

import { Fragment, useState } from "react";
import Link from "next/link";
import { Col } from "react-bootstrap";
import ProductModal from "./elements/ProductModal";
import { ProductRating } from "../Product";
import { BACKEND, CURRENCY } from "../../../config";

const ProductGridTwo = ({
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
      <div
        className={`${sliderClass ? sliderClass : ""} ${
          bottomSpace ? bottomSpace : ""
        }`}
      >
        <div className="product-grid">
        <Link
              href={`/shop/[slug]?slug=${product.slug}`}
              as={"/shop/" + product.id}
            >
              <a>
              
          <div className="product-grid__image">
            <Link
              href={`/shop/[slug]?slug=${product.id}`}
              as={`/shop/[slug]?slug=${product.id}`}
            >
              <a>
                <img
                 src={colorImage ? `${BACKEND}/${colorImage}` : `${BACKEND}/${product.image}`}
                  alt="product_img1"
                />
              </a>
            </Link>
           
           
          </div>
          <div className="product-grid__info">
            <h6 className="product-title">
              <Link
                href={`/shop/[slug]?slug=${product.id}`}
                as={`/shop/[slug]?slug=${product.id}`}
              >
                <a>{product.name}</a>
              </Link>
            </h6>
            <div className="product-price">
              {product.discount ? (
                <Fragment>
                  <span className="price">{CURRENCY}{discountedPrice}</span>
                  <del>{CURRENCY}{productPrice}</del>
                </Fragment>
              ) : (
                <span className="price">Starting From {CURRENCY}{productPrice} </span>
              )}
            </div>
            {product.colors ? (
              <div className="product-switch-wrap" >
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

           
          </div>
          </a>
            </Link>
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
    </Fragment>
  );
};

export default ProductGridTwo;

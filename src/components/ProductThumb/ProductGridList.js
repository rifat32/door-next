import { Fragment, useState } from "react";
import Link from "next/link";
import { Col } from "react-bootstrap";
import ProductModal from "./elements/ProductModal";
import { ProductRating } from "../Product";
import { BACKEND } from "../../../config";
import { CURRENCY } from "../../../config";
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
const ProductGridList = ({
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
console.log("citem",cartItem)

  return (
    <Fragment>
      <Col
        lg={4}
        sm={6}
        className={`${sliderClass ? sliderClass : ""} ${
          bottomSpace ? bottomSpace : ""
        }`}
      >


        <div className="product-grid">
          {console.log("product",product)}
        <Link
              href={`/shop/[slug]?slug=${product.slug}`}
              as={"/shop/" + product.slug}
            >
             
              <a>
          <div className="product-grid__image">
            <Link
              href={`/shop/[slug]?slug=${product.slug}`}
              as={"/shop/" + product.slug}
            >
             
              <a>
            
                <img
                  src={colorImage ? `${BACKEND}/${colorImage}` : `${BACKEND}/${product.image}`}
                  alt="product_img1"
                  style={{
                    height:"300px"
                  }}
                />
              </a>
            </Link>
            <div className="product-grid__badge-wrapper">
              {product.new ? <span className="pr-flash">NEW</span> : ""}
              {product.featured ? (
                <span className="pr-flash bg-danger">HOT</span>
              ) : (
                ""
              )}
              {product.discount ? (
                <span className="pr-flash bg-success">SALE</span>
              ) : (
                ""
              )}
            </div>
            <div className="product-grid__action-box">
              <ul>
                
                <li>
                  {product.affiliateLink ? (
                    <a href={product.affiliateLink} target="_blank">
                      <i className="icon-action-redo" />
                    </a>
                  ) : product.variation && product.variation.length >= 1 ? (
                    <Link
                      href={`/shop/[slug]?slug=${product.slug}`}
                      as={"/shop/" + product.slug}
                    >
                      <a>
                        <i className="icon-wrench" />
                      </a>
                    </Link>
                  ) : 
                  product.qty && product.qty > 0 ? (
                    // <button
                    //   onClick={() => addToCart(product, addToast)}
                      
                    //   disabled={
                    //     cartItem !== undefined &&
                    //     cartItem.qty >= product.qty
                    //   }
                    //   className={cartItem !== undefined ? "active" : ""}
                    // >
                    //   <i className="icon-basket-loaded" /> 
                    // </button>
                    <></>
                    
                  ) : (
                    // <button disabled>
                    //   <i className="icon-basket-loaded" /> 
                    // </button>
                    <></>
                  )}
                </li>
               
               
               
              </ul>
            </div>
          </div>
          </a>
            </Link>
          <div className="product-grid__info">
            <h6 className="product-title">
              <Link
                href={`/shop/[slug]?slug=${product.slug}`}
                as={"/shop/" + product.slug}
              >
                <a>{product.name}</a>
              </Link>
            </h6>
            <div className="product-price">
              {product.discount ? (
                <Fragment>
                  <span className="price">{CURRENCY}{discountedPrice} </span>
                  <del>{CURRENCY}{productPrice} </del>
                  <span className="on-sale">{product.discount}% Off</span>
                </Fragment>
              ) : (
                <span className="price">Starting From {CURRENCY}{productPrice} </span>
              )}
            </div>
            {/* <div className="rating-wrap">
              <ProductRating ratingValue={product.rating} />
              <span className="rating-num">({product.ratingCount})</span>
            </div> */}
            <div className="colorswatchdown" ></div>
            {product.colors ? (
              <div className="product-switch-wrap">
{/*                 <ul className="row">
                  {product.colors.map((single, key) => {
                    return (
                      <li key={key} className="col-md-1">
                       <OverlayTrigger
                overlay={(props) => (
                  <Tooltip {...props}>
                    {single.color.name}
                  </Tooltip>
                )}
                placement="top"
                >
                        <button
                          style={{ backgroundColor: `${single.color.code}`,border: "2px solid black" }}
                          onClick={() => setColorImage(single.color_image)}
                          className={
                            colorImage === single.color_image ? "active" : ""
                          }
                        />
                        </OverlayTrigger>
                      </li>
                    );
                  })}
                </ul> */}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      



{/* end */}












        <div className="product-list">
          <div className="product-list__image">
            <Link
              href={`/shop/product-basic/[slug]?slug=${product.slug}`}
              as={"/shop/product-basic/" + product.slug}
            >
              <a>
                <img
                  src={colorImage ? `${BACKEND}/${colorImage}` : `${BACKEND}/${product.image}`  }
                  alt="product_img1"
                />
              </a>
            </Link>
            <div className="product-grid__badge-wrapper">
              {product.new ? <span className="pr-flash">NEW</span> : ""}
              {product.featured ? (
                <span className="pr-flash bg-danger">HOT</span>
              ) : (
                ""
              )}
              {product.discount ? (
                <span className="pr-flash bg-success">SALE</span>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="product-list__info">
            <h6 className="product-title">
              <Link
                href={`/shop/product-basic/[slug]?slug=${product.slug}`}
                as={"/shop/product-basic/" + product.slug}
              >
                <a>{product.name}</a>
              </Link>
            </h6>
            <div className="d-flex justify-content-between">
              <div className="product-price">
                {product.discount ? (
                  <Fragment>
                    <span className="price">${discountedPrice}</span>
                    <del>${productPrice}</del>
                    <span className="on-sale">{product.discount}% Off</span>
                  </Fragment>
                ) : (
                  <span className="price">${productPrice}</span>
                )}
              </div>
              <div className="rating-wrap">
                <ProductRating ratingValue={product.rating} />
                <span className="rating-num">({product.ratingCount})</span>
              </div>
            </div>
            <div className="product-description">
              {product.shortDescription}
            </div>
            {product.colors ? (
              <div className="product-switch-wrap">
              {/*   <ul>
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
                </ul> */}
              </div>
            ) : (
              ""
            )}
            <div className="product-list__actions">
              <ul>
                <li>
                  {product.affiliateLink ? (
                    <a
                      href={product.affiliateLink}
                      className="btn btn-fill-out btn-addtocart"
                      target="_blank"
                    >
                      <i className="icon-action-redo" /> Buy Now
                    </a>
                  ) : product.variation && product.variation.length >= 1 ? (
                    <Link
                      href={`/shop/product-basic/[slug]?slug=${product.slug}`}
                      as={"/shop/product-basic/" + product.slug}
                    >
                      <a className="btn btn-fill-out btn-addtocart">
                        <i className="icon-wrench" /> Select Options
                      </a>
                    </Link>
                  ) : 
                  product.stock && product.stock > 0 ? (
                    // <button
                    //   onClick={() => addToCart(product, addToast)}
                    //   disabled={
                    //     cartItem !== undefined &&
                    //     cartItem.quantity >= cartItem.stock
                    //   }
                    //   className={`btn btn-fill-out btn-addtocart ${
                    //     cartItem !== undefined ? "active" : ""
                    //   }`}
                    // >
                    //   <i className="icon-basket-loaded" /> Add To Cart
                    // </button>
                    <></>
                  ) : (
                    // <button disabled className="btn btn-fill-out btn-addtocart">
                    //   <i className="icon-basket-loaded" /> Add To Cart
                    // </button>
                    <></>
                  )}
                </li>
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
            </div>
          </div>
        </div>
      </Col>
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

export default ProductGridList;

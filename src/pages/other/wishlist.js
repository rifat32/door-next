import Link from "next/link";
import { connect } from "react-redux";
import { useToasts } from "react-toast-notifications";
import {
  addToWishlist,
  deleteFromWishlist
} from "../../redux/actions/wishlistActions";
import { addToCart } from "../../redux/actions/cartActions";
import { getDiscountPrice } from "../../lib/product";
import { Container, Row, Col } from "react-bootstrap";
import { LayoutOne } from "../../layouts";
import { BreadcrumbOne } from "../../components/Breadcrumb";
import { IoIosClose } from "react-icons/io";

const Wishlist = ({
  wishlistItems,
  cartItems,
  addToCart,
  deleteFromWishlist
}) => {
  const { addToast } = useToasts();
  return (
    <LayoutOne>
      {/* breadcrumb */}
      <BreadcrumbOne pageTitle="Wishlist">
        <ol className="breadcrumb justify-content-md-end">
          <li className="breadcrumb-item">
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className="breadcrumb-item active">Wishlist</li>
        </ol>
      </BreadcrumbOne>
      <div className="wishlist-content space-pt--r100 space-pb--r100">
        <Container>
          {wishlistItems && wishlistItems.length >= 1 ? (
            <Row>
              <Col lg={12}>
                <div className="table-responsive shop-cart-table">
                  <table className="table mb-0">
                    <thead>
                      <tr>
                        <th className="product-thumbnail">&nbsp;</th>
                        <th className="product-name">Product</th>
                        <th className="product-price">Price</th>
                        <th className="add-to-cart">&nbsp;</th>
                        <th className="product-remove text-center">Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      {wishlistItems.map((product, key) => {
                        const discountedPrice = getDiscountPrice(
                          product.price,
                          product.discount
                        ).toFixed(2);
                        const cartItem = cartItems.filter(
                          (item) => item.id === product.id
                        )[0];

                        return (
                          <tr key={key}>
                            <td className="product-thumbnail">
                              <Link
                                href={`/shop/product-basic/[slug]?slug=${product.slug}`}
                                as={"/shop/product-basic/" + product.slug}
                              >
                                <a>
                                  <img
                                    src={product.thumbImage[0]}
                                    alt="product1"
                                  />
                                </a>
                              </Link>
                            </td>
                            <td className="product-name" data-title="Product">
                              <Link
                                href={`/shop/product-basic/[slug]?slug=${product.slug}`}
                                as={"/shop/product-basic/" + product.slug}
                              >
                                <a>{product.name}</a>
                              </Link>
                              {product.selectedProductColor &&
                              product.selectedProductSize ? (
                                <div className="cart-variation">
                                  <p>Color: {product.selectedProductColor}</p>
                                  <p>Size: {product.selectedProductSize}</p>
                                </div>
                              ) : (
                                ""
                              )}
                            </td>
                            <td className="product-price" data-title="Price">
                              ${discountedPrice}
                            </td>

                            <td className="add-to-cart text-center">
                              {product.affiliateLink ? (
                                <a
                                  href={product.affiliateLink}
                                  target="_blank"
                                  className="btn btn-fill-out"
                                >
                                  Buy now
                                </a>
                              ) : product.variation &&
                                product.variation.length >= 1 ? (
                                <Link
                                  href={`/shop/product-basic/[slug]?slug=${product.slug}`}
                                  as={`/shop/product-basic/${product.slug}`}
                                >
                                  <a className="btn btn-fill-out">
                                    Select option
                                  </a>
                                </Link>
                              ) : product.stock && product.stock > 0 ? (
                                <button
                                  onClick={() => addToCart(product, addToast)}
                                  className={` btn btn-fill-out ${
                                    cartItem !== undefined &&
                                    cartItem.quantity > 0
                                      ? "active"
                                      : ""
                                  } `}
                                  disabled={
                                    cartItem !== undefined &&
                                    cartItem.quantity > 0
                                  }
                                  title={
                                    product !== undefined
                                      ? "Added to cart"
                                      : "Add to cart"
                                  }
                                >
                                  {cartItem !== undefined &&
                                  cartItem.quantity > 0
                                    ? "Added"
                                    : "Add to cart"}
                                </button>
                              ) : (
                                <button disabled className="btn btn-fill-out">
                                  Out of stock
                                </button>
                              )}
                            </td>

                            <td className="product-remove">
                              <button
                                onClick={() =>
                                  deleteFromWishlist(product, addToast)
                                }
                              >
                                <IoIosClose />
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </Col>
            </Row>
          ) : (
            <Row>
              <Col>
                <div className="item-empty-area text-center">
                  <div className="item-empty-area__icon space-mb--30">
                    <i className="icon-heart" />
                  </div>
                  <div className="item-empty-area__text">
                    <p className="space-mb--30">No items found in wishlist</p>
                    <Link href="/shop/grid-left-sidebar">
                      <a className="btn btn-fill-out">Add Some</a>
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          )}
        </Container>
      </div>
    </LayoutOne>
  );
};

const mapStateToProps = (state) => {
  return {
    wishlistItems: state.wishlistData,
    cartItems: state.cartData
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (item, addToast, quantityCount) => {
      dispatch(addToCart(item, addToast, quantityCount));
    },
    addToWishlist: (item, addToast) => {
      dispatch(addToWishlist(item, addToast));
    },
    deleteFromWishlist: (item, addToast) => {
      dispatch(deleteFromWishlist(item, addToast));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Wishlist);

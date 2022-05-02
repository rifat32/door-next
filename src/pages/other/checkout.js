import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { getDiscountPrice } from "../../lib/product";
import { IoMdCash } from "react-icons/io";
import { LayoutOne } from "../../layouts";
import { BreadcrumbOne } from "../../components/Breadcrumb";
import { useState } from "react";
import { apiClient } from "../../utils/apiClient";
import { BACKENDAPI } from "../../../config";
import { deleteAllFromCart } from "../../redux/actions/cartActions";
import { useToasts } from "react-toast-notifications";
const Checkout = ({ cartItems ,  deleteAllFromCart}) => {
  let cartTotalPrice = 0;

  const [orderInfo,setOrderInfo] = useState({
    fname:"",
    lname:"",
    cname:"",
    country:"",
    billing_address:"",
    billing_address2:"",
    city:"",
    zipcode:"",
    phone:"",
    email:"",
    additional_info:"",
    payment_option:"direct bank"
  })

const handleChange = (e) => {
  setOrderInfo((prevData) => {
    return {
   ...prevData,
[e.target.name]:e.target.value
    }
  })
}
const { addToast } = useToasts();
const handleSubmit= (e) => {
  e.preventDefault();
  apiClient()
  .post(`${BACKENDAPI}/v1.0/client/orders`, { ...orderInfo},
				)
			.then((response) => {
				console.log(response);
        deleteAllFromCart(addToast);
        window.alert("order placed")
			
			})
			.catch((error) => {
				console.log(error);
			});
}

  return (
    <LayoutOne>
      {/* breadcrumb */}
      <BreadcrumbOne pageTitle="Checkout">
        <ol className="breadcrumb justify-content-md-end">
          <li className="breadcrumb-item">
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className="breadcrumb-item active">Checkout</li>
        </ol>
      </BreadcrumbOne>
      <div className="checkout-content space-pt--r100 space-pb--r100">
        <Container>
          {cartItems && cartItems.length >= 1 ? (
            <Row>
              <Col md={6}>
                <div className="heading-s1 space-mb--20">
                  <h4>Billing Details</h4>
                </div>
                <form>
                  <div className="form-group">
                    <input
                      type="text"
                      required
                      className="form-control"
                      name="fname"
                     
                      placeholder="First name *"
                      value={orderInfo.fname}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      required
                      className="form-control"
                      name="lname"
                      placeholder="Last name *"
                      value={orderInfo.lname}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      required
                      type="text"
                      name="cname"
                      placeholder="Company Name"
                      value={orderInfo.cname}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <div className="custom_select">
                      <select className="form-control" name="country"     value={orderInfo.country}
                      onChange={handleChange}
                      > 
                        <option value="">Select an option...</option>
                        <option value="AX">Aland Islands</option>
                        <option value="AF">Afghanistan</option>
                        <option value="AL">Albania</option>
                        <option value="DZ">Algeria</option>
                        <option value="AD">Andorra</option>
                        <option value="AO">Angola</option>
                        <option value="AI">Anguilla</option>
                        <option value="AQ">Antarctica</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="billing_address"
                      required=""
                      placeholder="Address *"
                        
                      value={orderInfo.billing_address}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="billing_address2"
                      required=""
                      placeholder="Address line2"
                      value={orderInfo.billing_address2}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      required
                      type="text"
                      name="city"
                      placeholder="City / Town *"
                      value={orderInfo.city}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      required
                      type="text"
                      name="zipcode"
                      placeholder="Postcode / ZIP *"
                      value={orderInfo.zipcode}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      required
                      type="text"
                      name="phone"
                      placeholder="Phone *"
                      value={orderInfo.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      required
                      type="text"
                      name="email"
                      placeholder="Email address *"
                      value={orderInfo.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="heading-s1 space-mb--20">
                    <h4>Additional information</h4>
                  </div>
                  <div className="form-group mb-0">
                    <textarea
                      rows="5"
                      className="form-control"
                      placeholder="Order notes"
                      name="additional_info"
                      value={orderInfo.additional_info}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </form>
              </Col>
              <Col md={6}>
                <div className="order-review space-mt-mobile-only--40">
                  <div className="heading-s1 space-mb--20">
                    <h4>Your Orders</h4>
                  </div>
                  <div className="table-responsive order_table">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Product</th>
                          <th>Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cartItems.map((product, i) => {
                          const discountedPrice = parseFloat(getDiscountPrice(
                            product.price,
                            product.discount
                          )).toFixed(2);

                          cartTotalPrice += discountedPrice * product.qty;
                          return (
                            <tr key={i}>
                              <td>
                                {product.name}{" "}
                                <span className="product-qty">
                                  x {product.qty}
                                </span>
                              </td>
                              <td>
                                $
                                {parseFloat((discountedPrice * product.qty)).toFixed(
                                  2
                                )}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                      <tfoot>
                        <tr>
                          <th>SubTotal</th>
                          <td className="product-subtotal">
                            ${parseFloat(cartTotalPrice).toFixed(2)}
                          </td>
                        </tr>
                        <tr>
                          <th>Shipping</th>
                          <td>Free Shipping</td>
                        </tr>
                        <tr>
                          <th>Total</th>
                          <td className="product-subtotal">
                            ${parseFloat(cartTotalPrice).toFixed(2)}
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                  <div className="payment-method">
                    <div className="heading-s1 space-mb--20">
                      <h4>Payment</h4>
                    </div>
                    <div className="payment-option space-mb--20">
                      <div className="custom-radio space-mb--20">
                        <input
                          className="form-check-input"
                          required
                          type="radio"
                          name="payment_option"
                          id="exampleRadios3"
                          checked={orderInfo.payment_option == "direct bank"}
                          value="direct bank"
                          onChange={handleChange}
                          
                        />
                        <label
                          className="form-check-label"
                          htmlFor="exampleRadios3"
                        >
                          Direct Bank Transfer
                        </label>
                        <p data-method="option3" className="payment-text">
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration.{" "}
                        </p>
                      </div>
                      <div className="custom-radio space-mb--20">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="payment_option"
                          id="exampleRadios4"
                          checked={orderInfo.payment_option == "check payment"}
                          value="check payment"
                          onChange={handleChange}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="exampleRadios4"
                        >
                          Check Payment
                        </label>
                        <p data-method="option4" className="payment-text">
                          Please send your cheque to Store Name, Store Street,
                          Store Town, Store State / County, Store Postcode.
                        </p>
                      </div>
                      <div className="custom-radio space-mb--20">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="payment_option"
                          id="exampleRadios5"
                          checked={orderInfo.payment_option == "paypal"}
                          value="paypal"
                          onChange={handleChange}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="exampleRadios5"
                        >
                          Paypal
                        </label>
                        <p data-method="option5" className="payment-text">
                          Pay via PayPal; you can pay with your credit card if
                          you don't have a PayPal account.
                        </p>
                      </div>
                    </div>
                  </div>
                  <button className="btn btn-fill-out btn-block" onClick={handleSubmit}>
                    Place Order
                  </button>
                </div>
              </Col>
            </Row>
          ) : (
            <Row>
              <Col>
                <div className="item-empty-area text-center">
                  <div className="item-empty-area__icon space-mb--30">
                    <IoMdCash />
                  </div>
                  <div className="item-empty-area__text">
                    <p className="space-mb--30">
                      No items found in cart to checkout
                    </p>
                    <Link href="/shop/grid-left-sidebar">
                      <a className="btn btn-fill-out">Shop Now</a>
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
    cartItems: state.cartData
  };
};
const mapDispatchToProps = (dispatch) => {
  return {

    deleteAllFromCart: (addToast) => {
      dispatch(deleteAllFromCart(addToast));
    }
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(Checkout);

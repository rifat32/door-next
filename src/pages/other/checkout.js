import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { getDiscountPrice } from "../../lib/product";
import { IoMdCash } from "react-icons/io";
import { LayoutOne } from "../../layouts";
import { BreadcrumbOne } from "../../components/Breadcrumb";
import { useEffect, useState } from "react";
import { apiClient } from "../../utils/apiClient";
import { BACKEND, BACKENDAPI,CURRENCY } from "../../../config";
import { deleteAllFromCart } from "../../redux/actions/cartActions";
import { useToasts } from "react-toast-notifications";
import NonUserCheckout from "../../utils/NonUserCheckout";
import UserCheckout from "../../utils/UserCheckout";
const Checkout = ({ cartItems ,  deleteAllFromCart}) => {

  const [user,setUser] = useState(null);
  const setUserFunction = (user) => {
    setUser(user)
  }



  const [tempCarts,setTempCarts] = useState(JSON.parse(JSON.stringify(cartItems)) ) 

  let cartTotalPrice = 0;
  let cartSubTotalPrice = 0;
  let cartCouponDiscount = 0;

  const [orderInfo,setOrderInfo] = useState({
    fname:"",
    lname:"",
    cname:"",
    country:"",
    state:"",
    billing_address:"",
    billing_address2:"",
    city:"",
    zipcode:"",
    phone:"",
    email:"",
    additional_info:"",
    payment_option:"direct bank",
    order_coupon:"",
    create_account:"0",
    password:"",
    password_confirmation:"",
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
const [errors,setErrors] = useState(null)

const handleSubmit= (e) => {
  e.preventDefault();
 
  function ValidateEmail(mail) 
{
  // email validation
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}
if(!ValidateEmail(orderInfo.email)) {
 return
}
// end email validation
function valid_postcode(postcode) {
  postcode = postcode.replace(/\s/g, "");
  var regex = /^[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}$/i;
  if (regex.test(postcode))
  {
    return (true)
  }
    alert("You have entered an invalid Post Code !")
    return (false)
 
}

 if(!valid_postcode(orderInfo.zipcode)) {
  return
 }
 function valid_phone(phone) {
  phone = phone.replace(/\D/g, '');
  var regex = /^(?:(?:00)?44|0)7(?:[45789]\d{2}|624)\d{6}$/;
  if (regex.test(phone))
  {
    return (true)
  }
    alert("You have entered an invalid Phone !")
    return (false)
 
}

//  if(!valid_phone(orderInfo.phone)) {
//   return
//  }

  apiClient()
  .post(`${BACKENDAPI}/v1.0/client/orders`, { 
    ...orderInfo,
    cart:tempCarts

  
  },
				)
			.then((response) => {
        deleteAllFromCart(addToast);
        setTimeout(()=> {
          window.location.href = `${BACKEND}/payment?order_id=${response.data.order.id}`;
        },1000)
       

        // window.alert("order placed")
			
			})
			.catch((error) => {
    
        if (error.response.status === 422) {
          setErrors(error.response.data.errors);
          console.log("hhhh",errors)
        }
			
			});
}

useEffect(() => {
  let coupon = localStorage.getItem("coupon")
  console.log("localcoupon",JSON.parse(coupon))
  if(coupon){
    coupon = JSON.parse(coupon)
    updateCart(coupon)
    setOrderInfo({
      ...orderInfo,
      order_coupon:coupon
    })
  }

},[])
const updateCart = (couponParam) => {
  const cartWithCoupon = tempCarts.map((el,index) => {
    console.log("cart", el.category_id )
    console.log("coupon",couponParam.category_id)
       if(el.category_id == couponParam.category_id) {
         if(parseInt(couponParam.is_all_category_product) === 1 ) {
           el.discount_type = couponParam.discount_type
           el.discount_amount = couponParam.discount_amount
         } else {
           couponParam.cproducts?.map(el2 => {
                if(parseInt(el2.product_id) === parseInt(el.id)){
                 el.discount_type = couponParam.discount_type
                 el.discount_amount = couponParam.discount_amount
                }
           })
          
         }
         
        
       } else if(!couponParam.category_id) {
         el.discount_type = couponParam.discount_type
         el.discount_amount = couponParam.discount_amount
 
       }
       return el;
   })
 
   setTempCarts([...cartWithCoupon])
 
 }








  return (
    <UserCheckout setUserFunction={setUserFunction}>
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
                      
                      className={
                        errors
                          ? errors.fname
                            ? `form-control is-invalid`
                            : `form-control is-valid`
                          : "form-control"
                      }
                      name="fname"
                     
                      placeholder="First name *"
                      value={orderInfo.fname}
                      onChange={handleChange}
                    />
                    
                    {errors?.fname && (
					<p className="invalid-feedback">{errors.fname[0]}</p>
				)}
                  
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      required
                      className={
                        errors
                          ? errors.lname
                            ? `form-control is-invalid`
                            : `form-control is-valid`
                          : "form-control"
                      }
                      name="lname"
                      placeholder="Last name *"
                      value={orderInfo.lname}
                      onChange={handleChange}
                    />
        {errors?.lname && (
					<p className="invalid-feedback">{errors.lname[0]}</p>
				)}
                  </div>
                  <div className="form-group">
                    <input
                      className={
                        errors
                          ? errors.cname
                            ? `form-control is-invalid`
                            : `form-control is-valid`
                          : "form-control"
                      }
                      
                      type="text"
                      name="cname"
                      placeholder="Company Name"
                      value={orderInfo.cname}
                      onChange={handleChange}
                    />
                     {errors?.cname && (
					<p className="invalid-feedback">{errors.cname[0]}</p>
				)}
                  </div>
                   <div className="form-group">
                    <div className="custom_select">
                      <select className="form-control" name="country"     value={orderInfo.country}
                      onChange={handleChange}
                      > 
                        <option value="">Select an option...</option>
                        <option value="United Kingdom">United Kingdom</option>
                      </select>
                    </div>
                  </div> 
                  <div className="form-group">
                    <input
                      type="text"
                      className={
                        errors
                          ? errors.state
                            ? `form-control is-invalid`
                            : `form-control is-valid`
                          : "form-control"
                      }
                      name="state"
                      required=""
                      placeholder="Address *"
                        
                      value={orderInfo.state}
                      onChange={handleChange}
                    />
                    {errors?.state && (
					<p className="invalid-feedback">{errors.state[0]}</p>
				)}
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className={
                        errors
                          ? errors.billing_address
                            ? `form-control is-invalid`
                            : `form-control is-valid`
                          : "form-control"
                      }
                      name="billing_address"
                      required=""
                      placeholder="Address *"
                        
                      value={orderInfo.billing_address}
                      onChange={handleChange}
                    />
                    {errors?.billing_address && (
					<p className="invalid-feedback">{errors.billing_address[0]}</p>
				)}
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className={
                        errors
                          ? errors.billing_address2
                            ? `form-control is-invalid`
                            : `form-control is-valid`
                          : "form-control"
                      }
                      name="billing_address2"
                      required=""
                      placeholder="Address line2"
                      value={orderInfo.billing_address2}
                      onChange={handleChange}
                    />
           {errors?.billing_address2 && (
					<p className="invalid-feedback">{errors.billing_address2[0]}</p>
				)}
                  </div>
                  <div className="form-group">
                    <input
                     className={
                      errors
                        ? errors.city
                          ? `form-control is-invalid`
                          : `form-control is-valid`
                        : "form-control"
                    }
                      required
                      type="text"
                      name="city"
                      placeholder="City / Town *"
                      value={orderInfo.city}
                      onChange={handleChange}
                    />
                     {errors?.city && (
					<p className="invalid-feedback">{errors.city[0]}</p>
				)}
                  </div>
                  <div className="form-group">
                    <input
                      className={
                        errors
                          ? errors.zipcode
                            ? `form-control is-invalid`
                            : `form-control is-valid`
                          : "form-control"
                      }
                      required
                      type="text"
                      name="zipcode"
                      placeholder="Postcode / ZIP *"
                      value={orderInfo.zipcode}
                      onChange={handleChange}
                    />
                     {errors?.zipcode && (
					<p className="invalid-feedback">{errors.zipcode[0]}</p>
				)}
                  </div>
                  <div className="form-group">
                    <input
                      className={
                        errors
                          ? errors.phone
                            ? `form-control is-invalid`
                            : `form-control is-valid`
                          : "form-control"
                      }
                      required
                      type="text"
                      name="phone"
                      placeholder="Phone *"
                      value={orderInfo.phone}
                      onChange={handleChange}
                    />
                        {errors?.phone && (
					<p className="invalid-feedback">{errors.phone[0]}</p>
				)}
                  </div>
                  <div className="form-group">
                    <input
                      className={
                        errors
                          ? errors.email
                            ? `form-control is-invalid`
                            : `form-control is-valid`
                          : "form-control"
                      }
                      required
                      type="text"
                      name="email"
                      placeholder="Email address *"
                      value={orderInfo.email}
                      onChange={handleChange}
                    />
                            {errors?.email && (
					<p className="invalid-feedback">{errors.email[0]}</p>
				)}
                  </div>
                  <div className="form-group">
                    <label>Guest</label>
                    <input
                     
                      required
                      type="radio"
                      name="create_account"
                     className="mr-5"
                      value={0}
                      checked={orderInfo.create_account == "0"}
                      onChange={handleChange}
                    /> 

                      <label>Create Account</label>
                    <input
                     
                      required
                      type="radio"
                      name="create_account"
                     
                      value={1}
                      checked={orderInfo.create_account == "1"}
                      onChange={handleChange}
                    />
                        
                  </div>
                  {
                    orderInfo.create_account == 1?(<>
                     <div className="form-group">
                    <input
                      className={
                        errors
                          ? errors.password
                            ? `form-control is-invalid`
                            : `form-control is-valid`
                          : "form-control"
                      }
                      required
                      type="text"
                      name="password"
                      placeholder="Password *"
                      value={orderInfo.password}
                      onChange={handleChange}
                    />
                            {errors?.password && (
					<p className="invalid-feedback">{errors.password[0]}</p>
				)}
                  </div>
                  <div className="form-group">
                    <input
                      className={
                        errors
                          ? errors.password_confirmation
                            ? `form-control is-invalid`
                            : `form-control is-valid`
                          : "form-control"
                      }
                      
                      type="text"
                      name="password_confirmation"
                      placeholder="password confirmation *"
                      value={orderInfo.password_confirmation}
                      onChange={handleChange}
                    />
                            {errors?.password_confirmation && (
					<p className="invalid-feedback">{errors.password_confirmation[0]}</p>
				)}
                  </div>
                  
                    
                    </>):(null)
                  }
                 

                  <div className="heading-s1 space-mb--20">
                    <h4>Additional information</h4>
                  </div>
                  <div className="form-group mb-0">
                    <textarea
                      rows="5"
                      className={
                        errors
                          ? errors.additional_info
                            ? `form-control is-invalid`
                            : `form-control is-valid`
                          : "form-control"
                      }
                      placeholder="Order notes"
                      name="additional_info"
                      value={orderInfo.additional_info}
                      onChange={handleChange}
                    ></textarea>
                          {errors?.additional_info && (
                      <p className="invalid-feedback">{errors.additional_info[0]}</p>
                    )}
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
                        {tempCarts.map((product, i) => {
                          // const discountedPrice = parseFloat(getDiscountPrice(
                          //   product.price,
                          //   product.discount
                          // )).toFixed(2);

                          // cartTotalPrice += discountedPrice * product.qty;
                          let price = product.price;
                     
                          if(product.discount_type && product.discount_type  == "fixed") {
                          
                           price -= product.discount_amount
                          }
                           else if(product.discount_type && product.discount_type  == "percentage") {
                          price  -= (price * product.discount_amount) / 100
                          }

                          cartSubTotalPrice += product.price * product.qty;
                          cartTotalPrice += price * product.qty;

                          cartCouponDiscount +=  cartSubTotalPrice - cartTotalPrice

                          return (
                            <tr key={i}>
                              <td>
                                {product.name}{" "}
                                <span className="product-qty">
                                  x {product.qty}
                                </span>
                              </td>
                              <td>
                                
                              {CURRENCY}{parseFloat(product.price).toFixed(2)}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                      <tfoot>
                        <tr>
                          <th>SubTotal</th>
                          <td className="product-subtotal">
                          {CURRENCY}{parseFloat(cartSubTotalPrice).toFixed(2)}
                          </td>
                        </tr>
                        <tr>
                            <td className="cart-total-label">Coupon Discount</td>
                            <td className="cart-total-amount">{CURRENCY}{parseFloat(cartCouponDiscount).toFixed(2)}</td>
                          </tr>
                        <tr>
                          <th>Shipping</th>
                          <td>Free Shipping</td>
                        </tr>
                        <tr>
                          <th>Total</th>
                          <td className="product-subtotal">
                          <strong>{CURRENCY}{parseFloat(cartTotalPrice).toFixed(2)}</strong>
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
                    <Link href="/shop">
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
    </UserCheckout>
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

import { useState, Fragment, useEffect } from "react";
import Link from "next/link";
import { connect } from "react-redux";
import { useToasts } from "react-toast-notifications";
import {
  addToCart,
  decreaseQuantity,
  deleteFromCart,
  deleteAllFromCart,
  cartItemStock
} from "../redux/actions/cartActions";
import { getDiscountPrice } from "../lib/product";
import { Container, Row, Col } from "react-bootstrap";
import { LayoutOne } from "../layouts";
import { BreadcrumbOne } from "../components/Breadcrumb";
import { IoIosClose } from "react-icons/io";
import { BACKEND, BACKENDAPI } from "../../config";
import { apiClient } from "../utils/apiClient";





const Cart = ({
  cartItems,
  decreaseQuantity,
  addToCart,
  deleteFromCart,
  deleteAllFromCart
}) => {
  const [tempCarts,setTempCarts] = useState(JSON.parse(JSON.stringify(cartItems)) ) 
  const [quantityCount] = useState(1);
  const { addToast } = useToasts();
  let cartSubTotalPrice = 0;
  let cartTotalPrice = 0;
  let cartCouponDiscount = 0;
  const [couponCode,setCouponCode] = useState(null);
  const [coupon,setCoupon] = useState(null);
  const [couponErr,setCouponErr] = useState(null);
const applyCoupon = () => {
  setCouponErr(null)
  apiClient()
  .get(`${BACKENDAPI}/v1.0/client/check-coupon?coupon=${couponCode}`)
  .then(response => {
console.log(response.data)

localStorage.setItem("coupon",JSON.stringify(response.data.coupon))



if(!response.data.coupon){
/*   setCouponErr("No Coupon Found") */
  addToast("No Coupon Found", {
    appearance: "warning",
    autoDismiss: true
  });
}
else if(!parseInt(response.data.coupon.is_active)) {
/*   setCouponErr("This is not available now") */
  addToast("This is not available now", {
    appearance: "warning",
    autoDismiss: true
  });
} 
 else if(new Date() > new Date(response.data.coupon.expire_date)){
  addToast("This coupon is expired", {
    appearance: "warning",
    autoDismiss: true
  });
/*   setCouponErr("This coupon is expired") */
 }
 else {
  
   setCoupon(response.data.coupon)
   updateCart(response.data.coupon)
 }
  })
  .catch(err => {
    console.log(err)
  })
}

useEffect(()=>{
setTempCarts(cartItems)
},[cartItems])

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
    <LayoutOne>
      {/* breadcrumb */}
      <BreadcrumbOne pageTitle="Shopping Cart">
        <ol className="breadcrumb justify-content-md-end">
          <li className="breadcrumb-item">
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className="breadcrumb-item active">Shopping Cart</li>
        </ol>
      </BreadcrumbOne>
      {/* cart content */}
      <div className="cart-content space-pt--r100 space-pb--r100">
        <Container>
          {tempCarts && tempCarts.length >= 1 ? (
            <Fragment>
              <Row>
                <Col lg={12}>
                  <div className="table-responsive shop-cart-table">
                    <table className="table mb-0">
                      <thead>
                        <tr>
                          <th className="product-thumbnail">&nbsp;</th>
                          <th className="product-name">Product</th>
                          <th className="product-price">Price</th>
                          <th className="product-price">Details</th>
                          <th className="product-quantity">Quantity</th>
                          <th className="product-subtotal">Total</th>
                          <th className="product-remove text-center">Remove</th>
                        </tr>
                      </thead>
                      <tbody>
                        {tempCarts.map((product, key) => {
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
                            <tr key={key}>
                              <td className="product-thumbnail">
                                <Link
                                  href={`/shop/product-basic/[slug]?slug=${product.slug}`}
                                  as={"/shop/product-basic/" + product.slug}
                                >
                                  <a>
                                    <img
                                      src={`${BACKEND}/${product.image}`}
                                      alt="product1"
                                    />
                                  </a>
                                </Link>
                              </td>
                              <td className="product-name" data-title="Product">
                                <Link
                                  href={`/shop/[slug]?slug=${product.id}`}
                                  as={"/shop/" + product.id}
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
                                ${parseFloat(product.price).toFixed(2)}
                              </td>
                              <td className="product-price" data-title="Price">
                              {product.selectedProductColor &&   <p>color:     {


product.colors.find(el => {
 return product.selectedProductColor == el.code
}).color.name
                            
                              
                              
                              
                              
                              
                              }</p>}
                              {product.type != "single"?(
                                

                                
                                  !product.is_custom_size?(<>
                                   <p>height:   
                                   {console.log(product)} 
                                    {product.variation.find (el => {
                                  return el.id === parseInt(product.selectedHeight)
                                })?.name}
                                </p>
                                <p>width:   
                                   {console.log(product)} 
                                    {product.variation.find (el => {

                                  return el.id === parseInt(product.selectedHeight)
                                })?.variation_value_template.find (el2 => {

                                  return el2.id === parseInt(product.selectedWidth)
                                })?.name}
                                </p>
                                  
                                  
                                  </>):(<>
                                  <p>Custom Height:     {product.custom_height}</p>
                                 <p>Custom Width:     {product.custom_width}</p>
                                  
                                  
                                  </>)
                                





                              ):(null)
                              
                              }
                              
                                {
                                  product.is_hinge_holes?(
                                    <>
                                     <p>Hinge hole top:     {product.hinge_holes_from_top}</p>
                                    <p>Hinge hole bottom:     {product.hinge_holes_from_bottom}</p></>
                                   
                                  ):(null)
                                }
                                {
                                  product.selected_length?(
                                    <>
                                     <p>Length:     {product.selected_length}</p>
                                  

                                  
                                  </>
                                   
                                  ):(null)
                                }
                               {
                                  JSON.parse(product.options).length?(
                                    JSON.parse(product.options).map(el => {
                                      
                                      if(el.selectedValue) {
                                        console.log("abcd",el)
                                      return  el.option.option_value_template.map(el2 => {
                                        if(parseInt(el.selectedValue) == parseInt(el2.id))
                                            return <>
                                            <br/>
                                            {el.option.name}:{el2.name}
                                            </>
                                        })
                                      }
                                     
                                    })
                                   
                                  ):(null)
                                }
                                
                              </td>
                              
                              <td
                                className="product-quantity"
                                data-title="Quantity"
                              >
                                <div className="cart-plus-minus">
                                  <button
                                    onClick={() =>
                                      decreaseQuantity(product, addToast)
                                    }
                                    className="qtybutton"
                                  >
                                    -
                                  </button>
                                  <input
                                    className="cart-plus-minus-box"
                                    type="text"
                                    value={product.qty}
                                    readOnly
                                  />
                                  {console.log(  product !== undefined )}
                                  <button
                                    onClick={() =>
                                      addToCart(
                                        product,
                                        addToast,
                                        quantityCount
                                      )
                                    }
                                    disabled={
                                      product == undefined 
                                      &&
                                      product.qty &&
                                      product.qty >=
                                        cartItemStock(
                                          product,
                                          product.selectedProductColor,
                                          product.selectedProductSize
                                        )
                                    }
                                    className="qtybutton"
                                  >
                                    +
                                  </button>
                                </div>
                              </td>
                              <td
                                className="product-subtotal"
                                data-title="Total"
                              >
                                $
                                {parseFloat((product.price * product.qty)).toFixed(
                                  2
                                )}
                              </td>
                              <td className="product-remove">
                                <button
                                  onClick={() =>
                                    deleteFromCart(product, addToast)
                                  }
                                >
                                  <IoIosClose />
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                      <tfoot>
                        <tr>
                          <td colSpan="6" className="px-0 pb-0">
                            <Row className="no-gutters align-items-center">
                              <Col lg={4} md={6} className="mb-3 mb-md-0">
                                <div className="coupon field-form input-group">
                                  <input
                                    type="text"
                                    className="form-control form-control-sm"
                                    placeholder="Enter Coupon Code.."
                                    value={couponCode}
                                    onChange={(e) => {
                                      setCouponCode(e.target.value)
                                    }}                                  />
                                  <div className="input-group-append">
                                    <button
                                      className="btn btn-fill-out btn-sm"
                                      type="submit"
                                      onClick={applyCoupon}
                                    >
                                      Apply Coupon
                                    </button>
                                   
                                  </div>
                                </div>
                                {couponErr}
                              </Col>
                              <Col
                                lg={8}
                                md={6}
                                className="text-left text-md-right"
                              >
                                <button
                                  className="btn btn-line-fill btn-sm"
                                  type="submit"
                                  onClick={() => deleteAllFromCart(addToast)}
                                >
                                  Clear Cart
                                </button>
                              </Col>
                            </Row>
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg={12}>
                  <div className="divider center-icon space-mt--30 space-mb--30">
                    <i className="icon-basket-loaded" />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <div>
                    <div className="heading-s1 mb-3">
                      <h6>Calculate Shipping</h6>
                    </div>
                    <form className="field-form shipping-calculator">
                      <div className="form-row">
                        <div className="form-group col-lg-12">
                          <select className="form-control">
                            <option value>Choose a option...</option>
                            <option value="AX">Aland Islands</option>
                            <option value="AF">Afghanistan</option>
                            <option value="AL">Albania</option>
                            <option value="DZ">Algeria</option>
                            <option value="AD">Andorra</option>
                            <option value="AO">Angola</option>
                            <option value="AI">Anguilla</option>
                            <option value="AQ">Antarctica</option>
                            <option value="AG">Antigua and Barbuda</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group col-lg-6">
                          <input
                            required="required"
                            placeholder="State / Country"
                            className="form-control"
                            name="name"
                            type="text"
                          />
                        </div>
                        <div className="form-group col-lg-6">
                          <input
                            required="required"
                            placeholder="PostCode / ZIP"
                            className="form-control"
                            name="name"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group col-lg-12">
                          <button className="btn btn-fill-line" type="submit">
                            Update Totals
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="border p-3 p-md-4">
                    <div className="heading-s1 mb-3">
                      <h6>Cart Totals</h6>
                    </div>
                    <div className="table-responsive">
                      <table className="table">
                        <tbody>
                          <tr>
                            <td className="cart-total-label">Cart Subtotal</td>
                            <td className="cart-total-amount">
                              ${parseFloat(cartSubTotalPrice).toFixed(2)}
                            </td>
                          </tr>
                          
                          <tr>
                            <td className="cart-total-label">Coupon Discount</td>
                            <td className="cart-total-amount">{cartCouponDiscount}</td>
                          </tr>
                          <tr>
                            <td className="cart-total-label">Shipping</td>
                            <td className="cart-total-amount">Free Shipping</td>
                          </tr>
                          <tr>
                            <td className="cart-total-label">Total</td>
                            <td className="cart-total-amount">
                    
                              <strong>${parseFloat(cartTotalPrice).toFixed(2)}</strong>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <Link href="/other/checkout">
                      <a className="btn btn-fill-out">Proceed To CheckOut</a>
                    </Link>
                  </div>
                </Col>
              </Row>
            </Fragment>
          ) : (
            <Row>
              <Col>
                <div className="item-empty-area text-center">
                  <div className="item-empty-area__icon space-mb--30">
                    <i className="icon-basket-loaded" />
                  </div>
                  <div className="item-empty-area__text">
                    <p className="space-mb--30">No items found in cart</p>
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
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartData
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (item, addToast, quantityCount) => {
      dispatch(addToCart(item, addToast, quantityCount));
    },
    decreaseQuantity: (item, addToast) => {
      dispatch(decreaseQuantity(item, addToast));
    },
    deleteFromCart: (item, addToast) => {
      dispatch(deleteFromCart(item, addToast));
    },
    deleteAllFromCart: (addToast) => {
      dispatch(deleteAllFromCart(addToast));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

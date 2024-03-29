import { Fragment, useState } from "react";
import Link from "next/link";
import { getProductCartQuantity } from "../../lib/product";
import { ProductRating } from "../Product";
import { BsShield } from "react-icons/bs";
import { AiOutlineReload } from "react-icons/ai";
import { GiSwapBag } from "react-icons/gi";
import { CURRENCY } from "../../../config";
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
// import { useToasts } from "react-toast-notifications";
import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoGoogleplus,
  IoLogoYoutube,
  IoLogoInstagram,
  
} from "react-icons/io";
import RightSidebar from "../Shop/RightSidebar";

const ProductDescription = ({
  product,
  productPrice,
  discountedPrice,
  cartItems,
  wishlistItem,
  compareItem,
  addToast,
  addToCart,
  addToWishlist,
  deleteFromWishlist,
  addToCompare,
  deleteFromCompare,
  productContentButtonStyleClass,
  selectedProductColor,
  setSelectedProductColor,
  setColorImage,
  errors,
  handleChange,
  checkColorNotEpmty,
  handleSelectHeight,
  handleChecked,
  handleSelectOption,
  handlePanelSelect,
  heightErr,
  widthErr,
  orientations,
  extraHoleDirections,
  getHeights,
  setCustomHeight,
  customHeight,
  slideTo
}) => {
  // const { addToast } = useToasts();
  // const [selectedProductSize, setSelectedProductSize] = useState(
  //   product.variation ? product.variation[0].size[0].name : ""
  // );
  const [productStock, setProductStock] = useState(
     product.qty 
  );
  const [quantityCount, setQuantityCount] = useState(1);

  const productCartQty = getProductCartQuantity(
    cartItems,
    product,
    selectedProductColor
  );
  const validateBeforeCart = () => {
   
    const result = {
      validated:true,
      message:"validation success"
    }
    
   
    // color validation starts
    if(product.colors.length){
      if(!product.selectedProductColor){
        result.validated =false;
        result.message="Please Select a Color!"

      return result
        
      }
    }

   // color validation ends
    if(product.type == "variable") {
//  height and width validation start
if(product.is_custom_size) {
  if(!product.selectedHeight && !product.selectedWidth){

      result.validated =false;
      result.message="Please select height and width";
    
    
    return result
   
  }
} else {
  if(!product.selectedHeight ){

      result.validated=false,
      result.message="Please select height"
    
    
    return result
  }
  if(!product.selectedWidth){
    
    result.validated=false,
    result.message="Please select width"
    
    
    return result
 
  
  }
}
//  height and width  validation ends
 //  hinge holes  validation starts
 if(product.is_hinge_holes){
if(!product.orientation_id) {
result.validated=false,
result.message="Please select orientation"
return result
}
if(!product.hinge_holes_from_top) {
result.validated=false,
result.message="Please select hinge holes from top"
return result
}
if(!product.hinge_holes_from_bottom) {
result.validated=false,
result.message="Please select hinge holes from bottom"
return result
}
 }
   //  hinge holes  validation ends
//  hinge extra holes  validation starts
if(product.is_extra_holes){
if(!product.extra_holes_direction_id) {
  result.validated=false,
  result.message="Please select Extra holes direction"
  return result
}
if(!product.extra_holes_value) {
  result.validated=false,
  result.message="Please select Extra holes value"
  return result
}

     }
       //  hinge extra holes  validation ends
    }
  
    
            //  length validation starts
            if(parseInt(product.length_is_required)){
                if(!product.selected_length) {
                  result.validated=false,
                  result.message="Please select length"
                  return result
                }
                if(parseInt(product.selected_length) < parseInt(product.length_lower_limit)) {
                  result.validated=false,
                  result.message="length is less then minimum value allowed"
                  return result
                }
            }
           
           //  length validation starts
            //  options validation starts
            let options = JSON.parse(product.options);
            for (var i = 0; i < options.length; i++) {
              let el = options[i];
              if(parseInt(el.is_required)){
                
                if(product.selectedProductColor && el.color) {
                
                   if(el.color?.code == product.selectedProductColor) {
                    
                       if(!el.selectedValue) {
                        
                        result.validated=false,
                        result.message=`Please select ${el.option.name}`
                        break;
                       }
                   }
                }
                // else if(!el.color) {
                //   if(!el.selectedOption) {
                //     result.validated=false,
                //     result.message=`Please select ${el.option.name}`
                //    }
                // }
                else {
                  if(!el.selectedValue) {
                    result.validated=false,
                    result.message=`Please select ${el.option.name}`
                    break;
                   }
                }
              }
            }
            JSON.parse(product.options).map(el => {
             


            })
 
           //  options holes  validation ends

return result
  }
  return (
    <div className="product-content">
      <h2 className="product-content__title space-mb--10">{product.name}</h2>
      <div className="product-content__price-rating-wrapper space-mb--10">
        <div className="product-content__price d-flex-align-items-center">
          {product.discount ? (
            <Fragment>
              <span className="price">{CURRENCY}{discountedPrice}</span>
              <del>{CURRENCY}{productPrice}</del>
              <span className="on-sale">{CURRENCY}{product.discount}% Off</span>
            </Fragment>
          ) : (
            <span className="price">{CURRENCY}{productPrice} 
            {/* {product.qty} */}
            </span>
          )}
        </div>
        {product.rating && product.rating > 0 ? (
          <div className="product-content__rating-wrap">
            <div className="product-content__rating">
              <ProductRating ratingValue={product.rating} />
              <span>({product.ratingCount})</span>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="product-content__description space-mb--20">
        <p>{product.shortDescription}</p>
      </div>

      <div className="product-content__sort-info space-mb--20">
        <ul>
          <li>
            <BsShield /> 1 Year Brand Warranty
          </li>
          <li>
            <AiOutlineReload /> 30 Days Return Policy
          </li>
          <li>
            <GiSwapBag /> Cash on Delivery available
          </li>
        </ul>
      </div>

      {product.colors.length ? (
        <div className="product-content__size-color">
          <div className="product-content__color space-mb--10">
            <div className="product-content__color__title">Color</div>
            <div className="product-content__color__content" >
              {product.colors.map((single, i) => {
                return (
                  <Fragment key={i}   >
                    
                    <input
                  
                      type="radio"
                      value={single.color.code}
                      name="product-color"
                      id={ single.color.code}
                      checked={
                      single.color.code === selectedProductColor ? "checked" : ""
                      }
                      onChange={(e) => {
                        
                        setSelectedProductColor(e.target.value);
          
                        setColorImage(single.color_image)
                        slideTo(i)
                        // setProductStock(single.size[0].stock);
                        // setQuantityCount(1);
                      }}
                    />
                  <OverlayTrigger
                overlay={(props) => (
                  <Tooltip {...props}>
                    {single.name}
                  </Tooltip>
                )}
                placement="top"
                >
                    <label
                   /*  title={single.name} */
                      htmlFor={single.color.code}
                      style={{ 
                        backgroundColor: single.color.code,
                        border:"2px solid black", }}
                  //     style={{
                   
                  //   borderRadius:"50%"
                  // }}

                    >
 
 
                    </label>
                    </OverlayTrigger>
                  </Fragment>
                );
              })}
            </div>
          </div>
          {/* <div className="product-content__size space-mb--20">
            <div className="product-content__size__title">Size</div>
            <div className="product-content__size__content">
              {product.variation &&
                product.variation.map((single) => {
                  return single.color === selectedProductColor
                    ? single.size.map((singleSize, i) => {
                        return (
                          <Fragment key={i}>
                            <input
                              type="radio"
                              value={singleSize.name}
                              checked={
                                singleSize.name === selectedProductSize
                                  ? "checked"
                                  : ""
                              }
                              id={singleSize.name}
                              onChange={() => {
                                setSelectedProductSize(singleSize.name);
                                setProductStock(singleSize.stock);
                                setQuantityCount(1);
                              }}
                            />
                            <label htmlFor={singleSize.name}>
                              {singleSize.name}
                            </label>
                          </Fragment>
                        );
                      })
                    : "";
                })}
            </div>
          </div> */}
        </div>
      ) : (
        ""
      )}
      <RightSidebar 
           classList={"d-block d-lg-none"}
           productNew={product}
           errors={errors}
           handleChange={handleChange}
           checkColorNotEpmty={checkColorNotEpmty}
           handleSelectHeight={handleSelectHeight}
           handleChecked={handleChecked}
           handleSelectOption={handleSelectOption}
           handlePanelSelect={handlePanelSelect}
           
           heightErr={heightErr}
           widthErr={widthErr}
           orientations={orientations}
           extraHoleDirections={extraHoleDirections}
           getHeights={getHeights}
           customHeight={customHeight}
           setCustomHeight={setCustomHeight}
           />
      <hr />
      {product.affiliateLink ? (
        <div className="product-content__quality">
          <div className="product-content__cart btn-hover">
            <a
              href={product.affiliateLink}
              target="_blank"
              className="btn btn-fill-out btn-addtocart"
            >
              Buy Now
            </a>
          </div>
        </div>
      ) : (
        <Fragment>
          <div
            className={`${
              productContentButtonStyleClass
                ? productContentButtonStyleClass
                : "product-content__button-wrapper d-flex align-items-center"
            }`}
          >
            <div className="product-content__quantity">
              <div className="cart-plus-minus">
                <button
                  onClick={() =>
                    setQuantityCount(quantityCount > 1 ? quantityCount - 1 : 1)
                  }
                  className="qtybutton"
                >
                  -
                </button>
                <input
                  className="cart-plus-minus-box"
                  type="text"
                  value={quantityCount}
                  readOnly
                />
                <button
                  onClick={() =>
                    setQuantityCount(
                      quantityCount < productStock - productCartQty
                        ? quantityCount + 1
                        : quantityCount
                    )
                  }
                  className="qtybutton"
                >
                  +
                </button>
              </div>
            </div>
            
            {product.qty  && product.qty  > 0 ? (
              <button
                onClick={() =>
                 {
                  let validation = validateBeforeCart()
                 
                  if(!validation.validated) {
                    
                    addToast(validation.message, {
                      appearance: "warning",
                      autoDismiss: true
                    });
                    return
                  }
                  //  else {
                  //   addToast(validation.message, {
                  //     appearance: "success",
                  //     autoDismiss: false
                  //   });
                  //   return
                  // }
                  addToCart(
                    product,
                    addToast,
                    quantityCount,
                    selectedProductColor,
                  
                  )
                 }
                }
                disabled={productCartQty >= productStock}
                className="btn btn-fill-out btn-addtocart space-ml--10"
              >
                <i className="icon-basket-loaded" /> Add To Cart
              </button>
            ) : (
              <button className="btn btn-fill-out btn-addtocart space-ml--10" disabled>
                Out of Stock
              </button>
            )}

{/*             <button
              className={`product-content__compare ${
                compareItem !== undefined ? "active" : ""
              }`}
              title={
                compareItem !== undefined
                  ? "Added to compare"
                  : "Add to compare"
              }
              onClick={
                compareItem !== undefined
                  ? () => deleteFromCompare(product, addToast)
                  : () => addToCompare(product, addToast)
              }
            >
              <i className="icon-shuffle" />
            </button> */}

            {/* <button
              className={`product-content__wishlist ${
                wishlistItem !== undefined ? "active" : ""
              }`}
              title={
                wishlistItem !== undefined
                  ? "Added to wishlist"
                  : "Add to wishlist"
              }
              onClick={
                wishlistItem !== undefined
                  ? () => deleteFromWishlist(product, addToast)
                  : () => addToWishlist(product, addToast)
              }
            >
              <i className="icon-heart" />
            </button> */}
          </div>
        </Fragment>
      )}
      <hr />
      <ul className="product-content__product-meta">
        <li>
          SKU: <span>{product.sku}</span>
        </li>
        <li>
          Category:
          {product.category &&
            (
                <Link
                  href="/shop/grid-left-sidebar"
                  as={"/shop/grid-left-sidebar"}
                 
                >
                  <a>{product.category.name}</a>
                </Link>
              )
            }
           
        </li>
        <li>
          Style:
          {product.style &&
            (
                <Link
                  href="/shop/grid-left-sidebar"
                  as={"/shop/grid-left-sidebar"}
                 
                >
                  <a>{product.style.name}</a>
                </Link>
              )
            }
           
        </li>
        {/* <li>
          Tags:
          {product.tag &&
            product.tag.map((item, index, arr) => {
              return (
                <Link
                  href="/shop/grid-left-sidebar"
                  as={"/shop/grid-left-sidebar"}
                  key={index}
                >
                  <a>{item + (index !== arr.length - 1 ? ", " : "")}</a>
                </Link>
              );
            })}
        </li> */}
      </ul>
      {/* <div className="product-content__product-share space-mt--15">
        <span>Share:</span>
        <ul className="social-icons">
          <li>
            <a href="#">
              <IoLogoFacebook />
            </a>
          </li>
          <li>
            <a href="#">
              <IoLogoTwitter />
            </a>
          </li>
          <li>
            <a href="#">
              <IoLogoGoogleplus />
            </a>
          </li>
          <li>
            <a href="#">
              <IoLogoYoutube />
            </a>
          </li>
          <li>
            <a href="#">
              <IoLogoInstagram />
            </a>
          </li>
        </ul>
      </div> */}
    </div>
  );
};

export default ProductDescription;

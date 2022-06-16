import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { useToasts } from "react-toast-notifications";
import { getDiscountPrice } from "../../lib/product";
import { getProducts } from "../../lib/product";
import { LayoutOne } from "../../layouts";
import { BreadcrumbOne } from "../../components/Breadcrumb";
import { useRouter } from 'next/router'

import {
  ImageGalleryBottomThumb,
  ProductDescription,
  ProductDescriptionTab,
  Sidebar
} from "../../components/ProductDetails";
import { addToCart } from "../../redux/actions/cartActions";
import {
  addToWishlist,
  deleteFromWishlist
} from "../../redux/actions/wishlistActions";
import {
  addToCompare,
  deleteFromCompare
} from "../../redux/actions/compareActions";
import products from "../../data/products.json";
import { ProductSliderTwo } from "../../components/ProductSlider";
import { BACKENDAPI } from "../../../config";
import { useEffect, useState } from "react";
import { apiClient } from "../../utils/apiClient";

const ProductRightSidebar = ({
  products,
  // product,
  cartItems,
  wishlistItems,
  compareItems,
  addToCart,
  addToWishlist,
  deleteFromWishlist,
  addToCompare,
  deleteFromCompare,
  relatedProducts
}) => {
  const router = useRouter()
const { slug } = router.query;
const [loading,setLoading] = useState(true)
const [toggle,setToggle] = useState(true)

const orientations = [
{
    id:1,
    name:"Left Hanging Door",
},
{
  id:2,
  name:"Right Hanging Door"
},
{
  id:3,
  name:"Drill Both Sides"
},
{
  id:4,
  name:"Top Hanging Door"
},
{
  id:5,
  name:"Bottom Hanging Door"
}
]

const extraHoleDirections = [
  {
      id:1,
      name:"From Top",
  },
 
  {
    id:2,
    name:"From Bottom"
  }
  ]


	const [productNew, setProductData] = useState({
		id:"",
		name: "",
		description: "",
		sku: "",
		type: "single",
		category_id: "",
		style_id: "",
		price: 0,
		qty: "",
    colors:[],
		status:"active",
		is_featured:"0",
    is_hinge_holes:false,
    is_custom_size:false,
    is_extra_holes:false,
    orientation_id:0,
    hinge_holes_from_top:"",
    hinge_holes_from_bottom:"",
    extra_holes_direction_id:"",
    extra_holes_value:"",
    custom_height:'',
    custom_width:'',
    category:{name:""},
    style:{name:""},
		variation:[
			{
				variation_template_id:"",
				variation_value_template:[],

			}
		],
	    image: "",
		images:[],
		colors:[
			{
				id:"",
				name:"",
				code:"",
				color_id:"",
			}
		],
		
    selectedHeight:0,
    selectedWidth:0,
    selectedProductColor: ""
	});
  useEffect(() => {
   loadProduct(slug)
  },[slug])

  const loadProduct = (id) => {
    setLoading(true)
		apiClient()
			.get(`${BACKENDAPI}/v1.0/client/products/${id}`)
			.then((response) => {
				console.log(response);
      
				const {id,name,category_id,style_id,sku,description,type,product_variations,variations,image,colors,status,is_featured,category,images,style} = response.data.product

					
				
              let price = 0;
			  let qty = 0;
			  let tempVariation = []
				if(type === "single"){
                   price = variations[0].price
				   qty = variations[0].qty
           tempVariation = product_variations.map((el) => {

						el.variation_value_template = el.variations.map((el2) => {
              qty += el2.qty
						 return el2;
							 })

               
							return el
					   
					   })
				   
				} else {
					tempVariation = product_variations.map((el) => {

			

           
					
						el.variation_value_template = el.variations.map((el2) => {
              qty += el2.qty
						 return el2;
							 })

               
							return el
					   
					   })
				}
			

				console.log(tempVariation)
			let tempColors = colors.map((el) => {
				el.name = el.color.name
				el.code = el.color.code
                return el;
			})
		

      setProductData({
				...productNew,
				id,
				name,
				category_id,
				style_id,
				sku,
				description,
				type,
				price,
				qty,
				variation:tempVariation,
        selectedHeight:0,
        category,
				image,
				colors:tempColors,
				status,
				is_featured,
        images,
        style,
        
				})
				// setCategories(response.data.data);
        setToggle(!toggle)
        setLoading(false)
			})
			.catch((error) => {
				console.log(error);
			});
	};



 



  const { addToast } = useToasts();
  let discountedPrice = 0;
  if(productNew.discount){
     discountedPrice = parseFloat(getDiscountPrice(
      product.price,
      product.discount
    )).toFixed(2);
  } 
 

  // const productPrice = parseFloat(product.price).toFixed(2);
  
  const productPrice = 0;
  const cartItem = cartItems.filter(
    (cartItem) => cartItem.id === productNew.id
  )[0];
  const wishlistItem = wishlistItems.filter(
    (wishlistItem) => wishlistItem.id === productNew.id
  )[0];
  const compareItem = compareItems.filter(
    (compareItem) => compareItem.id === productNew.id
  )[0];


  const [errors,setErrors] = useState(null);
  
  const handleChecked = (e) => {
		setProductData({ ...productNew, [e.target.name]: e.target.checked });
	};
  const [heightErr,setHeightErr] = useState(null)
  const [widthErr,setWidthErr] = useState(null)
  
  const [productVariation,setProductVariation] = useState(null)
  const handleChange = (e) => {
		setProductData({ ...productNew, [e.target.name]: e.target.value });
    if(e.target.name == "custom_height") {

      let color = productNew.colors.find(el => {
        console.log(el)
           return   el.color.code == productNew.selectedProductColor
      })
       console.log("ccc",color)
let final_color = color.color.id;
 if(!parseInt(color.is_variation_specific)) {
  final_color = ""
 }

      if(color) {
        apiClient()
        .get(`${BACKENDAPI}/v1.0/client/check-height?product_id=${productNew.id}&&height=${e.target.value}&&color_id=${final_color}`)
        .then((response) => {
          console.log(response.data.product)
  if(response.data.product){
    setHeightErr(null)
  
    setProductVariation(response.data.product)
  
  } else {
    setHeightErr("no product found")
    
  }
  
        })
    
    
      } else {
        window.alert("please select a color")
      }

  
  
  
  
    }
    if(e.target.name == "custom_width") {
      if(heightErr == null){
    

        apiClient()
        .get(`${BACKENDAPI}/v1.0/client/check-width?product_id=${productNew.id}&&height=${productNew.custom_height}&&width=${e.target.value}&&product_variation_id=${productVariation.id}`)
        .then((response) => {
          console.log(response.data.product)
  if(response.data.product){
    setWidthErr(null)
    setProductData({
      ...productNew,
      price:response.data.product.price,
      custom_width:e.target.value
    })
  
  } else {
    setWidthErr("no product found")
 
  }
  
        })
      }
    
    }

    
	};

  const handleSelectHeight = (e) => {
		 setProductData({ ...productNew, [e.target.name]: e.target.value });
     if(e.target.name == "selectedWidth"){
       let price = 0;
       productNew.variation.map(el => {
         if(el.id == productNew.selectedHeight){
           el.variation_value_template.map(el2 => {
             if(el2.id == e.target.value){
               price = el2.price
             }
           })
         }
       })
       
        setProductData({ ...productNew,[e.target.name]: e.target.value, price})
     }
	};
  const setSelectedProductColor = (value) => {
setProductData({
  ...productNew,
  selectedProductColor:value
})
  }
  const checkColorNotEpmty = () => {
    if(!productNew.selectedProductColor){
      window.alert("Please select color")
    }
    
  }
  

// get custom hieght list
const getHeights = (variation,index) => {
 
 let color = productNew.colors.find(el => {
    return el.code == productNew.selectedProductColor
  })

if(parseInt(color.is_variation_specific)){
  if(productNew.selectedProductColor == variation.color?.code ){

  
    return		(<option
      key={index}
      value={variation.id}
      style={{ textTransform: "uppercase" }}>
      {variation.name}
    </option>)
  }
} else {
  if( !variation.color){

  
    return		(<option
      key={index}
      value={variation.id}
      style={{ textTransform: "uppercase" }}>
      {variation.name}
    </option>)
  }
}

 
}

if(!loading){
  return (
    <LayoutOne>
      {/* breadcrumb */}
      <BreadcrumbOne pageTitle={productNew.name}>
        <ol className="breadcrumb justify-content-md-end">
          <li className="breadcrumb-item">
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className="breadcrumb-item">
            <Link href="/shop/grid-left-sidebar">
              <a>Shop</a>
            </Link>
          </li>
          <li className="breadcrumb-item active">{productNew.name}</li>
        </ol>
      </BreadcrumbOne>

      {/* product details */}
      <div className="product-details space-pt--r100 space-pb--r100">
        <Container>
          <Row>
            <Col xl={9} lg={8}>
              <Row>
                <Col lg={6} className="space-mb-mobile-only--40">
                  {/* image gallery */}
                  <ImageGalleryBottomThumb product={productNew} />
                </Col>
                <Col lg={6}>
                  {/* product description */}
              
                  <ProductDescription
                    product={productNew}
                    productPrice={productNew.price}
                    discountedPrice={discountedPrice}
                    cartItems={cartItems}
                    cartItem={cartItem}
                    wishlistItem={wishlistItem}
                    compareItem={compareItem}
                    addToast={addToast}
                    addToCart={addToCart}
                    addToWishlist={addToWishlist}
                    deleteFromWishlist={deleteFromWishlist}
                    addToCompare={addToCompare}
                    deleteFromCompare={deleteFromCompare}
                    
                    
                    productContentButtonStyleClass="product-content__button-wrapper--style-two"
                    selectedProductColor={productNew.selectedProductColor}
                    setSelectedProductColor={setSelectedProductColor}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  {/* product description tab */}
                  <ProductDescriptionTab product={productNew} />
                </Col>
              </Row>

              {/* related product slider */}
              <ProductSliderTwo
                title="Related Products"
                products={relatedProducts}
                items={3}
              />
            </Col>
            <Col xl={3} lg={4} className="space-mt-mobile-only--60">
              {/* sidebar */}
             {
              productNew.type=="single"?(null):(   <Row>
                <Col sm={12} className="form-group" onClick={checkColorNotEpmty} >
                      
               <label htmlFor="selectedHeight" className="form-label">
                 Height
               </label>
               <select
                 className={
                   errors
                     ? errors.selectedHeight
                       ? `form-control is-invalid`
                       : `form-control is-valid`
                     : "form-control"
                 }
                 id="selectedHeight"
                 name="selectedHeight"
                 onChange={handleSelectHeight}
                 
                 value={productNew.selectedHeight}
                 disabled={productNew.is_custom_size}
                 >
                   
                 <option
         
                   value=""
                   >
                   Please Select
                 </option>
                 {productNew.variation.map((el, index) => { 
                 if(!productNew.selectedProductColor) {
                   return <></>;
                   return		(<option
                     key={index}
                     value={el.id}
                     style={{ textTransform: "uppercase" }}>
                     {el.name}
                   </option>)
                 } else  {
                 return getHeights(el,index)
                  
                   
                 }
       
             
       })}
               </select>
               {errors?.selectedHeight && (
                 <div className="invalid-feedback">{errors.selectedHeight[0]}</div>
               )}
               {errors && <div className="valid-feedback">Looks good!</div>}
           
                      </Col>
                      {/* width */}
                      <Col sm={12} className="form-group" >
                      
                      <label htmlFor="selectedWidth" className="form-label">
                        Width
                      </label>
                      <select
                        className={
                          errors
                            ? errors.selectedWidth
                              ? `form-control is-invalid`
                              : `form-control is-valid`
                            : "form-control"
                        }
                        id="selectedWidth"
                        name="selectedWidth"
                        onChange={handleSelectHeight}
                        value={productNew.selectedWidth}
                        disabled={productNew.is_custom_size}
                        >
                        <option
                
                          value=""
                          >
                          Please Select
                        </option>
                        {productNew.variation.map((el, index) => {
                           
                           if(el.id == productNew.selectedHeight) {
                          
                         return    el.variation_value_template.map((el2,index )=> {
                               
                               return (<option
                                 key={index}
                                 value={el2.id}
                                 style={{ textTransform: "uppercase" }}>
                                 {el2.name}
                               </option>)
                             })
                            
                           } else {
                             return <></>
                           }
                        
                        })}
                      </select>
                      {errors?.selectedWidth && (
                        <div className="invalid-feedback">{errors.selectedWidth[0]}</div>
                      )}
                      {errors && <div className="valid-feedback">Looks good!</div>}
                  
                             </Col>
                             
                             <Col sm={12} className="form-group" >
               <div className="form-check">
                 <input
                   className={
                     errors
                       ? errors.is_custom_size
                         ? `form-check-input is-invalid`
                         : `form-check-input is-valid`
                       : "form-check-input"
                   }
                   type="checkbox"
                   id="is_custom_size"
                   name="is_custom_size"
                   onChange={handleChecked}
                   checked={productNew.is_custom_size}
                 />
       
                 {errors?.is_custom_size && (
                   <div className="invalid-feedback">
                     {errors.is_custom_size[0]}
                   </div>
                 )}
                 {errors && <div className="valid-feedback">Looks good!</div>}
                 <label className="form-check-label" htmlFor="is_custom_size">
                   Do You Need Custom Size?
                 </label>
               </div>
             </Col>
             {
               productNew.is_custom_size?(<>
                  <Col sm={12} className="form-group">
               <label htmlFor="custom_height" className="form-label">
               Height
               </label>
               <input
                 type="text"
                 className={
                   errors
                     ? errors.custom_height
                       ? `form-control is-invalid`
                       : `form-control is-valid`
                     : "form-control"
                 }
                 id="custom_height"
                 name="custom_height"
                 onChange={handleChange}
                 value={productNew.custom_height}
                 placeholder="mm"
               />
       
              
              {heightErr && (
               <div className="text-danger">{heightErr}</div>
             )}
               {errors?.custom_height && (
                 <div className="invalid-feedback">{errors.custom_height[0]}</div>
               )}
               {errors && <div className="valid-feedback">Looks good!</div>}
             </Col>
             <Col sm={12} className="form-group">
             
               <label htmlFor="custom_width" className="form-label">
               Width
               </label>
               <input
                 type="text"
                 className={
                   errors
                     ? errors.custom_width
                       ? `form-control is-invalid`
                       : `form-control is-valid`
                     : "form-control"
                 }
                 id="custom_width"
                 name="custom_width"
                 onChange={handleChange}
                 value={productNew.custom_width}
                 placeholder="mm"
               />
              {widthErr && (
               <div className="text-danger">{widthErr}</div>
             )}
       
               {errors?.custom_width && (
                 <div className="invalid-feedback">{errors.custom_width[0]}</div>
               )}
               {errors && <div className="valid-feedback">Looks good!</div>}
             </Col>
               </>):(null)
             }
          
          
                             <Col sm={12} className="form-group" >
               <div className="form-check">
                 <input
                   className={
                     errors
                       ? errors.is_hinge_holes
                         ? `form-check-input is-invalid`
                         : `form-check-input is-valid`
                       : "form-check-input"
                   }
                   type="checkbox"
                   id="is_hinge_holes"
                   name="is_hinge_holes"
                   onChange={handleChecked}
                   checked={productNew.is_hinge_holes}
                 />
       
                 {errors?.is_hinge_holes && (
                   <div className="invalid-feedback">
                     {errors.is_hinge_holes[0]}
                   </div>
                 )}
                 {errors && <div className="valid-feedback">Looks good!</div>}
                 <label className="form-check-label" htmlFor="is_hinge_holes">
                   Do You Need Hingle Holes?
                 </label>
               </div>
             </Col>
          {productNew.is_hinge_holes?(<>
          <Col sm={12} className="form-group" >
                      
                      
                      <select
                        className={
                          errors
                            ? errors.orientation_id
                              ? `form-control is-invalid`
                              : `form-control is-valid`
                            : "form-control"
                        }
                        id="orientation_id"
                        name="orientation_id"
                        onChange={handleSelectHeight}
                        value={productNew.orientation_id}>
                        <option
                
                          value=""
                          >
                           Select Orientation
                        </option>
                        {orientations.map((el, index) => {
                           
                           return ( <option
                key={index}
                value={el.name}
                             >
                              {el.name}
                           </option>)
                        
                        })}
                      </select>
                      {errors?.orientation_id && (
                        <div className="invalid-feedback">{errors.orientation_id[0]}</div>
                      )}
                      {errors && <div className="valid-feedback">Looks good!</div>}
                  
                             </Col>
                             
                             <Col sm={6} className="form-group">
               <label htmlFor="hinge_holes_from_top" className="form-label">
               From Top
               </label>
               <input
                 type="text"
                 className={
                   errors
                     ? errors.hinge_holes_from_top
                       ? `form-control is-invalid`
                       : `form-control is-valid`
                     : "form-control"
                 }
                 id="hinge_holes_from_top"
                 name="hinge_holes_from_top"
                 onChange={handleChange}
                 value={productNew.hinge_holes_from_top}
                 placeholder="mm"
               />
       
               {errors?.hinge_holes_from_top && (
                 <div className="invalid-feedback">{errors.hinge_holes_from_top[0]}</div>
               )}
               {errors && <div className="valid-feedback">Looks good!</div>}
             </Col>
             <Col sm={6} className="form-group">
               <label htmlFor="hinge_holes_from_bottom" className="form-label">
               From Bottom
               </label>
               <input
                 type="text"
                 className={
                   errors
                     ? errors.hinge_holes_from_bottom
                       ? `form-control is-invalid`
                       : `form-control is-valid`
                     : "form-control"
                 }
                 id="hinge_holes_from_bottom"
                 name="hinge_holes_from_bottom"
                 onChange={handleChange}
                 value={productNew.hinge_holes_from_bottom}
                 placeholder="mm"
               />
       
               {errors?.hinge_holes_from_bottom && (
                 <div className="invalid-feedback">{errors.hinge_holes_from_bottom[0]}</div>
               )}
               {errors && <div className="valid-feedback">Looks good!</div>}
             </Col> 
                             
             
             <Col sm={12} className="form-group" >
               <div className="form-check">
                 <input
                   className={
                     errors
                       ? errors.is_extra_holes
                         ? `form-check-input is-invalid`
                         : `form-check-input is-valid`
                       : "form-check-input"
                   }
                   type="checkbox"
                   id="is_extra_holes"
                   name="is_extra_holes"
                   onChange={handleChecked}
                   checked={productNew.is_extra_holes}
                 />
       
                 {errors?.is_extra_holes && (
                   <div className="invalid-feedback">
                     {errors.is_extra_holes[0]}
                   </div>
                 )}
                 {errors && <div className="valid-feedback">Looks good!</div>}
                 <label className="form-check-label" htmlFor="is_extra_holes">
                   Do You Need Extra Holes?
                 </label>
               </div>
             </Col>   
       
       {
         productNew.is_extra_holes?( <> <Col sm={12} className="form-group" >
                      
                      
         <select
           className={
             errors
               ? errors.extra_holes_direction_id
                 ? `form-control is-invalid`
                 : `form-control is-valid`
               : "form-control"
           }
           id="extra_holes_direction_id"
           name="extra_holes_direction_id"
           onChange={handleSelectHeight}
           value={productNew.extra_holes_direction_id}>
           <option
       
             value=""
             >
             Please Select 
           </option>
           {extraHoleDirections.map((el, index) => {
              
              return ( <option
       key={index}
       value={el.id}
                >
                 {el.name}
              </option>)
           
           })}
         </select>
         {errors?.extra_holes_direction_id && (
           <div className="invalid-feedback">{errors.extra_holes_direction_id[0]}</div>
         )}
         {errors && <div className="valid-feedback">Looks good!</div>}
       
                </Col> 
                
                <Col sm={12} className="form-group">
               
               <input
                 type="text"
                 className={
                   errors
                     ? errors.extra_holes_value
                       ? `form-control is-invalid`
                       : `form-control is-valid`
                     : "form-control"
                 }
                 id="extra_holes_value"
                 name="extra_holes_value"
                 onChange={handleChange}
                 value={productNew.extra_holes_value}
       
                 placeholder={
                 productNew.extra_holes_direction_id?extraHoleDirections.find(el => {
                   console.log(el.id,productNew.extra_holes_direction_id)
                   return el.id == productNew.extra_holes_direction_id
                 })
                 ?.name + " MM"
                 :"MM"
               }
               />
       
               {errors?.extra_holes_value && (
                 <div className="invalid-feedback">{errors.extra_holes_value[0]}</div>
               )}
               {errors && <div className="valid-feedback">Looks good!</div>}
             </Col> 
                
                
                </> ):(null)
       
       }
                 
                             
                             </>):(null)}
       
       
                             
       
       
       
       
                    </Row>)
             }
          
             
              
            </Col>
          </Row>
        </Container>
      </div>
    </LayoutOne>
  );
} else {
  return <>loading...</>
}
 
};

const mapStateToProps = (state, ownProps) => {
  const products = state.productData;
  const category = "ownProps.product.category[0];"
  return {
    products,
    relatedProducts: getProducts(products, category, "popular", 8),
    cartItems: state.cartData,
    wishlistItems: state.wishlistData,
    compareItems: state.compareData
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (
      item,
      addToast,
      quantityCount,
      selectedProductColor,
      selectedProductSize
    ) => {
      dispatch(
        addToCart(
          item,
          addToast,
          quantityCount,
          selectedProductColor,
          selectedProductSize
        )
      );
    },
    addToWishlist: (item, addToast) => {
      dispatch(addToWishlist(item, addToast));
    },
    deleteFromWishlist: (item, addToast) => {
      dispatch(deleteFromWishlist(item, addToast));
    },
    addToCompare: (item, addToast) => {
      dispatch(addToCompare(item, addToast));
    },
    deleteFromCompare: (item, addToast) => {
      dispatch(deleteFromCompare(item, addToast));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductRightSidebar);

// export async function getStaticPaths() {
//   // get the paths we want to pre render based on products
//   const paths = products.map((product) => ({
//     params: { slug: product.slug }
//   }));

//   return { paths, fallback: false };
// }

// export async function getStaticProps({ params }) {
//   // get product data based on slug
//   const product = products.filter((single) => single.slug === params.slug)[0];

//   return { props: { product } };
// }

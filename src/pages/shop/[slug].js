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
import { BACKEND, BACKENDAPI } from "../../../config";
import { useEffect, useState } from "react";
import { apiClient } from "../../utils/apiClient";
import { ShopProducts } from "../../components/Shop";
import RightSidebar from "../../components/Shop/RightSidebar";
import { LightgalleryItem, LightgalleryProvider } from "react-lightgallery";

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
  const [layout, setLayout] = useState("grid");
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
    
		// colors:[
		// 	{
		// 		id:"",
		// 		name:"",
		// 		code:"",
		// 		color_id:"",
		// 	}
		// ],
		
    selectedHeight:0,
    selectedWidth:0,
    selectedProductColor: "",
    options:[],
    length_lower_limit:"",
    length_upper_limit:"",
    length_is_required:0,
    selected_length:""
    ,
    slug:""
	});
  useEffect(() => {
   loadProduct(slug)
  },[slug])

  const loadProduct = (slug) => {
    setLoading(true)
		apiClient()
			.get(`${BACKENDAPI}/v1.0/client/products/${slug}`)
			.then((response) => {
				console.log(response);
      
				const {
          id,name,category_id,style_id,sku,description,type,product_variations,variations,image,colors,status,is_featured,category,images,style,options
        
          ,
          length_lower_limit,
          length_upper_limit,
          length_is_required,
          slug
        
        } = response.data.product

			
				
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
		
const tempOptions = JSON.stringify(options)
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
        options:tempOptions
        ,
        length_lower_limit,
        length_upper_limit,
        length_is_required,
        slug
        
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
  const [customHeight,setCustomHeight] = useState("")
  const handleChange = (e) => {
    if(e.target.name == "selected_length") {
      if( parseInt(e.target.value) > productNew.length_upper_limit ){
return;
      }
    }
		setProductData({ ...productNew, [e.target.name]: e.target.value });

    




    if(e.target.name == "custom_height") {
      setCustomHeight(e.target.value)
      let color = productNew.colors.find(el => {
        console.log(el)
           return   el.color.code == productNew.selectedProductColor
      })
                 console.log("ccc",color)
let final_color = color?.color?.id;
 if(!parseInt(color?.is_variation_specific)) {
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
    if(productNew.custom_width){
    

      apiClient()
      .get(`${BACKENDAPI}/v1.0/client/check-width?product_id=${productNew.id}&&height=${e.target.value}&&width=${productNew.custom_width}&&product_variation_id=${response.data.product.id}`)
      .then((response) => {
        console.log(response.data.product)
if(response.data.product){
  setWidthErr(null)

  setProductData({
    ...productNew,
    qty:response.data.product.qty,
    price:response.data.product.price,
    selectedHeight:response.data.product.product_variation_id,
    selectedWidth:response.data.product.id,
    custom_height:e.target.value
  })

} else {
  setWidthErr("no product found")
setProductData({
    ...productNew,
    price:0,
    selectedHeight:0,
    selectedWidth:0,
    custom_height:e.target.value
  })
}

      })
    }


  } else {
    setHeightErr("no product found")
    setProductData({
      ...productNew,
      custom_height:e.target.value,
      price:0,
      qty:0,
      selectedHeight:0,
      selectedWidth:0,
    })
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
      qty:response.data.product.qty,
      price:response.data.product.price,
      selectedHeight:response.data.product.product_variation_id,
      selectedWidth:response.data.product.id,
      custom_width:e.target.value
    })
  
  } else {
    setWidthErr("no product found")
  setProductData({
      ...productNew,
      price:0,
      selectedHeight:0,
      selectedWidth:0,
      custom_width:e.target.value
    })
  }
  
        })
      }
    
    }

    
	};

  const handleSelectHeight = (e) => {
		 setProductData({ ...productNew, [e.target.name]: e.target.value });
     if(e.target.name == "selectedWidth"){
       let price = 0;
       let qty=0;
       productNew.variation.map(el => {
         if(el.id == productNew.selectedHeight){
           el.variation_value_template.map(el2 => {
             if(el2.id == e.target.value){
               price = el2.price
               qty = el2.qty
             }
           })
         }
       })
       
        setProductData({ ...productNew,[e.target.name]: e.target.value, price,qty})
     }
	};
  const setSelectedProductColor = (value) => {


   


    
setProductData({
  ...productNew,
  selectedProductColor:value
})
  }
  const [colorImage,setColorImage] = useState("");
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


const handleSelectOption = (e) => {
  const index = e.target.name.split("-")[1]
  const tempOtions = JSON.parse(productNew.options);
  tempOtions[index].selectedValue = e.target.value
  setProductData({...productNew,options:JSON.stringify(tempOtions)})
  console.log(productNew)
}
const [currentData, setCurrentData] = useState([]);

useEffect(() => {
  if(productNew.category_id){
    loadData()
  }
 

 
}, 

[
 productNew.category_id
]
);

const loadData = () => {
  

  apiClient()
    .get(`${BACKENDAPI}/v1.0/client/products/relatedproduct/get?category=${productNew.category_id}`)
    .then((response) => {
     
      console.log("zzzz",response.data)
      setCurrentData(response.data.products);
    
    })
    .catch((error) => {
     
    });
};
const [swiper, setSwiper] = useState(null);


  const slideTo = (index) => {

   
    if(swiper){
   
      swiper.slideToLoop(index)
    }
  
  };
  



if(!loading){
  return (
    <LayoutOne>
      {/* breadcrumb */}
{/*       <BreadcrumbOne pageTitle={productNew.name}>
        <ol className="breadcrumb justify-content-md-end">
          <li className="breadcrumb-item">
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className="breadcrumb-item">
            <Link href="/shop">
              <a>Shop</a>
            </Link>
          </li>
          <li className="breadcrumb-item active">{productNew.name}</li>
        </ol>
      </BreadcrumbOne> */}

      {/* product details */}
      <div className="product-details space-pt--r100 space-pb--r100">
        <Container>
          <Row>
            <Col xl={9} lg={8}>
              <Row>
                <Col lg={6} className="space-mb-mobile-only--40">
                  {/* image gallery */}
                  <div
                  className="product-large-image-wrapper text-center "
                  >
                  <LightgalleryProvider>
                  <LightgalleryItem group="any" src={colorImage?`${BACKEND}/${colorImage}`:`${BACKEND}/${productNew.image}`}>
                      <button className="enlarge-icon">
                        <i className="icon-magnifier-add" />
                      </button>
                    </LightgalleryItem>
                  <div className="img single-image" >
               <img
                  
                   style={{
                    height:"25rem",
                    width:"20rem"
                  }} 
                   
                   src={colorImage?
                    `${BACKEND}/${colorImage}`
                    :
                    (
                      productNew.colors[0]?.color_image?
                      `${BACKEND}/${productNew.colors[0]?.color_image}`
                      :
                      `${BACKEND}/${productNew.image}`
                    )
                   
                  }
                   className="img-fluid"
                  
                  
                  
                  />
               </div>
                  </LightgalleryProvider>
                  </div>
                
                  <ImageGalleryBottomThumb product={productNew} swiper={swiper} setSwiper={setSwiper} setColorImage={setColorImage} />

                 
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
                    setColorImage={setColorImage}
                    errors={errors}
                    handleChange={handleChange}
                    checkColorNotEpmty={checkColorNotEpmty}
                    handleSelectHeight={handleSelectHeight}
                    handleChecked={handleChecked}
                    handleSelectOption={handleSelectOption}
                    heightErr={heightErr}
                    widthErr={widthErr}
                    orientations={orientations}
                    extraHoleDirections={extraHoleDirections}
                    getHeights={getHeights}
                    customHeight={customHeight}
           setCustomHeight={setCustomHeight}
           slideTo={slideTo}
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
            
              {/* <ShopProducts layout={layout} products={currentData} />  */}
           {
            currentData.length?( <ProductSliderTwo
              title="Related Products"
              products={currentData}
              items={3}
            />):(null)
           }
             
            </Col>
           <RightSidebar 
           classList={"d-none d-lg-block"}
           productNew={productNew}
           errors={errors}
           handleChange={handleChange}
           checkColorNotEpmty={checkColorNotEpmty}
           handleSelectHeight={handleSelectHeight}
           handleChecked={handleChecked}
           handleSelectOption={handleSelectOption}
           heightErr={heightErr}
           widthErr={widthErr}
           orientations={orientations}
           extraHoleDirections={extraHoleDirections}
           getHeights={getHeights}
           customHeight={customHeight}
           setCustomHeight={setCustomHeight}
           />
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

import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { useToasts } from "react-toast-notifications";
import { getDiscountPrice } from "../../../lib/product";
import { getProducts } from "../../../lib/product";
import { LayoutOne } from "../../../layouts";
import { BreadcrumbOne } from "../../../components/Breadcrumb";
import { useRouter } from 'next/router'

import {
  ImageGalleryBottomThumb,
  ProductDescription,
  ProductDescriptionTab,
  Sidebar
} from "../../../components/ProductDetails";
import { addToCart } from "../../../redux/actions/cartActions";
import {
  addToWishlist,
  deleteFromWishlist
} from "../../../redux/actions/wishlistActions";
import {
  addToCompare,
  deleteFromCompare
} from "../../../redux/actions/compareActions";
import products from "../../../data/products.json";
import { ProductSliderTwo } from "../../../components/ProductSlider";
import { BACKENDAPI } from "../../../../config";
import { useEffect, useState } from "react";
import { apiClient } from "../../../utils/apiClient";

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

	const [productNew, setProductData] = useState({
		id:"",
		name: "",
		description: "",
		sku: "",
		type: "single",
		category_id: "",
		style_id: "",
		price: "",
		qty: "",
		status:"active",
		is_featured:"0",
    category:{name:"vvv"},
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
		]
		
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
      
				const {id,name,category_id,style_id,sku,description,type,product_variations,variations,image,colors,status,is_featured,category,images} = response.data.product

					
				
              let price = "";
			  let qty = "";
			  let tempVariation = []
				if(type === "single"){
                   price = variations[0].price
				   qty = variations[0].qty
				   
				} else {
					tempVariation = product_variations.map((el) => {

			


					
						el.variation_value_template = el.variations.map((el2) => {
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
        category,
				image,
				colors:tempColors,
				status,
				is_featured,
        images
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
                    productPrice={productPrice}
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
             
              <Sidebar products={products} category={productNew.category.name} />
              
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

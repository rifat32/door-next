import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { useToasts } from "react-toast-notifications";
import { getDiscountPrice } from "../../../lib/product";
import { getProducts } from "../../../lib/product";
import { LayoutOne } from "../../../layouts";
import { BreadcrumbOne } from "../../../components/Breadcrumb";
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

const ProductRightSidebar = ({
  products,
  product,
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
  const { addToast } = useToasts();
  const discountedPrice = getDiscountPrice(
    product.price,
    product.discount
  ).toFixed(2);

  const productPrice = product.price.toFixed(2);
  const cartItem = cartItems.filter(
    (cartItem) => cartItem.id === product.id
  )[0];
  const wishlistItem = wishlistItems.filter(
    (wishlistItem) => wishlistItem.id === product.id
  )[0];
  const compareItem = compareItems.filter(
    (compareItem) => compareItem.id === product.id
  )[0];

  return (
    <LayoutOne>
      {/* breadcrumb */}
      <BreadcrumbOne pageTitle={product.name}>
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
          <li className="breadcrumb-item active">{product.name}</li>
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
                  <ImageGalleryBottomThumb product={product} />
                </Col>
                <Col lg={6}>
                  {/* product description */}
                  <ProductDescription
                    product={product}
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
                  <ProductDescriptionTab product={product} />
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
              <Sidebar products={products} category={product.category[0]} />
            </Col>
          </Row>
        </Container>
      </div>
    </LayoutOne>
  );
};

const mapStateToProps = (state, ownProps) => {
  const products = state.productData;
  const category = ownProps.product.category[0];
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

export async function getStaticPaths() {
  // get the paths we want to pre render based on products
  const paths = products.map((product) => ({
    params: { slug: product.slug }
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // get product data based on slug
  const product = products.filter((single) => single.slug === params.slug)[0];

  return { props: { product } };
}

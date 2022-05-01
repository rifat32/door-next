import { connect } from "react-redux";
import { getProducts } from "../../lib/product";
import { LayoutOne } from "../../layouts";
import { HeroSliderOne } from "../../components/HeroSlider";
import { BannerOne, BannerTwo } from "../../components/Banner";
import { ProductTab } from "../../components/ProductTab";
import { ProductSliderOne } from "../../components/ProductSlider";
import { TestimonialOne } from "../../components/Testimonial";
import { IconBoxOne } from "../../components/IconBox";

import heroSliderOneData from "../../data/hero-sliders/hero-slider-one.json";
import testimonialOneData from "../../data/testimonials/testimonial-one.json";

const FashionOne = ({
  featuredProducts,
  newProducts,
  bestSellerProducts,
  saleProducts
}) => {
  return (
    <LayoutOne>
      {/* hero slider */}
      <HeroSliderOne heroSliderData={heroSliderOneData} />
      {/* double banner */}
      <BannerTwo />
      {/* tab product */}
      <ProductTab
        title="Exclusive Products"
        newProducts={newProducts}
        bestSellerProducts={bestSellerProducts}
        featuredProducts={featuredProducts}
        saleProducts={saleProducts}
      />
      {/* single banner */}
      <BannerOne />
      {/* product slider */}
      <ProductSliderOne title="Featured Products" products={featuredProducts} />
      {/* testimonial */}
      <TestimonialOne testimonialData={testimonialOneData} />
      {/* icon box */}
      <IconBoxOne />
    </LayoutOne>
  );
};

const mapStateToProps = (state) => {
  const products = state.productData;
  return {
    featuredProducts: getProducts(products, "fashion", "featured", 8),
    newProducts: getProducts(products, "fashion", "new", 8),
    bestSellerProducts: getProducts(products, "fashion", "popular", 8),
    saleProducts: getProducts(products, "fashion", "sale", 8)
  };
};

export default connect(mapStateToProps)(FashionOne);

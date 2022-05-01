import { connect } from "react-redux";
import { getProducts } from "../../lib/product";
import { LayoutSix } from "../../layouts";
import { HeroSliderSix } from "../../components/HeroSlider";
import { BannerFive, BannerSix } from "../../components/Banner";
import { CategorySliderTwo } from "../../components/CategorySlider";
import { ProductTabFour } from "../../components/ProductTab";
import { ProductSliderEleven } from "../../components/ProductSlider";
import { TestimonialOne } from "../../components/Testimonial";
import { BlogGrid } from "../../components/Blog";
import { BrandLogoTwo } from "../../components/BrandLogo";

import heroSliderSixData from "../../data/hero-sliders/hero-slider-six.json";
import categorySliderData from "../../data/category-sliders/category-slider-two.json";
import testimonialOneData from "../../data/testimonials/testimonial-one.json";
import brandLogoData from "../../data/brand-logo/brand-logo-one.json";

const ElectronicsTwo = ({
  trendingProducts,
  featuredProducts,
  newProducts,
  bestSellerProducts,
  saleProducts
}) => {
  return (
    <LayoutSix navPositionClass="justify-content-start">
      {/* hero slider */}
      <HeroSliderSix heroSliderData={heroSliderSixData} />
      {/* banner */}
      <BannerFive />
      {/* category slider */}
      <CategorySliderTwo categorySliderData={categorySliderData} />
      {/* tab product */}
      <ProductTabFour
        title="Exclusive Products"
        newProducts={newProducts}
        bestSellerProducts={bestSellerProducts}
        featuredProducts={featuredProducts}
        saleProducts={saleProducts}
      />
      {/* banner */}
      <BannerSix />
      {/* product slider */}
      <ProductSliderEleven
        title="Trending Products"
        products={trendingProducts}
      />
      {/* testimonial */}
      <TestimonialOne testimonialData={testimonialOneData} />
      {/* blog grid */}
      <BlogGrid customClass="blog-post--style-two--no-radius" />
      {/* brand logo */}
      <BrandLogoTwo brandLogoData={brandLogoData} />
    </LayoutSix>
  );
};

const mapStateToProps = (state) => {
  const products = state.productData;
  return {
    trendingProducts: getProducts(products, "electronics", "popular", 10),
    featuredProducts: getProducts(products, "electronics", "featured", 8),
    newProducts: getProducts(products, "electronics", "new", 8),
    bestSellerProducts: getProducts(products, "electronics", "popular", 8),
    saleProducts: getProducts(products, "electronics", "sale", 8)
  };
};

export default connect(mapStateToProps)(ElectronicsTwo);

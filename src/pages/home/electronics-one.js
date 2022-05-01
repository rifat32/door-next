import { connect } from "react-redux";
import { getProducts } from "../../lib/product";
import { LayoutFive } from "../../layouts";
import { HeroSliderFive } from "../../components/HeroSlider";
import { BannerFive } from "../../components/Banner";
import { ProductTabThree } from "../../components/ProductTab";
import { BrandLogoThree } from "../../components/BrandLogo";
import {
  ProductSliderEightWrapper,
  ProductSliderNine,
  DealProductSlider
} from "../../components/ProductSlider";

import heroSliderFiveData from "../../data/hero-sliders/hero-slider-five.json";
import brandLogoData from "../../data/brand-logo/brand-logo-one.json";

const ElectronicsOne = ({
  featuredProducts,
  featuredProductsTwo,
  bestSellerProducts,
  bestSellerProductsTwo,
  trendingProducts,
  saleProducts,
  saleProductsTwo,
  newProducts,
  dealProducts
}) => {
  return (
    <LayoutFive navPositionClass="justify-content-start">
      {/* hero slider */}
      <HeroSliderFive heroSliderData={heroSliderFiveData} />
      {/* tab product */}
      <ProductTabThree
        title="Exclusive Products"
        bannerImage="/assets/images/banner/shop_banner_img6.jpg"
        newProducts={newProducts}
        bestSellerProducts={bestSellerProductsTwo}
        featuredProducts={featuredProductsTwo}
        saleProducts={saleProductsTwo}
      />
      {/* banner */}
      <BannerFive containerClass="custom-container" />
      {/* deal products */}
      <DealProductSlider title="Deal Of The Day" products={dealProducts} />
      {/* product slider */}
      <ProductSliderNine
        title="Trending Products"
        bannerImage="/assets/images/banner/shop_banner_img10.jpg"
        products={trendingProducts}
      />
      {/* brand logo */}
      <BrandLogoThree title="Our Brands" brandLogoData={brandLogoData} />
      {/* product slider */}
      <ProductSliderEightWrapper
        featuredTitle="Featured Products"
        bestSellerTitle="Bestseller Products"
        saleTitle="Sale Products"
        featuredProducts={featuredProducts}
        bestSellerProducts={bestSellerProducts}
        saleProducts={saleProducts}
      />
    </LayoutFive>
  );
};

const mapStateToProps = (state) => {
  const products = state.productData;
  return {
    featuredProducts: getProducts(products, "electronics", "featured", 8),
    featuredProductsTwo: getProducts(products, "electronics", "featured", 8),
    newProducts: getProducts(products, "electronics", "new", 8),
    bestSellerProducts: getProducts(products, "electronics", "popular", 10),
    bestSellerProductsTwo: getProducts(products, "electronics", "popular", 10),
    trendingProducts: getProducts(products, "electronics", "popular", 10),
    saleProducts: getProducts(products, "electronics", "sale", 8),
    saleProductsTwo: getProducts(products, "electronics", "sale", 8),
    dealProducts: getProducts(products, "electronics", "deal", 8)
  };
};

export default connect(mapStateToProps)(ElectronicsOne);

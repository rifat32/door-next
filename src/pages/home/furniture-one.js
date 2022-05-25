import { connect } from "react-redux";
import { getProducts } from "../../lib/product";
import { LayoutThree } from "../../layouts";
import { HeroSliderThree } from "../../components/HeroSlider";
import { IconBoxThree } from "../../components/IconBox";
import { ProductSliderSix } from "../../components/ProductSlider";
import { BrandLogoTwo } from "../../components/BrandLogo";
import { ImageSliderOne } from "../../components/ImageSlider";
import { ProductGridOne } from "../../components/ProductGrid";
import { BannerFour } from "../../components/Banner";

import heroSliderThreeData from "../../data/hero-sliders/hero-slider-three.json";
import imageSliderData from "../../data/image-sliders/image-slider-one.json";
import brandLogoData from "../../data/brand-logo/brand-logo-one.json";
import { BACKENDAPI } from "../../../config";
import { useEffect, useState } from "react";
import { apiClient } from "../../utils/apiClient";

const FurnitureOne = ({ bestSellerProducts }) => {
const [featuredProducts,setFeaturenProduct] = useState([])

  useEffect(() => {
    
  
    
     let url = 
        `${BACKENDAPI}/v1.0/client/products/featured/all`
    
      
      apiClient()
        .get(url)
        .then((response) => {
          console.log(response.data)
          setFeaturenProduct(response.data.products);
       
        })
        .catch((error) => {
      
          console.log(error.response)
        });
    

  }, 
  
  [
  
  ]
  );
  return (
    <LayoutThree navPositionClass="justify-content-center">
      {/* hero slider */}
      <HeroSliderThree heroSliderData={heroSliderThreeData} />
      {/* icon box */}
      <IconBoxThree />
      {/* grid product */}
      <ProductGridOne
        title="Exclusive Products"
        products={bestSellerProducts}
      />
      {/* banner */}
      <BannerFour />
      {/* product slider */}
      {
        featuredProducts.length?(    <ProductSliderSix title="Featured Products" products={featuredProducts} />):(null)
      }
  
      {/* image slider */}
      <ImageSliderOne imageSliderData={imageSliderData} />
      {/* brand logo */}
      <BrandLogoTwo brandLogoData={brandLogoData} />
    </LayoutThree>
  );
};

const mapStateToProps = (state) => {
  const products = state.productData;
  return {
    // featuredProducts: getProducts(products, "furniture", "featured", 8),
    bestSellerProducts: getProducts(products, "furniture", "popular", 8)
  };
};

export default connect(mapStateToProps)(FurnitureOne);

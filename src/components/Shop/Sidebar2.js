import { Fragment, useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import {
  getIndividualCategories,
  getIndividualTags,
  getIndividualColors,
  getProductsIndividualSizes,
  getProducts,
  getDiscountPrice,
  setActiveSort,
  setActiveStyleSort
} from "../../lib/product";
import { ProductRating } from "../Product";
import { apiClient } from "../../utils/apiClient";
import { BACKENDAPI } from "../../../config";

const Sidebar2 = ({ products, getSortParams }) => {
  const [categories, setCategories ] = useState([])
  const [styles, setStyles ] = useState([])
  const [colors, setColors ] = useState([])
  

  // const colors = getIndividualColors(products);
  const sizes = getProductsIndividualSizes(products);
  const tags = getIndividualTags(products);
  const popularProducts = getProducts(products, "fashion", "popular", 3);
  
useEffect(
() => {
  let isApiSubscribed = true;
  if(isApiSubscribed){
    apiClient()
    .get(`${BACKENDAPI}/v1.0/client/categories/all`)
    .then((response) => {
      setCategories(response.data.data);
    })
    .catch((err) => {
      console.log(err.response);
    });
    apiClient()
    .get(`${BACKENDAPI}/v1.0/client/styles/all`)
    .then((response) => {
     
      setStyles(response.data.data);
    })
    .catch((err) => {
      console.log(err.response);
    });
    apiClient()
    .get(`${BACKENDAPI}/v1.0/client/colors/all`)
    .then((response) => {
     
      setColors(response.data.data);
    })
    .catch((err) => {
      console.log(err.response);
    });
  }
 
  return () => {
      // cancel the subscription
      isApiSubscribed = false;
  };
}
, []);
 




const [showCategories,setShowCategories] = useState(false)
const [showStyles,setShowStyles] = useState(false)
const [showColors,setShowColors] = useState(false)
  return (
    <div className="sidebar">
      <div className="widget">
        <h5 className="widget__title" onClick={() => setShowCategories(!showCategories)} style={{cursor:"pointer"}} >Categories +</h5>
        {showCategories?( (categories.length > 0) ? (
          <ul className="widget__categories">
            {categories &&
              categories.map((category, key) => {
                return (
                  <li key={key}>
                    <button
                      onClick={(e) => {
                        getSortParams("category", category.id);
                        setActiveSort(e);
                      }}
                    >
                      <IoIosArrowForward />
                      <span className="categories-name">{category.name} </span>
                      {/* <span className="categories-num">({category.count})</span> */}
                    </button>
                  </li>
                );
              })}
              <li>
              <button
                onClick={(e) => {
                  getSortParams("category", "");
                  setActiveSort(e);
                }}
              >
                <IoIosArrowForward />
                <span className="categories-name">Clear Filter</span>
              </button>
            </li>
          </ul>
        ) : (
          "No category found"
        )):("")}
       
      </div>
      <div className="widget">
        <h5 className="widget__title" onClick={() => setShowStyles(!showStyles)} style={{cursor:"pointer"}}>Styles +</h5>
        {
          showStyles?(styles.length > 0 ? (
            <ul className="widget__categories widget__styles">
              {styles &&
                styles.map((el, key) => {
                  return (
                    <li key={key}>
                      <button
                        onClick={(e) => {
                          getSortParams("style", el.id);
                          setActiveStyleSort(e);
                        }}
                      >
                        <IoIosArrowForward />
                        <span className="categories-name">{el.name} </span>
                        {/* <span className="categories-num">({category.count})</span> */}
                      </button>
                    </li>
                  );
                })}
                  <li>
                <button
                  onClick={(e) => {
                    getSortParams("style", "");
                    setActiveSort(e);
                  }}
                >
                  <IoIosArrowForward />
                  <span className="categories-name">Clear Filter</span>
                </button>
              </li>
            </ul>
          ) : (
            "No style found"
          )):("")
        }
       
      </div>

      {/* <div className="widget">
        <h5 className="widget__title">Sizes</h5>
        {sizes.length > 0 ? (
          <ul className="widget__sizes">
            <li>
              <button
                onClick={(e) => {
                  getSortParams("size", "");
                  setActiveSort(e);
                }}
              >
                All sizes
              </button>
            </li>
            {sizes.map((size, i) => {
              return (
                <li key={i}>
                  <button
                    onClick={(e) => {
                      getSortParams("size", size);
                      setActiveSort(e);
                    }}
                  >
                    {size}
                  </button>
                </li>
              );
            })}
          </ul>
        ) : (
          "No sizes found"
        )}
      </div> */}

      <div className="widget" 
      // style={{display:"none"}}
      >
        <h5 className="widget__title" onClick={() => setShowColors(!showColors)} style={{cursor:"pointer"}}>Colors +</h5>

{
  showColors?(colors.length > 0 ? (
    <ul className="widget__colors row">
      {colors.map((color, key) => {
        return (
          <li key={key} className="col-1">
            <button
              onClick={(e) => {
                getSortParams("color", color.id);
                setActiveSort(e);
              }}
              style={{ backgroundColor: color.code ,   border:"1px solid black",}}
              
            ></button>
          </li>
        );
      })}
      <li className="col-1">
        <button
          onClick={(e) => {
            getSortParams("color", "");
            setActiveSort(e);
          }}
        >
          x
        </button>
      </li>
    </ul>
  ) : (
    "No colors found"
  )):("")
}
       
      </div>

      {/* <div className="widget">
        <h5 className="widget__title">Popular Items</h5>
        {popularProducts.length > 0 ? (
          <ul className="widget-recent-post-wrapper">
            {popularProducts &&
              popularProducts.map((product, key) => {
                const discountedPrice = parseFloat(getDiscountPrice(
                  product.price,
                  product.discount
                )).toFixed(2);
                const productPrice = parseFloat(product.price).toFixed(2);
                return (
                  <li className="widget-product-post" key={key}>
                    <div className="widget-product-post__image">
                      <Link
                        href={`/shop/product-basic/[slug]?slug=${product.slug}`}
                        as={"/shop/product-basic/" + product.slug}
                      >
                        <a>
                          <img src={product.thumbImage[0]} alt="shop_small1" />
                        </a>
                      </Link>
                    </div>
                    <div className="widget-product-post__content">
                      <h6 className="product-title">
                        <Link
                          href={`/shop/product-basic/[slug]?slug=${product.slug}`}
                          as={"/shop/product-basic/" + product.slug}
                        >
                          <a>{product.name}</a>
                        </Link>
                      </h6>
                      <div className="product-price">
                        {product.discount ? (
                          <Fragment>
                            <span className="price">${discountedPrice}</span>
                            <del>${productPrice}</del>
                          </Fragment>
                        ) : (
                          <span className="price">${productPrice}</span>
                        )}
                      </div>
                      <div className="rating-wrap">
                        <ProductRating ratingValue={product.rating} />
                      </div>
                    </div>
                  </li>
                );
              })}
          </ul>
        ) : (
          "No products found"
        )}
      </div> */}

      {/* <div className="widget">
        <h5 className="widget__title">tags</h5>
        {tags.length > 0 ? (
          <div className="widget__tags">
            {tags &&
              tags.map((tag, key) => {
                return (
                  <button
                    key={key}
                    onClick={(e) => {
                      getSortParams("tag", tag);
                      setActiveSort(e);
                    }}
                  >
                    {tag}
                  </button>
                );
              })}
          </div>
        ) : (
          "No tags found"
        )}
      </div> */}

      {/* <div className="widget">
        <div className="shop-banner">
          <div className="banner-img">
            <img
              src="/assets/images/banner/sidebar_banner_img.jpg"
              alt="sidebar_banner_img"
            />
          </div>
          <div className="shop-bn-content2">
            <h5 className="text-uppercase shop-subtitle">New Collection</h5>
            <h3 className="text-uppercase shop-title">Sale 30% Off</h3>
            <Link href="/shop/grid-left-sidebar">
              <a className="btn btn-white rounded-0 btn-sm text-uppercase">
                Shop Now
              </a>
            </Link>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Sidebar2;

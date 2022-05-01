import { Fragment } from "react";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import {
  getIndividualCategories,
  getIndividualTags,
  getProducts,
  getDiscountPrice
} from "../../lib/product";
import { ProductRating } from "../../components/Product";

const Sidebar = ({ products, category }) => {
  const categories = getIndividualCategories(products);
  const tags = getIndividualTags(products);
  const popularProducts = getProducts(products, category, "popular", 3);

  return (
    <div className="sidebar">
      <div className="widget">
        <h5 className="widget__title">Categories</h5>
        {categories.length > 0 ? (
          <ul className="widget__categories">
            {categories &&
              categories.map((single, key) => {
                return (
                  <li key={key}>
                    <Link href="/shop/grid-left-sidebar">
                      <a>
                        <IoIosArrowForward />
                        <span className="categories-name">{single.name}</span>
                        <span className="categories-num">({single.count})</span>
                      </a>
                    </Link>
                  </li>
                );
              })}
          </ul>
        ) : (
          "No categories found"
        )}
      </div>

      <div className="widget">
        <h5 className="widget__title">Popular Items</h5>
        {popularProducts.length > 0 ? (
          <ul className="widget-recent-post-wrapper">
            {popularProducts &&
              popularProducts.map((product, key) => {
                const discountedPrice = getDiscountPrice(
                  product.price,
                  product.discount
                ).toFixed(2);
                const productPrice = product.price.toFixed(2);
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
      </div>

      <div className="widget">
        <h5 className="widget__title">tags</h5>
        {tags.length > 0 ? (
          <div className="tags">
            {tags &&
              tags.map((single, key) => {
                return (
                  <Link href="/shop/grid-left-sidebar" key={key}>
                    <a>{single}</a>
                  </Link>
                );
              })}
          </div>
        ) : (
          "No tags found"
        )}
      </div>

      <div className="widget">
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
      </div>
    </div>
  );
};

export default Sidebar;

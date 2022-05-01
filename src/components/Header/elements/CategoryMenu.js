import { useState } from "react";
import Link from "next/link";
import { SlideDown } from "react-slidedown";
import { IoIosMenu, IoIosArrowForward } from "react-icons/io";

const CategoryMenu = () => {
  const [categoryMenuExpandStatus, setCategoryMenuExpandStatus] = useState(
    true
  );
  const [
    categoryMenuItemExpandStatus,
    setCategoryMenuItemExpandStatus
  ] = useState(false);
  return (
    <div className="header-categories-wrap">
      <button
        className="category-menu-trigger"
        onClick={() => setCategoryMenuExpandStatus(!categoryMenuExpandStatus)}
      >
        <IoIosMenu /> ALL CATEGORIES
      </button>
      <nav className="category-menu dark-skin">
        <SlideDown closed={categoryMenuExpandStatus ? false : true}>
          <ul>
            <li className="has-children-mega">
              <Link href="/shop/grid-left-sidebar">
                <a className="nav-link">
                  <i className="flaticon-woman"></i>{" "}
                  <span>
                    Woman's <IoIosArrowForward />
                  </span>
                </a>
              </Link>
              <ul className="sub-menu sub-menu--category sub-menu--category--with-banner sub-menu--mega">
                <li className="sub-menu--mega__column">
                  <h3 className="sub-menu--mega__title">FEATURED ITEM</h3>
                  <ul className="sub-menu--mega__list">
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        <a>Vestibulum sed</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        <a>Donec porttitor</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        <a>Donec vitae facilisis</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        <a>Curabitur tempus</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        <a>Vivamus in tortor</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        <a>Donec vitae ante ante</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        <a>Etiam ac rutrum</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        <a>Quisque condimentum</a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="sub-menu--mega__column">
                  <h3 className="sub-menu--mega__title">POPULAR ITEM</h3>
                  <ul className="sub-menu--mega__list">
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        <a>Curabitur tempus</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        <a>Vivamus in tortor</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        <a>Donec vitae ante ante</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        <a>Etiam ac rutrum</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        <a>Vestibulum sed</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        <a>Donec porttitor</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        <a>Donec vitae facilisis</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        <a>Quisque condimentum</a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="sub-menu--mega__column sub-menu--mega__column--banners">
                  <div className="header-banner p-0">
                    <img
                      src="/assets/images/banner/menu_banner1.jpg"
                      alt="menu_banner1"
                    />
                    <div className="banner-info">
                      <h6>10% Off</h6>
                      <h4>New Arrival</h4>
                      <Link href="/shop/grid-left-sidebar">
                        <a>Shop now</a>
                      </Link>
                    </div>
                  </div>
                  <div className="header-banner p-0">
                    <img
                      src="/assets/images/banner/menu_banner2.jpg"
                      alt="menu_banner1"
                    />
                    <div className="banner-info">
                      <h6>10% Off</h6>
                      <h4>New Arrival</h4>
                      <Link href="/shop/grid-left-sidebar">
                        <a>Shop now</a>
                      </Link>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
            <li className="has-children-mega">
              <Link href="/shop/grid-left-sidebar">
                <a className="nav-link">
                  <i className="flaticon-boss"></i>{" "}
                  <span>
                    Men's <IoIosArrowForward />
                  </span>
                </a>
              </Link>
              <ul className="sub-menu sub-menu--category sub-menu--mega">
                <li className="sub-menu--mega__column">
                  <h3 className="sub-menu--mega__title">FEATURED ITEM</h3>
                  <ul className="sub-menu--mega__list">
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        <a>Vestibulum sed</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        <a>Donec porttitor</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        <a>Donec vitae facilisis</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        <a>Curabitur tempus</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        <a>Vivamus in tortor</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        <a>Donec vitae ante ante</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        <a>Etiam ac rutrum</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        <a>Quisque condimentum</a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="sub-menu--mega__column">
                  <h3 className="sub-menu--mega__title">POPULAR ITEM</h3>
                  <ul className="sub-menu--mega__list">
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        <a>Curabitur tempus</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        <a>Vivamus in tortor</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        <a>Donec vitae ante ante</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        <a>Etiam ac rutrum</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        <a>Vestibulum sed</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        <a>Donec porttitor</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        <a>Donec vitae facilisis</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        <a>Quisque condimentum</a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="sub-menu--mega__column">
                  <h3 className="sub-menu--mega__title">NEW ITEM</h3>
                  <ul className="sub-menu--mega__list">
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        <a>Curabitur tempus</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        <a>Vivamus in tortor</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        <a>Donec vitae ante ante</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        <a>Etiam ac rutrum</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        <a>Vestibulum sed</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        <a>Donec porttitor</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        <a>Donec vitae facilisis</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        <a>Quisque condimentum</a>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="has-children-mega">
              <Link href="/shop/grid-left-sidebar">
                <a className="nav-link">
                  <i className="flaticon-friendship"></i>{" "}
                  <span>
                    Kid's <IoIosArrowForward />
                  </span>
                </a>
              </Link>
              <ul className="sub-menu sub-menu--category sub-menu--category--with-banner sub-menu--mega">
                <li className="sub-menu--mega__column">
                  <h3 className="sub-menu--mega__title">FEATURED ITEM</h3>
                  <ul className="sub-menu--mega__list">
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        <a>Vestibulum sed</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        <a>Donec porttitor</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        <a>Donec vitae facilisis</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        <a>Curabitur tempus</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        <a>Vivamus in tortor</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        <a>Donec vitae ante ante</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        <a>Etiam ac rutrum</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        <a>Quisque condimentum</a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="sub-menu--mega__column">
                  <h3 className="sub-menu--mega__title">POPULAR ITEM</h3>
                  <ul className="sub-menu--mega__list">
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        <a>Curabitur tempus</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        <a>Vivamus in tortor</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        <a>Donec vitae ante ante</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        <a>Etiam ac rutrum</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        <a>Vestibulum sed</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        <a>Donec porttitor</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        <a>Donec vitae facilisis</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        <a>Quisque condimentum</a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="sub-menu--mega__column sub-menu--mega__column--banners">
                  <div className="header-banner p-0">
                    <Link href="/shop/grid-left-sidebar">
                      <a>
                        <img
                          src="/assets/images/banner/menu_banner5.jpg"
                          alt="menu_banner1"
                        />
                      </a>
                    </Link>
                  </div>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/shop/grid-left-sidebar">
                <a className="nav-link">
                  <i className="flaticon-sunglasses"></i>{" "}
                  <span>Accessories</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/shop/grid-left-sidebar">
                <a className="nav-link">
                  <i className="flaticon-jacket"></i> <span>Clothing</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/shop/grid-left-sidebar">
                <a className="nav-link">
                  <i className="flaticon-sneakers"></i> <span>Shoes</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/shop/grid-left-sidebar">
                <a className="nav-link">
                  <i className="flaticon-watch"></i> <span>Watches</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/shop/grid-left-sidebar">
                <a className="nav-link">
                  <i className="flaticon-necklace"></i> <span>Jewelry</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/shop/grid-left-sidebar">
                <a className="nav-link">
                  <i className="flaticon-herbal"></i>{" "}
                  <span>Health & Beauty</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/shop/grid-left-sidebar">
                <a className="nav-link">
                  <i className="flaticon-ball"></i> <span>Sports</span>
                </a>
              </Link>
            </li>
            <SlideDown closed={categoryMenuItemExpandStatus ? false : true}>
              <li>
                <Link href="/shop/grid-left-sidebar">
                  <a className="nav-link">
                    <i className="flaticon-pijamas"></i> <span>Sleepwear</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/shop/grid-left-sidebar">
                  <a className="nav-link">
                    <i className="flaticon-scarf"></i>{" "}
                    <span>Seasonal Wear</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/shop/grid-left-sidebar">
                  <a className="nav-link">
                    <i className="flaticon-vintage"></i>{" "}
                    <span>Ethnic Wear</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/shop/grid-left-sidebar">
                  <a className="nav-link">
                    <i className="flaticon-pregnant"></i>{" "}
                    <span>Baby Clothing</span>
                  </a>
                </Link>
              </li>
            </SlideDown>
            <li>
              <button
                className="category-menu-expand-trigger"
                onClick={() =>
                  setCategoryMenuItemExpandStatus(!categoryMenuItemExpandStatus)
                }
              >
                More Categories <span>+</span>{" "}
              </button>
            </li>
          </ul>
        </SlideDown>
      </nav>
    </div>
  );
};

export default CategoryMenu;

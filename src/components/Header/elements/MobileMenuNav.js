import { useEffect } from "react";
import Link from "next/link";

const MobileMenuNav = ({ getActiveStatus }) => {
  useEffect(() => {
    const offCanvasNav = document.querySelector(
      "#offcanvas-mobile-menu__navigation"
    );
    const offCanvasNavSubMenu = offCanvasNav.querySelectorAll(
      ".mobile-sub-menu"
    );
    const anchorLinks = offCanvasNav.querySelectorAll("a");

    for (let i = 0; i < offCanvasNavSubMenu.length; i++) {
      offCanvasNavSubMenu[i].insertAdjacentHTML(
        "beforebegin",
        "<span class='menu-expand'><i></i></span>"
      );
    }

    const menuExpand = offCanvasNav.querySelectorAll(".menu-expand");
    const numMenuExpand = menuExpand.length;

    for (let i = 0; i < numMenuExpand; i++) {
      menuExpand[i].addEventListener("click", (e) => {
        sideMenuExpand(e);
      });
    }

    for (let i = 0; i < anchorLinks.length; i++) {
      anchorLinks[i].addEventListener("click", () => {
        getActiveStatus(false);
      });
    }
  });

  const sideMenuExpand = (e) => {
    e.currentTarget.parentElement.classList.toggle("active");
  };
  return (
    <nav
      className="offcanvas-mobile-menu__navigation space-mb--30"
      id="offcanvas-mobile-menu__navigation"
    >
      <ul>
        <li className="menu-item-has-children">
          <Link href="/">
            <a>Home</a>
          </Link>
          <ul className="mobile-sub-menu">
            <li>
              <Link href="/home/fashion-one">
                <a>Fashion Home One</a>
              </Link>
            </li>
            <li>
              <Link href="/home/fashion-two">
                <a>Fashion Home Two</a>
              </Link>
            </li>
            <li>
              <Link href="/home/furniture-one">
                <a>Furniture Home One</a>
              </Link>
            </li>
            <li>
              <Link href="/home/furniture-two">
                <a>Furniture Home Two</a>
              </Link>
            </li>
            <li>
              <Link href="/home/electronics-one">
                <a>Electronics Home One</a>
              </Link>
            </li>
            <li>
              <Link href="/home/electronics-two">
                <a>Electronics Home Two</a>
              </Link>
            </li>
          </ul>
        </li>

        <li className="menu-item-has-children">
          <Link href="/shop/grid-left-sidebar">
            <a>Shop</a>
          </Link>
          <ul className="mobile-sub-menu">
            <li className="menu-item-has-children">
              <Link href="/shop/grid-left-sidebar">
                <a>Shop Page Layout</a>
              </Link>
              <ul className="mobile-sub-menu">
                <li>
                  <Link href="/shop/grid-left-sidebar">
                    <a>Grid Left Sidebar</a>
                  </Link>
                </li>
                <li>
                  <Link href="/shop/grid-right-sidebar">
                    <a>Grid Right Sidebar</a>
                  </Link>
                </li>
                <li>
                  <Link href="/shop/list-left-sidebar">
                    <a>List Left Sidebar</a>
                  </Link>
                </li>
                <li>
                  <Link href="/shop/list-right-sidebar">
                    <a>List Right Sidebar</a>
                  </Link>
                </li>
                <li>
                  <Link href="/shop/list-no-sidebar">
                    <a>List No Sidebar</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-item-has-children">
              <Link href="/shop/grid-left-sidebar">
                <a>Other Pages</a>
              </Link>
              <ul className="mobile-sub-menu">
                <li>
                  <Link href="/other/cart">
                    <a>Cart</a>
                  </Link>
                </li>
                <li>
                  <Link href="/other/checkout">
                    <a>Checkout</a>
                  </Link>
                </li>
                <li>
                  <Link href="/other/my-account">
                    <a>My Account</a>
                  </Link>
                </li>
                <li>
                  <Link href="/other/wishlist">
                    <a>Wishlist</a>
                  </Link>
                </li>
                <li>
                  <Link href="/other/compare">
                    <a>Compare</a>
                  </Link>
                </li>
                <li>
                  <Link href="/other/order-completed">
                    <a>Order Completed</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-item-has-children">
              <Link href="/shop/grid-left-sidebar">
                <a>Product Pages</a>
              </Link>
              <ul className="mobile-sub-menu">
                <li>
                  <Link
                    href="/shop/product-basic/[slug]?slug=lorem-ipsum-fashion-eight"
                    as="/shop/product-basic/lorem-ipsum-fashion-eight"
                  >
                    <a>Default</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop/product-left-sidebar/[slug]?slug=lorem-ipsum-fashion-eight"
                    as="/shop/product-left-sidebar/lorem-ipsum-fashion-eight"
                  >
                    <a>Left Sidebar</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop/product-right-sidebar/[slug]?slug=lorem-ipsum-fashion-eight"
                    as="/shop/product-right-sidebar/lorem-ipsum-fashion-eight"
                  >
                    <a>Right Sidebar</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop/product-thumb-left/[slug]?slug=lorem-ipsum-fashion-eight"
                    as="/shop/product-thumb-left/lorem-ipsum-fashion-eight"
                  >
                    <a>Thumb Left</a>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li className="menu-item-has-children">
          <Link href="/shop/grid-left-sidebar">
            <a>Products</a>
          </Link>
          <ul className="mobile-sub-menu">
            <li className="menu-item-has-children">
              <Link href="/shop/grid-left-sidebar">
                <a>Shop Page Layout</a>
              </Link>
              <ul className="mobile-sub-menu">
                <li>
                  <Link href="/shop/grid-left-sidebar">
                    <a>Grid Left Sidebar</a>
                  </Link>
                </li>
                <li>
                  <Link href="/shop/grid-right-sidebar">
                    <a>Grid Right Sidebar</a>
                  </Link>
                </li>
                <li>
                  <Link href="/shop/list-left-sidebar">
                    <a>List Left Sidebar</a>
                  </Link>
                </li>
                <li>
                  <Link href="/shop/list-right-sidebar">
                    <a>List Right Sidebar</a>
                  </Link>
                </li>
                <li>
                  <Link href="/shop/list-no-sidebar">
                    <a>List No Sidebar</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-item-has-children">
              <Link href="/shop/grid-left-sidebar">
                <a>Other Pages</a>
              </Link>
              <ul className="mobile-sub-menu">
                <li>
                  <Link href="/other/cart">
                    <a>Cart</a>
                  </Link>
                </li>
                <li>
                  <Link href="/other/checkout">
                    <a>Checkout</a>
                  </Link>
                </li>
                <li>
                  <Link href="/other/my-account">
                    <a>My Account</a>
                  </Link>
                </li>
                <li>
                  <Link href="/other/wishlist">
                    <a>Wishlist</a>
                  </Link>
                </li>
                <li>
                  <Link href="/other/compare">
                    <a>Compare</a>
                  </Link>
                </li>
                <li>
                  <Link href="/other/order-completed">
                    <a>Order Completed</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-item-has-children">
              <Link href="/shop/grid-left-sidebar">
                <a>Product Pages</a>
              </Link>
              <ul className="mobile-sub-menu">
                <li>
                  <Link
                    href="/shop/product-basic/[slug]?slug=lorem-ipsum-fashion-eight"
                    as="/shop/product-basic/lorem-ipsum-fashion-eight"
                  >
                    <a>Default</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop/product-left-sidebar/[slug]?slug=lorem-ipsum-fashion-eight"
                    as="/shop/product-left-sidebar/lorem-ipsum-fashion-eight"
                  >
                    <a>Left Sidebar</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop/product-right-sidebar/[slug]?slug=lorem-ipsum-fashion-eight"
                    as="/shop/product-right-sidebar/lorem-ipsum-fashion-eight"
                  >
                    <a>Right Sidebar</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop/product-thumb-left/[slug]?slug=lorem-ipsum-fashion-eight"
                    as="/shop/product-thumb-left/lorem-ipsum-fashion-eight"
                  >
                    <a>Thumb Left</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-item-has-children">
              <Link href="/shop/grid-left-sidebar">
                <a>Product Pages</a>
              </Link>
              <ul className="mobile-sub-menu">
                <li>
                  <Link
                    href="/shop/product-basic/[slug]?slug=lorem-ipsum-fashion-eight"
                    as="/shop/product-basic/lorem-ipsum-fashion-eight"
                  >
                    <a>Default</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop/product-left-sidebar/[slug]?slug=lorem-ipsum-fashion-eight"
                    as="/shop/product-left-sidebar/lorem-ipsum-fashion-eight"
                  >
                    <a>Left Sidebar</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop/product-right-sidebar/[slug]?slug=lorem-ipsum-fashion-eight"
                    as="/shop/product-right-sidebar/lorem-ipsum-fashion-eight"
                  >
                    <a>Right Sidebar</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop/product-thumb-left/[slug]?slug=lorem-ipsum-fashion-eight"
                    as="/shop/product-thumb-left/lorem-ipsum-fashion-eight"
                  >
                    <a>Thumb Left</a>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li className="menu-item-has-children">
          <Link href="/">
            <a>Pages</a>
          </Link>
          <ul className="mobile-sub-menu">
            <li>
              <Link href="/other/about-us">
                <a>About Us</a>
              </Link>
            </li>
            <li>
              <Link href="/other/contact-us">
                <a>Contact Us</a>
              </Link>
            </li>
            <li>
              <Link href="/other/faq">
                <a>F.A.Q</a>
              </Link>
            </li>
            <li>
              <Link href="/other/not-found">
                <a>404 Error Page</a>
              </Link>
            </li>
            <li>
              <Link href="/other/login">
                <a>Login</a>
              </Link>
            </li>
            <li>
              <Link href="/other/register">
                <a>Register</a>
              </Link>
            </li>
            <li>
              <Link href="/other/terms">
                <a>Terms & Conditions</a>
              </Link>
            </li>
          </ul>
        </li>

        <li className="menu-item-has-children">
          <Link href="/blog/grid-four-columns">
            <a>Blog</a>
          </Link>
          <ul className="mobile-sub-menu">
            <li className="menu-item-has-children">
              <Link href="/blog/grid-four-columns">
                <a>Grids</a>
              </Link>
              <ul className="mobile-sub-menu">
                <li>
                  <Link href="/blog/grid-three-columns">
                    <a>Three Columns</a>
                  </Link>
                </li>
                <li>
                  <Link href="/blog/grid-four-columns">
                    <a>Four Columns</a>
                  </Link>
                </li>
                <li>
                  <Link href="/blog/grid-left-sidebar">
                    <a>Left Sidebar</a>
                  </Link>
                </li>
                <li>
                  <Link href="/blog/grid-right-sidebar">
                    <a>Right Sidebar</a>
                  </Link>
                </li>
                <li>
                  <Link href="/blog/grid-standard-left-sidebar">
                    <a>Standard Left Sidebar</a>
                  </Link>
                </li>
                <li>
                  <Link href="/blog/grid-standard-right-sidebar">
                    <a>Standard Right Sidebar</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-item-has-children">
              <Link href="/blog/grid-four-columns">
                <a>Lists</a>
              </Link>
              <ul className="mobile-sub-menu">
                <li>
                  <Link href="/blog/list-left-sidebar">
                    <a>Left Sidebar</a>
                  </Link>
                </li>
                <li>
                  <Link href="/blog/grid-right-sidebar">
                    <a>Right Sidebar</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-item-has-children">
              <Link href="/blog/post-left-sidebar">
                <a>Single Post</a>
              </Link>
              <ul className="mobile-sub-menu">
                <li>
                  <Link href="/blog/post-left-sidebar">
                    <a>Left Sidebar</a>
                  </Link>
                </li>
                <li>
                  <Link href="/blog/post-right-sidebar">
                    <a>Right Sidebar</a>
                  </Link>
                </li>
                <li>
                  <Link href="/blog/post-slider">
                    <a>Slider Post</a>
                  </Link>
                </li>
                <li>
                  <Link href="/blog/post-audio">
                    <a>Audio Post</a>
                  </Link>
                </li>
                <li>
                  <Link href="/blog/post-video">
                    <a>Video Post</a>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li>
          <Link href="/other/contact-us">
            <a>Contact Us</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MobileMenuNav;

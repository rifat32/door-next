import { useEffect } from "react";
import Link from "next/link";

const MobileCategoryMenuNavTwo = ({ getActiveStatus }) => {
  useEffect(() => {
    const offCanvasNav = document.querySelector(
      "#offcanvas-mobile-category-menu__navigation"
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
      id="offcanvas-mobile-category-menu__navigation"
    >
      <ul>
        <li className="menu-item-has-children">
          <Link href="/shop/grid-left-sidebar">
            <a>Computer</a>
          </Link>
          <ul className="mobile-sub-menu">
            <li className="menu-item-has-children">
              <Link href="/shop/grid-left-sidebar">
                <a>Featured Item</a>
              </Link>
              <ul className="mobile-sub-menu">
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
            <li className="menu-item-has-children">
              <Link href="/shop/grid-left-sidebar">
                <a>Popular Item</a>
              </Link>
              <ul className="mobile-sub-menu">
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
        <li className="menu-item-has-children">
          <Link href="/shop/grid-left-sidebar">
            <a>Mobile & Tablet</a>
          </Link>
          <ul className="mobile-sub-menu">
            <li className="menu-item-has-children">
              <Link href="/shop/grid-left-sidebar">
                <a>Featured Item</a>
              </Link>
              <ul className="mobile-sub-menu">
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
            <li className="menu-item-has-children">
              <Link href="/shop/grid-left-sidebar">
                <a>Popular Item</a>
              </Link>
              <ul className="mobile-sub-menu">
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
            <li className="menu-item-has-children">
              <Link href="/shop/grid-left-sidebar">
                <a>New Item</a>
              </Link>
              <ul className="mobile-sub-menu">
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
        <li className="menu-item-has-children">
          <Link href="/shop/grid-left-sidebar">
            <a>Camera</a>
          </Link>
          <ul className="mobile-sub-menu">
            <li className="menu-item-has-children">
              <Link href="/shop/grid-left-sidebar">
                <a>Featured Item</a>
              </Link>
              <ul className="mobile-sub-menu">
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
            <li className="menu-item-has-children">
              <Link href="/shop/grid-left-sidebar">
                <a>Popular Item</a>
              </Link>
              <ul className="mobile-sub-menu">
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

        <li>
          <Link href="/shop/grid-left-sidebar">
            <a>Accessories</a>
          </Link>
        </li>
        <li>
          <Link href="/shop/grid-left-sidebar">
            <a>Clothing</a>
          </Link>
        </li>
        <li>
          <Link href="/shop/grid-left-sidebar">
            <a>Shoes</a>
          </Link>
        </li>
        <li>
          <Link href="/shop/grid-left-sidebar">
            <a>Watches</a>
          </Link>
        </li>
        <li>
          <Link href="/shop/grid-left-sidebar">
            <a>Headphones</a>
          </Link>
        </li>
        <li>
          <Link href="/shop/grid-left-sidebar">
            <a>Gaming</a>
          </Link>
        </li>
        <li>
          <Link href="/shop/grid-left-sidebar">
            <a>Sports</a>
          </Link>
        </li>
        <li>
          <Link href="/shop/grid-left-sidebar">
            <a>Watches</a>
          </Link>
        </li>
        <li>
          <Link href="/shop/grid-left-sidebar">
            <a>Home Audio & Theater</a>
          </Link>
        </li>
        <li>
          <Link href="/shop/grid-left-sidebar">
            <a>TV & Smart Box</a>
          </Link>
        </li>
        <li>
          <Link href="/shop/grid-left-sidebar">
            <a>Printer</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MobileCategoryMenuNavTwo;

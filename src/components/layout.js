import * as React from "react";
import { Link } from "gatsby";
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
} from "./layout.module.css";

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <title>{pageTitle}</title>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/posts" className={navLinkText}>
              Posts
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/tools" className={navLinkText}>
              Tools
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 class={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;

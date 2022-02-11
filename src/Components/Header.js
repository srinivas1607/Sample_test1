import React from "react";
import classes from "./Header.module.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className={classes.header}>
      <div className={classes.brand}>
        <img
          src="https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK_400x400.png"
          alt="brand"
          width={50}
        />
      </div>
      <ul className={classes.header__nav}>
        <li>
          <img
            src="https://image.shutterstock.com/image-vector/shopping-cart-icon-flat-design-260nw-570153007.jpg"
            width="30"
            alt="cart"
            className={classes.cart}
          />
        </li>
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;

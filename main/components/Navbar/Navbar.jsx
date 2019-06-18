import React from "react";
import Logo from "./Logo";
import styles from "./Navbar.scss";
import Menu from "./Menu";

export default function NavBar() {
  return (
    <div className={styles.container}>
      <Logo />
      <Menu />
    </div>
  );
}

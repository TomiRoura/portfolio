import type { NextPage } from "next";
import styles from ".//Navbar.module.scss";
import Link from "next/link";
import logo from "../src/logo.webp";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const Navbar: NextPage = () => {
  const [navbarActive, setNavbarActive] = useState(false);
  const onClickMenu = () => setNavbarActive(!navbarActive);

  const hamburgerClassnames = [styles.hamburger];
  const dropdownClassnames = [styles.dropdown];
  if (navbarActive) {
    dropdownClassnames.push(styles.dropdownActive);
    hamburgerClassnames.push(styles.hamburgerActive);
  }

  const router = useRouter();
  const homePage = router.pathname === "/";
  const designPage = router.pathname === "/designer";
  const coderPage = router.pathname === "/coder";

  return (
    <main>
      <div className={styles.navbar}>
        <h1 className={styles.mobileLogo}>
          <Image width={30} height={30} src={logo} />
        </h1>
        <div className={styles.navbarLinks}>
          <Link href="/designer">
            <a style={{ opacity: designPage ? "40%" : "100%" }}>designer</a>
          </Link>
          <Link href="/">
            <a style={{ opacity: homePage ? "40%" : "100%" }}>
              <Image
                width={40}
                height={40}
                src={logo}
                className={styles.logo}
              />
            </a>
          </Link>
          <Link href="/coder">
            <a style={{ opacity: coderPage ? "40%" : "100%" }}>coder</a>
          </Link>
        </div>
        <button onClick={onClickMenu} className={hamburgerClassnames.join(" ")}>
          <span />
          <span />
          <span />
        </button>
      </div>
      <div className={dropdownClassnames.join(" ")}>
        <Link href="/">Home</Link>
        <hr color="grey" />
        <Link href="/designer">designer</Link>
        <hr color="grey" />
        <Link href="/coder">coder</Link>
      </div>
    </main>
  );
};

export default Navbar;

import type { NextPage } from 'next';
import styles from './/Navbar.module.scss';
import Link from 'next/link';
import logo from '../src/logo.webp';
import { useState } from 'react';

const Navbar: NextPage = () => {
    const [navbarActive, setNavbarActive] = useState(false);
    const onClickMenu = () => setNavbarActive(!navbarActive);
    return (
        <main>
            <div className={styles.navbar}>

                <div className={styles.navbarLinks}>
                    <h1><Link href="/"><img src={logo.src} className={styles.Logo} /></Link> </h1>
                    <h1 className={styles.homeLink}><Link href="/">home</Link></h1>
                    <h1><Link href="/about">about</Link></h1>
                    <h1><Link href="/portfolio">portfolio</Link></h1>
                </div>
                <button onClick={onClickMenu} className={styles.hamburger}>
                    <span className={styles.hamburgerBar}></span>
                    <span className={styles.hamburgerBar}></span>
                    <span className={styles.hamburgerbar}></span>

                </button>
            </div>
            <div className={navbarActive ? styles.navbarActive : styles.navbar}></div>
        </main>
    )
}

export default Navbar
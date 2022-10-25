import type { NextPage } from 'next';
import styles from './/Navbar.module.scss';
import Link from 'next/link';
import logo from '../src/logo.webp';
import { useState } from 'react';
import Image from 'next/image';

const Navbar: NextPage = () => {
    const [navbarActive, setNavbarActive] = useState(false);
    const onClickMenu = () => setNavbarActive(!navbarActive);

    const hamburgerClassnames = [styles.hamburger]
    const dropdownClassnames = [styles.dropdown]
    if (navbarActive) {
        dropdownClassnames.push(styles.dropdownActive)
        hamburgerClassnames.push(styles.hamburgerActive)
    }



    return (
        <main>
            <div className={styles.navbar}>
                <h1 className={styles.mobileLogo}><Image width={30} height={30} src={logo} /></h1>
                <div className={styles.navbarLinks}>
                    <Link href="/about">about</Link>
                    <Link href="/">
                        <Image width={40} height={40} src={logo} className={styles.logo} />
                    </Link>
                    <Link href="/portfolio">portfolio</Link>
                </div>
                <button onClick={onClickMenu} className={hamburgerClassnames.join(' ')}>
                    <span />
                    <span />
                    <span />
                </button>
            </div>
            <div className={dropdownClassnames.join(' ')}>
                <Link href="/">Home</Link>
                <hr color="grey" />
                <Link href="/about">About</Link>
                <hr color="grey" />
                <Link href="/portfolio">Portfolio</Link>
            </div>

        </main>
    )
}

export default Navbar
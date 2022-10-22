import type { NextPage } from 'next';
import styles from './/Navbar.module.scss';
import Link from 'next/link';
import logo from '../src/logo.webp';

const Navbar: NextPage = () => {
    return (
        <main>
            <div className={styles.navbar}>

                <div className={styles.navbarLinks}>
                    <h1><Link href="/"><img src={logo.src} className={styles.Logo} /></Link> </h1>
                    <h1 className={styles.homeLink}><Link href="/">home</Link></h1>
                    <h1 className={styles.aboutLink}><Link href="/about">about</Link></h1>
                    <h1 className={styles.portfolioLink}><Link href="/portfolio">portfolio</Link></h1>
                </div>
                <button className={styles.hamburger}>
                    <span className={styles.hamburguer_bar}></span>
                    <span className={styles.hamburguer_bar}></span>
                    <span className={styles.hamburguer_bar}></span>
                </button>
            </div>

        </main>
    )
}

export default Navbar
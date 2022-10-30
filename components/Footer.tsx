import type { NextPage } from 'next';
import styles from './/Footer.module.scss';

const Footer: NextPage = () => {
    return (
        <main className={styles.mainFooter}>
            <div className={styles.gradientWhite}></div>
            <div className={styles.footer}>
                <div className={styles.copyright}>Copyright © 2022 Tomas Rodriguez Roura</div>
            </div>
        </main>
    )
}

export default Footer
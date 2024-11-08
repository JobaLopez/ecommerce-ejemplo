import Link from 'next/link';
import styles from './footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer} >
            <div className={styles['info-container']}>
                <h1 className={styles.logo}>EL LOGO DEL FOOTER</h1>
                <nav>
                    <ul className={styles['link-list']}>
                        <li>
                            <Link href={''} className={styles.link}>
                                Sobre nosotros
                            </Link>
                        </li>
                        <li>
                            <Link href={''} className={styles.link}>
                                Política de privacidad
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    )
}
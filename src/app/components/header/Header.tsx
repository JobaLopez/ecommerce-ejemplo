import styles from './header.module.css';

export default function Header() {
    return (
        <header className={styles.header} >
            <div className={styles['info-container']}>
                <h1 className={styles.logo}>EL LOGO</h1>
                <nav>
                    <ul className={styles['button-list']}>
                        <li>
                            <button className={styles.button}>
                                Iniciar sesión
                            </button>
                        </li>
                        <li>
                            <button className={styles.button}>
                                🛒 Carrito
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
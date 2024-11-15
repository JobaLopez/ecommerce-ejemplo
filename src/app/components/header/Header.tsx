import ThemeSwitcher from '../themeSwitcher/ThemeSwitcher';
import styles from './header.module.css';

export default function Header() {
    return (
        <header className="transition-all bg-slate-300 dark:bg-slate-800" >
            <div className={styles['info-container']}>
                <h1 className="font-[700] text-2xl text-[#155253] dark:text-white">EL LOGO</h1>
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
                        <li>
                            <ThemeSwitcher />
                        </li>
                    </ul>
                </nav>

            </div>
        </header>
    )
}
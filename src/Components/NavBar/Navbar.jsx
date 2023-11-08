import styles from './NavBar.module.css'

const NavBar = () => {
    return ( 
        <nav>
            <div className='container'>
                <div className={styles.nav_row}>
                    <a href="" className={styles.logo}>
                        Haircuts<span>&</span>Coloristics
                    </a>
                    <ul className={styles.nav_list}>
                        <li className={styles.item}>
                            <a href="" className={styles.link}>
                               Главная
                            </a>
                        </li>
                        <li className={styles.item}>
                            <a href="" className={styles.link}>
                               Услуги
                            </a>
                        </li>
                        <li className={styles.item}>
                            <a href="" className={styles.link}>
                               Мастера
                            </a>
                        </li>
                        <li className={styles.item}>
                            <a href="" className={styles.link}>
                               Контакты
                            </a>
                        </li>
                    </ul>
                   
                </div>
                <hr className={styles.hr}></hr>
            </div>
        </nav>
     );
}
 
export default NavBar;
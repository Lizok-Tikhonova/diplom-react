import Button from "../UI/Button/Button";
import styles from "./Footer.module.css";
import vk from "./icons8-vk (1).svg"

const Footer = () => {
	return (
		<footer>
			<div className="container">
				<div className={styles.footerContent}>
					<div className={styles.logoSignUp}>
						<a href="!#" className={styles.logo}>
							Haircuts<span>&</span>Coloristics
						</a>
						<Button className={styles.btn}>записаться</Button>
					</div>
					<div className={styles.Contacts}>
						<h2 className={styles.title}>Контакты</h2>
						<p className={styles.desc}>+7(920)-123-45-67</p>
						<p className={styles.desc}>+7(920)-123-30-49</p>
						<p className={styles.desc}>Георгиевская улица д. 39, офис 309</p>
					</div>
					<div className="work">
						<h2 className={styles.title}>Режим работы</h2>
						<p className={styles.desc}>С 10:00 до 21:00 (Пн-Пт)</p>
						<p className={styles.desc}>С 11:00 до 20:00 (Сб-Вс)</p>
					</div>
					<div className="vk">
						<h2 className="title">Я в VK</h2>
						<img src={vk} alt="" className={styles.vk} />
					</div>
				</div>
				{/* <hr className={styles.hr}></hr> */}
			</div>
		</footer>
	);
};

export default Footer;

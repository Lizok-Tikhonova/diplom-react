import style from "./About.module.css"
import comands from './comands.jpg'

const About = () => {
    
    const ItemSlogan = ({number, sloganTitle, sloganText})=>{
        return(
            <li className={style.item}>
                <p className={style.number}>{number}</p>
                <div className={style.text}>
                    <p className={style.sloganTitle}>{sloganTitle}</p>
                    <p className={style.sloganText}>{sloganText}</p>
                </div>
            </li>
        )
    }


    return ( 
        <div className={style.about}>
            <img src={comands} alt="" className={style.comands} />
            <div className={style.slogan}>
                <h2 className={style.title}>Мы делаем людей счастливыми и<br/> уверенными в себе!</h2>
                <hr className={style.hr}/>
                <ul className={style.items}>
                    <ItemSlogan number={'01'} sloganTitle={"ЗДЕСЬ И СЕЙЧАС"} sloganText={"Оформите заявку к любому мастеру"}/>
                    <ItemSlogan number={'02'} sloganTitle={"УВЕРЕННОСТЬ В СЕБЕ"} sloganText={"Обновим образ и предадим уверенность"}/>
                    <ItemSlogan number={'03'} sloganTitle={"МАСТЕРА СВОЕГО ДЕЛА"} sloganText={"Серцифицированные мастера"}/>
                    <ItemSlogan number={'04'} sloganTitle={"БЕЗУПРЕЧНАЯ СТЕРИЛЬНОСТЬ"} sloganText={"Соответствуем СанПи"}/>
                </ul>
                
                <div className={style.titleDown}>
                    <hr className={style.hr}/>
                    <h2 className={style.title2}>Твой шаг к переменам</h2>
                    <hr className={style.hr}/>
                </div>
                
            </div>    
        </div>
     );
}
 
export default About;
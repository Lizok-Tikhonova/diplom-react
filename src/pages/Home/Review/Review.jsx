import React from 'react';
import Button from "../../../Components/UI/Button/Button";
import style from "./Review.module.css"
import girl from "./girl.png"
import vector1 from "./Vector1.svg"
import vector2 from "./Vector2.svg"



const Review = ()=>{
    return(
        <section className={style.review}>
            <h2 className={style.title}>Отзывы</h2>
            <div className={style.reviewWrapper}>
                <img src={vector1} alt="" className={style.veсtor} />
                <div className={style.reviewContent}>
                    <div className={style.people}>
                        <img src={girl} alt="" className={style.img} />
                        <h3 className={style.name}>Стефания Р.</h3>
                    </div>
                    <p className={style.desc}>“Отличное место и превосходный мастер! Индивидуальный подход к каждому. Однозначно всем рекомендую этого мастера”</p>
                    <Button>все отзывы</Button>
                </div>
                <img src={vector2} alt="" className={style.veсtor} />
            </div>
        </section>
    )
}

export default Review
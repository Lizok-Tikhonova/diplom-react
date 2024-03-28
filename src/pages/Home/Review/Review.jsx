import React from 'react';
import Button from "../../../Components/UI/Button/Button";
import style from "./Review.module.css"
import { Link } from 'react-router-dom';
import girl from "./girl.png"
import vector1 from "./Vector1.svg"
import vector2 from "./Vector2.svg"


const ItemReview = ({name, text}) => {
    return(
        <div className={style.ItemReview}>
            <p className={style.name}>{name}</p>
            <p className={style.text}>{text}</p>
        </div>
    )
} 


const Review = ()=>{
    return(
        <section className={style.review}>
            <h2 className={style.title}>Отзывы</h2>
            <div className={style.wraperLink}>
                <Link to={`/reviews`} className={style.link}>Перейти к отзывам</Link>
            </div>
            <div className={style.reviewWrapper}>
                <ItemReview name={'Роман Лебедев'} text={'"Мастер, к которому я обратился, имел большой опыт и профессионализм. Он выслушал мои пожелания и предложил несколько вариантов стрижек. В процессе работы мастер постоянно интересовался моим мнением и давал полезные советы."'}/>
                <ItemReview name={'Ольга Заричная'} text={'"Отличное место и превосходный мастер! Индивидуальный подход к каждому. Однозначно всем рекомендую этого мастера и сама не раз еще сюда приду!"'}/>
                <ItemReview name={'Ольга Косторная'} text={'"Недавно посетил салон-парикмахерскую “Стиль” и хочу поделиться своим впечатлением. Первое, что меня поразило - это уютная атмосфера салона. Интерьер выполнен в современном стиле, а светлые тона создают ощущение простора и комфорта."'}/>
            </div>
        </section>
    )
}

export default Review
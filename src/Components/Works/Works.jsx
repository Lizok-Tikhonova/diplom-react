import style from "./Works.module.css"
import work1 from "./work1.jpg"
import work2 from "./work2.jpg"
import work3 from "./work3.jpg"
import work4 from "./work4.jpg"
import work5 from "./work5.jpg"
import work6 from "./work6.jpg"
import work7 from "./work7.jpg"
import work8 from "./work8.jpg"


const Works = ()=>{
    return(
        <section className={style.ourWorks}>
            <h2 className={style.title}>Наши работы</h2>
            <div className={style.wraperLink}>
                <a href="#" className={style.link}>Перейти в портфолио</a>
            </div>
            
            <div className={style.works}>
                <img src={work1} alt="" className={style.img} />
                <img src={work2} alt="" className={style.img} />
                <img src={work3} alt="" className={style.img} />
                <img src={work4} alt="" className={style.img} />
                <img src={work5} alt="" className={style.img} />
                <img src={work6} alt="" className={style.img} />
                <img src={work7} alt="" className={style.img} />
                <img src={work8} alt="" className={style.img} />
            </div>
        </section>
    )
}

export default Works
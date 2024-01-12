import style from "./Masters.module.css"
import master1 from './master1.jpg'
import master2 from './master2.jpg'
import master3 from './master3.jpg'
import master4 from './master4.jpg'
import master5 from './master5.jpg'

const Master = ({img, description})=>{
    return(
        <div className={style.master}>
            <img src={img} alt="" className={style.img} />
            <p className={style.desc}>{description}</p>
        </div>
    )
}

const Masters = ()=>{
    return(
        <section className={style.comanda}>
            <h1 className={style.title}>Наши мастера</h1>
            <div className={style.masters}>
                <Master img={master1} description={'Инга Романова - эксперт в сфере колористики. Имеет профильное образование, прошла более 10ти курсов повышения квалификации и теперь на все 100 уверена в результате.'}/>
                <Master img={master2} description={'Инга Романова - эксперт в сфере колористики. Имеет профильное образование, прошла более 10ти курсов повышения квалификации и теперь на все 100 уверена в результате.'}/>
                <Master img={master3} description={'Инга Романова - эксперт в сфере колористики. Имеет профильное образование, прошла более 10ти курсов повышения квалификации и теперь на все 100 уверена в результате.'}/>
                <Master img={master4} description={'Инга Романова - эксперт в сфере колористики. Имеет профильное образование, прошла более 10ти курсов повышения квалификации и теперь на все 100 уверена в результате.'}/>
                <Master img={master5} description={'Инга Романова - эксперт в сфере колористики. Имеет профильное образование, прошла более 10ти курсов повышения квалификации и теперь на все 100 уверена в результате. '}/>
            </div>
        </section>
        
    )
}

export default Masters
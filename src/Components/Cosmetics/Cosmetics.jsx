import style from "./Cosmetics.module.css"
import cosm1 from './cosm1.png'
import cosm2 from './cosm2.png'
import cosm3 from './cosm3.png'
import cosm4 from './cosm4.png'

const Cosmetics = () => {
    return ( 
        <div className={style.cosmetics}>
            <img src={cosm1} alt="" className={style.item} />
            <img src={cosm2} alt="" className={style.item} />
            <img src={cosm3} alt="" className={style.item} />
            <img src={cosm4} alt="" className={style.item} />
        </div>
     );
}
 
export default Cosmetics;
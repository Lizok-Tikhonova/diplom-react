import { NavLink } from 'react-router-dom';
import style from './Master.module.css'
import vector from './Vector.svg'

const Master = ({name, img, id}) => {

    return ( 
        <NavLink to={`/masters/${id}`}>
        <div className={style.master}>
            <img src={img} alt="" className={style.img} />
            <div className={style.nameLink}>
                <p className={style.name}>{name}</p>
                <img src={vector} alt="" className={style.triangel} />
            </div>
            
        </div>
        </NavLink>
        );
}
 
export default Master;

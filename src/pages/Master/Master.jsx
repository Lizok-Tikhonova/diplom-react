import { useParams } from "react-router-dom";
import { arrmasters } from "../../helpers/Masters";
import styles from "./Master.module.css"

const Master = () => {
    const idMaster = useParams();
    const master = arrmasters[idMaster.id];

    return ( 
    <main>
        <div className="container">
            <section className="master">
                <h1 className="name">{master.name}</h1>
                <img src={master.img} alt="img" />
            </section>
            <section className="portfolio"></section>
        </div>
        
    </main>
    );
}
 
export default Master;
import Header from "../../Components/Header/Header";
import style from "./Home.module.css"
import About from "../../Components/About/About";
import Servises from "../../Components/Services/Services";
import Cosmetics from "../../Components/Cosmetics/Cosmetics";

const Home = () => {

    return ( 
        <>
            <Header/>
            <main>
                <div className="container">
                    <About />
                    <Servises/>
                    <Cosmetics/>
                </div>
            </main>
        </>
        
     );
}
 
export default Home;
import Header from "../../Components/Header/Header";
import style from "./Home.module.css"
import About from "../../Components/About/About";
import Servises from "../../Components/Services/Services";
import Cosmetics from "../../Components/Cosmetics/Cosmetics";
import Masters from "../../Components/Masters/Masters";
import Advantages from "../../Components/Advantages/Advantages";

const Home = () => {

    return ( 
        <>
            <Header/>
            <main>
                <div className="container">
                    <About />
                    <Servises/>
                    <Cosmetics/>
                    <Masters/>
                    <Advantages/>
                </div>
            </main>
        </>
        
     );
}
 
export default Home;
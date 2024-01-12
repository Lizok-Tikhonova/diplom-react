import Header from "../../Components/Header/Header";
import style from "./Home.module.css"
import About from "./About/About";
import Servises from "./Services/Services";
import Cosmetics from "./Cosmetics/Cosmetics";
import Masters from "./Masters/Masters";
import Advantages from "./Advantages/Advantages";
import Works from "./Works/Works";
import Review from "../../Components/Review/Review";

const Home = () => {

    return ( 
        <>
            <Header/>
            <main>
                <div className="container">
                    <About />
                    <Servises/>
                    <Cosmetics/>
                    {/* <Masters/> */}
                    <Advantages/>
                    <Works/>
                    <Review/>
                </div>
            </main>
        </>
        
     );
}
 
export default Home;
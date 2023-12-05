import Header from "../../Components/Header/Header";
import style from "./Home.module.css"
import About from "../../Components/About/About";
import Servises from "../../Components/Services/Services";
import Cosmetics from "../../Components/Cosmetics/Cosmetics";
import Masters from "../../Components/Masters/Masters";
import Advantages from "../../Components/Advantages/Advantages";
import Works from "../../Components/Works/Works";
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
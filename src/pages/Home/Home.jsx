import Header from "../../Components/Header/Header";
import style from "./Home.module.css"
import About from "../../Components/About/About";
import Servises from "../../Components/Services/Services";

const Home = () => {

    return ( 
        <>
            <Header/>
            <main>
                <div className="container">
                    <About />
                    <Servises/>
                </div>
            </main>
        </>
        
     );
}
 
export default Home;
import './App.css';
import NavBar from './Components/NavBar/Navbar';
import Home from './pages/Home/Home';
import Footer from './Components/Footer/Footer';
import Masters from './pages/Masters/Masters';

function App() {
  return (
    <div className="App">
      <NavBar />

      {/* <Home /> */}
      <Masters/>

      <Footer/>
      
      
    </div>
  );
}

export default App;

import './App.css';
import NavBar from './Components/NavBar/Navbar';
import Home from './pages/Home/Home';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />

      <Home />

      <Footer/>
      
    </div>
  );
}

export default App;

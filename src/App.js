import './App.css';
import NavBar from './Components/NavBar/Navbar';

import Header from './Components/Header/Header';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <Header/> */}
      <Home />
      
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import './style.css';
import NavBar from './components/molecules/NavBar';
import NavItems from './components/atoms/NavItems';
import Home from './pages/home';
import Layout from './pages/Layout';
import Reservation from './pages/Reservation';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Footer from './components/molecules/Footer';
import ContactUs from './pages/ContactUs';
import Breakfast from './pages/Breakfast';

function App(){
  return (

      <div className="App">
      <NavBar/>
      <Footer/>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/" element={<Layout/>}/>
        <Route path="Reservation" element={<Reservation />} />
        <Route path="ContactUs" element={<ContactUs />} />
        <Route path="Breakfast" element={<Breakfast />} />
      </Routes>
      </BrowserRouter>
    </div>


  );

  }
export default App;

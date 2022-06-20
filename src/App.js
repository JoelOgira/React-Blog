import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Create from './Components/Create';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import ErrorPage from './Components/ErrorPage';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const App = () => {  

  return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Routes>      
              <Route path='/' element={<Home />} />
              <Route path='/create' element={<Create />} />
              <Route path='/about' element={<About />} />     
              <Route path='/contact' element={<Contact />} />
              <Route path='*' element={<ErrorPage />}/>     
            </Routes>
            <Footer />
          </div>
        </div>
      </Router>
  );
}

export default App;

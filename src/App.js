import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';

const App = () => {  

  return (
    <div className="App">
        <div className="content">
          <Navbar />
          <div className="container">
            <Home />
            <Footer />
          </div>
        </div>
    </div>
  );
}

export default App;

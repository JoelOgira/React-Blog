import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import {ReactRouter as Router, Route, Switch} from 'react-router-dom';

const App = () => {  

  return (
    <Router>
      <div className="App">
        <div className="content">
          <Navbar />
          <div className="container">
            <Home />
            <Footer />
          </div>
        </div>
    </div>
    </Router>
  );
}

export default App;

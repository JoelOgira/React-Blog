// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';

const App = () => {  

  return (
    <div className="App">
        <div className="content">
          <Navbar />
          <div className="container">
            <Home />
          </div>
        </div>
    </div>
  );
}

export default App;

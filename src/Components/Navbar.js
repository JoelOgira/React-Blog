import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <div className="navbar navbar-expand-sm py-4 navbar">
            <div className="container">
                <div className="navbar-brand">
                    <Link to="/" style={{paddingBottom: '10px'}}>Better Health</Link>
                </div>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/blogs" className="nav-link">Blogs</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link">Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
 
export default Navbar;
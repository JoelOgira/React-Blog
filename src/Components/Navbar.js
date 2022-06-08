const Navbar = () => {
    return ( 
        <div className="navbar navbar-expand-sm py-4 navbar">
            <div className="container">
                <div className="navbar-brand">
                    <a href="#/">Better Health</a>
                </div>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a href="/" className="nav-link">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="/create" className="nav-link">New Blog</a>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link">About</a>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
 
export default Navbar;
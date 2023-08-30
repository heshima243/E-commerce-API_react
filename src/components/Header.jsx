import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Header = () => {
  return (

    <header>
    <nav className="navbar navbar-expand-md navbar-dark bg-dak">
      <div className="container">
     
        <Link className="title"  to="/">J-Store</Link>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-lik" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-lik" to="/Contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
  );
};

export default Header;

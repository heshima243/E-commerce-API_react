import Home from "./Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Add from "./components/Add";
import NoFound from "./components/NoFound";
import Header from "./components/Header";
import ProductDetail from './components/ProductDetail'
import Update from './components/Update'
import Footer from "./components/Footer";
import Contact from "./components/Contact";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/addPost" element={<Add />} />
        <Route exact path="/contact" element={<Contact/>} />
        <Route exact path="/product/:id" element={<ProductDetail />} />
        <Route exact path="/update/:id" element={<Update/>}/>
        <Route path="*" element={<NoFound />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;

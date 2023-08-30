import { Link } from "react-router-dom";

const Contact = () => {
    return ( 
      <div className="contact-page">
      <div className="contact-container">
        <div className="contact-content">
          <img src="/julio.jfif" alt="Ma Photo" />
          <h1>Heshima_Lunyungu_julien</h1>
          <p style={{'color':'green'}}>Passionate about web development and technology.</p>
          <div className="social-links">
            <Link to="https://github.com/dashboard" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></Link>
            <Link to="lien_vers_twitter" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></Link>
            <Link to="https://www.linkedin.com/in/julien-heshima-2b0770201/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></Link>
          </div>
        </div>
      </div>
    </div>
    
     );
}
 
export default Contact;
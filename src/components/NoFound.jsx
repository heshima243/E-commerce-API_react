import { Link } from "react-router-dom";

const NoFound = () => {

    const linkStyle = {
        textDecoration: 'underline',
        color:'green',
      };

    return ( <div>
        <h5 style={{'textAlign':'center',"padding":'50px'}}>Page not Found
        <Link style={linkStyle}> return home page</Link></h5>
        
    </div> );
}
 
export default NoFound;
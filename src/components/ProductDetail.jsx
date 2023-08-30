import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useFetch from "./useFetch";
import '../CSS/detaille.css'

const ProductDetail = ({ searchProduct, filterProduct }) => {
  // state
  let navigate = useNavigate();

  const { id } = useParams();

  const {
    data: products,
    isloading,
    error,
  } = useFetch("https://fakestoreapi.com/products/" + id);

  const handleDelete = () => {
    fetch("https://fakestoreapi.com/products/" + id, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
      console.log("DELETE SUCCESS");
    });
  };

  return (
    <div>
      {error && <h1>{error}</h1>}
      {isloading && (
        <div class="loading-container">
          <div class="loading-text">Loading...</div>
        </div>
      )}

      {
        <div className="article">
          <div className="details">
            <div>
              <h1>{products.title}</h1>
            </div>
            <div>
              <img  src={products.image} alt={products.title} />
            </div>
            <span className="link">
              <h3 style={{'background':'green','textAlign':'center','color':'white'}} >{products.category}</h3>
            </span>
            <div>
              <p className="link">
                <h3 style={{'color':'blue'}} className="link">{products.price}$</h3>
              </p>
            </div>
            <div className="link">
              <p className="link">
                <h3>{products.description}$</h3>
              </p>
            </div>
            {/* <button onClick={handleDelete}>Delete</button>
            <p>
              <Link to={`/update/${products.id}`}>Update</Link>
            </p> */}
          </div>
        </div>
      }
    </div>
  );
};

export default ProductDetail;

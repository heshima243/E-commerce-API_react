import { useParams, Link, useNavigate } from "react-router-dom";
import useFetch from "./useFetch";
import '../CSS/detaille.css';
import { useEffect, useState } from "react";

const ProductDetail = ({ searchProduct, filterProduct }) => {
  // state
  let navigate = useNavigate();

  const { id } = useParams();
  const [currentId, setCurrentId] = useState(null); // État pour stocker l'ID actuel

  // Appel à useFetch directement dans le composant
  const {
    data: products,
    isloading,
    error,
  } = useFetch("https://fakestoreapi.com/products/" + id);

  useEffect(() => {
    // Vérifier si l'ID a changé
    if (id !== currentId) {
      // Mettre à jour l'ID actuel
      setCurrentId(id);
    }
  }, [id, currentId]); // Utilisez id et currentId comme dépendances

  // Exécuter cette logique lorsque l'ID change
  useEffect(() => {
    if (currentId) {
      // Faites quelque chose avec les données, l'indicateur de chargement ou l'erreur ici
    }
  }, [currentId]); // Utilisez currentId comme dépendance

  window.scrollTo(0, 0)

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
        <div className="loading-container">
          <div className="loading-text">Loading...</div>
        </div>
      )}

      {
        <div className="article">
          <div className="details">
            <div>
              <h1 style={{ textAlign: "justify" }}>{products.title}</h1>
            </div>
            <div>
              <img style={{
                  height: "400px",
                  justifyContent: "center",
                  alignContent: "center",
                  margin: "auto",
                  alignItems:"center",
                  display:"flex"
                }} src={products.image} alt={products.title} />
            </div>
            <span className="link">
              <h3 style={{ background: 'green', textAlign: 'center', color: 'white' }}>{products.category}</h3>
            </span>
            <div>
              <p className="link">
                <h3 style={{ color: 'blue' }} className="link">{products.price}$</h3>
              </p>
            </div>
            <div className="link">
              <p className="link">
                <h3 style={{ textAlign: "justify" }}>{products.description}$</h3>
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

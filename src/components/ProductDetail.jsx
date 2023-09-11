import { useParams, Link, useNavigate } from "react-router-dom";
import useFetch from "./useFetch";
import '../CSS/detaille.css';
import { useEffect } from "react"; // Plus besoin de useState ici

const ProductDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // Utilisation du hook useFetch directement dans le composant
  const { data: productData, isloading, error } = useFetch("https://fakestoreapi.com/products/" + id);

  // Utilisez simplement productData, isloading et error ici sans useEffect supplémentaire

  window.scrollTo(0, 0);

  const handleDelete = () => {
    fetch("https://fakestoreapi.com/products/" + id, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
      console.log("DELETE SUCCESS");
    });
  };

  // Si le produit n'est pas encore chargé, affichez un indicateur de chargement
  if (isloading) {
    return (
      <div className="loading-container">
        <div className="loading-text">Loading...</div>
      </div>
    );
  }

  // Si une erreur s'est produite, affichez un message d'erreur
  if (error) {
    return <h1>{error}</h1>;
  }

  // Si les données du produit sont disponibles, affichez-les
  return (
    <div className="article">
      <div className="details">
        <div>
          <h1 style={{ textAlign: "justify" }}>{productData.title}</h1>
        </div>
        <div>
          <img
            style={{
              height: "400px",
              justifyContent: "center",
              alignContent: "center",
              margin: "auto",
              alignItems: "center",
              display: "flex"
            }}
            src={productData.image}
            alt={productData.title}
          />
        </div>
        <span className="link">
          <h3 style={{ background: 'green', textAlign: 'center', color: 'white' }}>{productData.category}</h3>
        </span>
        <div>
          <p className="link">
            <h3 style={{ color: 'blue' }} className="link">{productData.price}$</h3>
          </p>
        </div>
        <div className="link">
          <p className="link">
            <h3 style={{ textAlign: "justify" }}>{productData.description}$</h3>
          </p>
        </div>
        {/* Ajoutez d'autres éléments ici, comme le bouton de suppression ou de mise à jour */}
      </div>
    </div>
  );
};

export default ProductDetail;

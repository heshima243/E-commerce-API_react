import { useParams, Link, useNavigate } from "react-router-dom";
import useFetch from "./useFetch";
import '../CSS/detaille.css';
import { useEffect, useState } from "react";

const ProductDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // Utilisation du hook useFetch directement dans le composant
  const { data: productData, isloading, error } = useFetch("https://fakestoreapi.com/products/" + id);

  // Utilisez productData, isloading et error ici

  const [newProductData, setNewProductData] = useState(null);

  useEffect(() => {
    // Vérifier si productData est null ou non défini
    if (productData === null) {
      // Les données du produit n'ont pas encore été chargées, effectuez une nouvelle requête
      fetch("https://fakestoreapi.com/products/" + id)
        .then((res) => {
          if (!res.ok) {
            throw Error("Sorry there is an error");
          }
          return res.json();
        })
        .then((data) => {
          // Mettez à jour productData avec les nouvelles données
          // Assurez-vous de ne pas entrer dans une boucle infinie ici
          // en supprimant le deuxième argument de useEffect ou en utilisant une autre condition
          // pour ne déclencher la requête qu'une seule fois
          // Une fois les données chargées, elles seront gérées par useFetch
          // Si nécessaire, vous pouvez également gérer l'erreur ici
          setNewProductData(data);
        })
        .catch((error) => {
          console.error(error.message);
          // Gérez l'erreur ici si nécessaire
        });
    }
  }, [id, productData]);

  const product = newProductData || productData;

  window.scrollTo(0, 0);

  const handleDelete = () => {
    fetch("https://fakestoreapi.com/products/" + id, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
      console.log("DELETE SUCCESS");
    });
  };

  // Affichez le contenu du produit ici
  return (
    <div className="article">
      <div className="details">
        <div>
          <h1 style={{ textAlign: "justify" }}>{product.title}</h1>
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
            src={product.image}
            alt={product.title}
          />
        </div>
        <span className="link">
          <h3 style={{ background: 'green', textAlign: 'center', color: 'white' }}>{product.category}</h3>
        </span>
        <div>
          <p className="link">
            <h3 style={{ color: 'blue' }} className="link">{product.price}$</h3>
          </p>
        </div>
        <div className="link">
          <p className="link">
            <h3 style={{ textAlign: "justify" }}>{product.description}$</h3>
          </p>
        </div>
        {/* Ajoutez d'autres éléments ici, comme le bouton de suppression ou de mise à jour */}
      </div>
    </div>
  );

  // Reste du code...
};

export default ProductDetail;

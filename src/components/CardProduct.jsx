import React, { useState } from "react";
import Modal from "react-modal";
import modalPopup from "../CSS/modalPopup.css";
import { Link } from "react-router-dom";

Modal.setAppElement("#root"); // Doit être appelé pour que React-Modal fonctionne correctement

const CardProduct = ({ searchProduct, filterProduct, products }) => {
  window.scrollTo(0, 0);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="products">
      <h2>Selection of Available Merchandise</h2>
      <div className="products-grid">
        {searchProduct !== "" && filterProduct.length === 0 ? (
          <div className="empty">
            <h3>No search found</h3>
          </div>
        ) : (
          (filterProduct.length > 0 ? filterProduct : products).map(
            (product) => (
              <article className="product" key={product.id}>
                <img src={product.image} alt={product.title} />
                <Link to={`/product/${product.id}`}>
                  <h2 className="titre">{product.title}</h2>
                </Link>
                <span className="price">{product.price}$</span>
                <button onClick={openModal}>Add to Cart</button>
              </article>
            )
          )
        )}
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Add to Cart Modal"
        className="custom-modal" // Appliquez vos styles CSS personnalisés ici
      >
        <h2>Product Added to Cart</h2>
        <p>Your selected product has been added to your cart.</p>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </section>
  );
};

export default CardProduct;

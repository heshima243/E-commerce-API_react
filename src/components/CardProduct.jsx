import { Link } from "react-router-dom";

const CardProduct = ({ searchProduct, filterProduct, products }) => {
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
                  <h2  className="titre">{product.title}</h2>
                </Link>
                <span className="price">{product.price}$</span>
                <button>Ajouter au panier</button>
              </article>
            )
          )
        )}
      </div>
    </section>
  );
};

export default CardProduct;

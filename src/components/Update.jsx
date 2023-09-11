import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useFetch from "./useFetch";

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    data: products,
    Isloading,
    error,
  } = useFetch("https://fakestoreapi.com/products/" + id);

  window.scrollTo(0,0)

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    if (products) {
      setTitle(products.title);
      setPrice(products.price);
      setDescription(products.description);
      setImage(products.image);
      setCategory(products.category);
    }
  }, [products]);

  const handleUpdate = (e) => {
    e.preventDefault();

    const updatedproducts = { title, price, description, image, category };

    fetch("https://fakestoreapi.com/products/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      price: JSON.stringify(updatedproducts),
    }).then(() => {
      console.log("Update success");
      navigate("/products/" + id);
    });
  };

  // ... le reste du code de votre composant

  return (
    <div>
      {error && <div style={{ color: "red" }}>{error}</div>}
      {Isloading && <div>Is loading</div>}
      {products && (
        <form
          onSubmit={handleUpdate}
          style={{ maxWidth: "500px", margin: "0 auto" }}
        >
          <div className="form-group">
            <input
              type="text"
              name="title"
              id="title"
              className="form-controll"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div data="form-group">
            <input
              type="text"
              name="caption"
              id="caption"
              className="form-controll"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className="form-group file-area">
            <input
              type="text"
              name="caption"
              id="caption"
              className="form-controll"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="form-group file-area">
            <input
              type="text"
              name="images"
              id="images"
              required="required"
              multiple="multiple"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              name="caption"
              id="caption"
              className="form-controll"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>

          {!Isloading && (
            <button type="submit" className="btn btn-primary">
              Update
            </button>
          )}
          {Isloading && (
            <button disabled type="submit" className="btn btn-primary">
              On Loading
            </button>
          )}
        </form>
      )}
    </div>
  );
};

export default Update;

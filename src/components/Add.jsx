import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Add = () => {

    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    let [isLoading, setIsLoading] = useState();

    // let navigate = useNavigate()

   

    const handleSubmit =(e)=>{
        e.preventDefault()

        const product = {title,price,description,image, category}
        console.log(product);
        
        setIsLoading(true)

        fetch('https://fakestoreapi.com/products',{

        method:'POST',
        // headers :{'Content-Type':'application/json'},
        body: JSON.stringify(product)
    
        }).then(()=>{
        console.log('success');
        setIsLoading(false)
        
        // navigate('/')
      })
      
    }


  return (
    <div>
      <form action onSubmit={handleSubmit}>
        <h1>
          <strong>File upload</strong> with style and pure CSS
        </h1>

        <div className="form-group">
          
          <input type="text" name="title"
           id="title" className="form-controll"
           value={title} 
           onChange={(e)=>setTitle(e.target.value)}/>
        </div>
        <div data="form-group">
        
        <input
          type="text"
          name="caption"
          id="caption"
          className="form-controll"
          value={price}
          onChange={(e)=>setPrice(e.target.value)}
        />
      </div>
      
        
      
      
        <div className="form-group file-area">
          
         <input
          type="text"
          name="caption"
          id="caption"
          className="form-controll"
          value={description}
          onChange={(e)=>setDescription(e.target.value)}
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
            onChange={(e)=>setImage(e.target.value)}
          />
        
        </div> 

        <div className="form-group">
        
          <input
            type="text"
            name="caption"
            id="caption"
            className="form-controll"
            value={category}
            onChange={(e)=>setCategory(e.target.value)}
          />
        </div>

        <div className="form-group">
        {!isLoading &&  <button type="submit">Upload images</button>}
          {isLoading && <button disabled type="submit" className="btn btn-primary">
        On Loading
      </button>}
        </div>
      </form>
    </div>
  );
};

export default Add;

const SearchBar = ({ searchProduct, handleSearch }) => {
  window.scrollTo(0,0)
  return (

  
    <div className="container mt-5">
    <div className="row">
      <div className="col-md-8 mx-auto">
        <form className="search-form">
          <input type="text" className="form-control search-input" placeholder="Search product..."
           value={searchProduct}
           onChange={handleSearch}/>
          {/* <button className="btn btn-light search-button" type="submit">Rechercher</button> */}
        </form>
      </div>
    </div>
  </div>
       
     
   
  );
};

export default SearchBar;

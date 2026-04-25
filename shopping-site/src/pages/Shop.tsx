import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

const Shop = () => {
    const[items, setItems] = useState<any[]>([]);;
    useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        console.log(data);
      });
  }, []); 
    return(
        <div className="shop">
        <h1 className="shop-title">Shop Products</h1>

        <div className="product-grid">
        {items.map((product) => (
          <div key={product.id} className="product-card">

            <img width='200px' height='200px' src={product.image} alt={product.title} />

            <h3>{product.title}</h3>
            <p className="price">₹{product.price}</p>

            <Link to={`/product/${product.id}`}>
              <button>Add to Cart</button>
            </Link>

          </div>
        ))}
      </div>

      
    </div>
    )
}
export default Shop

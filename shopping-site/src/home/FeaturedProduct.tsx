const FeaturedProduct = () => {
    return (
        <section className="products">
        <h2>Featured Products</h2>
        <div className="product-container">
            <div className="product-card">
                <img src="https://via.placeholder.com/150" alt="Product" />
                <h3>Product Name</h3>
                <p>₹999</p>
                <button>Add to Cart</button>
            </div>

            <div className="product-card">
                <img src="https://via.placeholder.com/150" alt="Product" />
                <h3>Product Name</h3>
                <p>₹1299</p>
                <button>Add to Cart</button>
            </div>

            <div className="product-card">
                <img src="https://via.placeholder.com/150" alt="Product" />
                <h3>Product Name</h3>
                <p>₹799</p>
                <button>Add to Cart</button>
            </div>
        </div>
    </section>
    )
}

export default FeaturedProduct;
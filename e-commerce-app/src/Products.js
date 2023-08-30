const Products = () => {

    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

    return (
        <div className="products">
            <div className="products-card">
                {arr.map((a, i) => (
                    <div className="card-items" key={i}>
                        <div className="bg-img">
                            <p>Sale!</p>
                            <div>
                            <button>Add to Cart</button>
                            </div>
                        </div>
                        <div className="card-desc">
                            <p>Chrome Watch</p>
                            <p>*****</p>
                            <p>$399.00</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;
const ProductCetagoryCard = () => {

    const arr = ["Headphones", "Smart Phones", "Laptops", "Smart Watches", "Tablets"]

    return (
        <div className="product-cetagory-card">
            <div className="card-container">
                {arr.map((b, i) => (
                    <div className="card">
                        <div style={{ backgroundImage: "url(https://xtratheme.com/elementor/gadgets/wp-content/uploads/sites/108/2023/04/cat3-1.jpg)" }} className="card-list" key={i}>
                        </div>
                        <div className="text-box">
                            <strong>{b}</strong>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
}

export default ProductCetagoryCard;
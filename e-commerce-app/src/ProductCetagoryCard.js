import { useState } from 'react';

const ProductCetagoryCard = () => {
    const [cetagory] = useState([
        {category: "Headphones", urlImage: "https://xtratheme.com/elementor/gadgets/wp-content/uploads/sites/108/2023/04/pr3-1-600x600.jpg", id: 1},
        {category: "Smart Phones", urlImage: "https://xtratheme.com/elementor/gadgets/wp-content/uploads/sites/108/2023/04/pr9-1-600x600.jpg", id: 2},
        {category: "Laptops", urlImage: "https://xtratheme.com/elementor/gadgets/wp-content/uploads/sites/108/2023/04/pr10-1-600x600.jpg", id: 3},
        {category: "Smart Watches", urlImage: "https://xtratheme.com/elementor/gadgets/wp-content/uploads/sites/108/2021/10/gold-watch-1-600x600.png", id: 4},
        {category: "Tablets", urlImage: "https://xtratheme.com/elementor/gadgets/wp-content/uploads/sites/108/2023/04/pr2-1-600x600.jpg", id: 5}
    ]);

    return (
        <div className="product-cetagory-card">
            <div className="card-container">
                {cetagory.map(value => (
                    <div className="card" key={value.id}>
                        <div style={{ backgroundImage: `url(${value.urlImage})` }} className="card-list">
                        </div>
                        <div className="text-box">
                            <strong>{value.category}</strong>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
}

export default ProductCetagoryCard;
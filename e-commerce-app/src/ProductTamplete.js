import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const handleCart = ({ id, productName, imageUrl, prize }) => {
    const data = { id, productName, imageUrl, prize }
    fetch('http://localhost:9999/cart', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
}

const ProductTamplete = ({ id, imageUrl, inStock, productName, ratings, prize }) => {

    return (
        <div className="card-items" key={id}>

            <div style={{
                backgroundImage: `url(${imageUrl})`
            }} className="bg-img">
                {!inStock && <p>Sale!</p>}
                <button onClick={() => handleCart({ id, productName, imageUrl, prize })}>Add to Cart</button>
            </div>
            <Link to={`/productdetails/${id}`}>
                <div className="card-desc">
                    <p className="title">{productName}</p>
                    <p className="star">{ratings}</p>
                    <p className="prize">$ {prize}.00</p>
                </div>
            </Link>
        </div>
    );
}

export default ProductTamplete;
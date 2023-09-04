import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const ProductTamplete = ({ id, imageUrl, inStock, productName, ratings, prize }) => {
    return (
        <div className="card-items">
            <Link to={`/productdetails/${id}`}>
                <div style={{
                    backgroundImage: `url(${imageUrl})`
                }} className="bg-img">
                    {!inStock && <p>Sale!</p>}
                    <button>Add to Cart</button>
                </div>

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
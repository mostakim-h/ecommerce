import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import useFetch from './useFetch';

const Products = () => {

    const { data } = useFetch('http://localhost:9000/product')

    return (
        <div className="products">
            <div className="products-card">
                {data &&  data.map((value) => (

                    <div className="card-items" key={value.id}>
                        <Link to={`/productdetails/${value.id}`}>
                            <div style={{
                                backgroundImage: `url(${value.imageUrl})`
                            }} className="bg-img">

                                {!value.inStock && <p>Sale!</p>}

                                <button>Add to Cart</button>

                            </div>

                            <div className="card-desc">
                                <p className="title">{value.productName}</p>
                                <p className="star">{value.ratings}</p>
                                <p className="prize">$ {value.prize}.00</p>
                            </div>
                        </Link>
                    </div>
                ))}
                <button className="see-all-product-btn">See all Products</button>
            </div>
        </div>
    );
}

export default Products;
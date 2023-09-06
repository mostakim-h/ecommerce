import useFetch from './useFetch';
import ProductTamplete from './ProductTamplete';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Products = () => {

    const { data } = useFetch('http://localhost:9000/product')

    return (
        <div className='products'>
            <div className="products-card">
                {data && data.map((value) => (
                    <ProductTamplete key={value.id} id={value.id} imageUrl={value.imageUrl} inStock={value.inStock} productName={value.productName} ratings={value.ratings} prize={value.prize} />
                ))}

            </div>
            <div className='see-all-btn-container'>
                <Link to="/shop" className="see-all-product-btn">See all Products</Link>
            </div>
        </div>
    );
}

export default Products;
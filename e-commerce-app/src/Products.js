import useFetch from './useFetch';
import ProductTamplete from './ProductTamplete';

const Products = () => {

    const { data } = useFetch('http://localhost:9000/product')

    return (
        <div className='products'>
            <div className="products-card">
            {data && data.map((value) =>(
            <ProductTamplete id={value.id} imageUrl={value.imageUrl} inStock={value.inStock} productName={value.productName} ratings = {value.ratings} prize={value.prize} />
            ))}
            <button className="see-all-product-btn">See all Products</button>
        </div>
        </div>
    );
}

export default Products;
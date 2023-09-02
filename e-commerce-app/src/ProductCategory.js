
import useFetch from './useFetch';
import ProductTamplete from './ProductTamplete';
import { useState } from 'react';
const ProductCategory = () => {

    const { data } = useFetch('http://localhost:9000/product')

    const [active, setActive] = useState(0)
    const [filterValue, setFilterValue] = useState(null)

    const handleClass = (i, e) => {
        setActive(i)
        setFilterValue(e.target.value)
    }

    return (
        <div className="product-category">

            <div className="buttons-of-category">
                <button value="headphone" className={active === 1 ? "buttonActive" : ""} onClick={(e) => handleClass(1, e)}>Headphones</button>
                <button value="phone" className={active === 2 ? "buttonActive" : ""} onClick={(e) => handleClass(2, e)}>Smart Phones</button>
                <button value="laptop" className={active === 3 ? "buttonActive" : ""} onClick={(e) => handleClass(3, e)}>Laptops</button>
                <button value="watch" className={active === 4 ? "buttonActive" : ""} onClick={(e) => handleClass(4, e)}>Smart Watches</button>
                <button value="tablet" className={active === 5 ? "buttonActive" : ""} onClick={(e) => handleClass(5, e)}>Tablets</button>
                <button value="gaming" className={active === 6 ? "buttonActive" : ""} onClick={(e) => handleClass(6, e)}>Gaming Tools</button>
                {filterValue && <p>Filtering on: <span value="" onClick={(e) => handleClass(0, e)}>reset</span></p>}
            </div>

            <div className='products'>
                <div className="products-card">
                    {data && !filterValue && data.map((value) => (
                        <ProductTamplete id={value.id} imageUrl={value.imageUrl} inStock={value.inStock} productName={value.productName} ratings={value.ratings} prize={value.prize} />
                    ))}

                    {data && data.filter((value) => value.category !== filterValue ? value.category === filterValue : value).map((value) => (
                        <ProductTamplete id={value.id} imageUrl={value.imageUrl} inStock={value.inStock} productName={value.productName} ratings={value.ratings} prize={value.prize} />
                    ))}
                </div>
            </div>

        </div>
    );
}

export default ProductCategory;
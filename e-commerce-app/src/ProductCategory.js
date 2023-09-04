
import useFetch from './useFetch';
import ProductTamplete from './ProductTamplete';
import { useState } from 'react';
const ProductCategory = () => {

    const { data } = useFetch('http://localhost:9000/product')
    const [active, setActive] = useState(0)
    const [filterValue, setFilterValue] = useState('')

    const handleClass = (i, e) => {
        setActive(i)
        setFilterValue(e.target.value)
    }

    return (
        <div className="product-category">
            <div className="buttons-of-category">
                {data && data.map((v, i) => (
                    <button key={i} value={v.category} className={active === i+1 ? "buttonActive" : ""} onClick={(e) => handleClass(i+1, e)}>{v.category}</button>
                ))}
                {filterValue && <p>Filtering <span value="" onClick={(e) => handleClass(0, e)}>reset</span></p>}
            </div>

            <div className='products'>
                <div className="products-card">
                    {data && !filterValue && data.map((value) => (
                        <ProductTamplete key={value.id} id={value.id} imageUrl={value.imageUrl} inStock={value.inStock} productName={value.productName} ratings={value.ratings} prize={value.prize} />
                    ))}

                    {data && data.filter((value) => value.category !== filterValue ? value.category === filterValue : value).map((value) => (   
                        <ProductTamplete key={value.id} id={value.id} imageUrl={value.imageUrl} inStock={value.inStock} productName={value.productName} ratings={value.ratings} prize={value.prize} />
                    ))}
                </div>
            </div>

        </div>
    );
}

export default ProductCategory;
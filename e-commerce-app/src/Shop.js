import useFetch from './useFetch';
import { useEffect, useState } from 'react';
import ProductTamplete from './ProductTamplete';

const Shop = () => {

    const { data } = useFetch('http://localhost:9000/product')

    const [sorting, setSorting] = useState()
    const [datas, setDatas] = useState(data)

    useEffect(() => {
        setDatas(data)
    }, [data])

    const handlesorting = (e) => {
        setSorting(e.target.value)
        if (datas === null) {
            setDatas(data)
        } else if (sorting === 'lowtohigh') {
            setDatas(data.sort((a, b) => {
                return a.prize - b.prize
            }))
        } else if (sorting === 'hightolow') {
            setDatas(data.sort((a, b) => {
                return b.prize - a.prize
            }))
        } else if (sorting === 'defaultsorting') {
            setDatas(data)
        }
    }

    return (
        <div className="shop">
            <div className="sorting-products">
                <select onChange={(e) => handlesorting(e)} name="" id="">
                    <option value="defaultsorting">Default Sorting</option>
                    <option value="lowtohigh">Sort by High to Low</option>
                    <option value="hightolow">Sort by Low to High</option>
                </select>
            </div>
            <div className="products">
                <div className="products-card">
                    {datas && datas.map((value) => (
                        <ProductTamplete key={value.id} id={value.id} imageUrl={value.imageUrl} inStock={value.inStock} productName={value.productName} ratings={value.ratings} prize={value.prize} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Shop;
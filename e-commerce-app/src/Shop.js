import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import useFetch from './useFetch';
import { useEffect, useState } from 'react';

const Shop = () => {

    const { data } = useFetch('http://localhost:9000/product')

    const [sorting, setSorting] = useState()
    const [datas, setDatas] = useState(data)

    useEffect(()=>{
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
        }else if(sorting === 'hightolow'){
            setDatas(data.sort((a, b) => {
                return b.prize - a.prize
            }))
        }else if(sorting === 'defaultsorting'){
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
                </div>
            </div>
        </div>
    );
}

export default Shop;
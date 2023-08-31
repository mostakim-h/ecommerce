import { useParams } from "react-router-dom/cjs/react-router-dom";
import useFetch from "./useFetch";
import { useState } from "react";

const ProductDetails = () => {

    const { id } = useParams();
    const { data } = useFetch('http://localhost:9000/product/' + id)
    const [count, setCount] = useState(1)

    const handleqty = (operatore) => {
        if (operatore === '-' && count > 1) {
            setCount(count - 1)
        } else if (operatore === '+' && count < 99) {
            setCount(count + 1)
        }
    }

    return (
        <div className="product-details">

            {data &&
                <div className="main-details">
                    <div className="product-img">
                        <img src={data.imageUrl} alt="" />
                    </div>
                    <div className="details-contents">
                        <div>
                            <h1>{data.productName}</h1>
                            <p className="ratings">{data.ratings}</p>
                            <h2>${data.prize}.00</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt porro laboriosam ex rerum earum voluptatum, unde voluptate veritatis quia ab aliquam minus possimus harum magni, soluta inventore ut eaque ad maiores reiciendis recusandae distinctio. Ad blanditiis dolore rem deserunt sed fugiat? Repellat expedita ex praesentium incidunt excepturi saepe ipsum, temporibus, nam velit tempora cum magni provident porro, deserunt consectetur sint laudantium maxime iusto. Corrupti rerum totam labore reiciendis rem fuga temporibus, impedit officia, mollitia ratione soluta expedita molestias aliquid nihil placeat. Officia unde, beatae molestiae saepe sit neque est explicabo quo natus blanditiis quisquam assumenda quibusdam recusandae. Nisi, molestiae voluptate.</p>

                            <div className="qtybtn">
                                <button onClick={() => handleqty('-')}>-</button>
                                <input type="text" value={count} onChange={(e) => setCount(e.target.value)} maxLength={2} />
                                <button onClick={() => handleqty('+')}>+</button>
                            </div>
                        </div>

                        <div>
                            <button>Add to Cart</button>
                            <p>Categories: <span>{data.category}</span></p>
                        </div>
                        
                    </div>
                </div>}

        </div>
    );
}

export default ProductDetails;
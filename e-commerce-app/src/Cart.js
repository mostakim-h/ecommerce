
import { useState } from 'react';
import useFetch from './useFetch';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


const Cart = () => {

    const { data: dataofCart } = useFetch('http://localhost:9999/cart')
    const [count, setCount] = useState(1)

    const handleqty = (operatore, value, e) => {
        if (operatore === '-' && count > 1) {
            setCount(count - 1);
        } else if (operatore === '+' && count < 99) {
            setCount(count + 1);
        }
    }

    const handleCancelCartItem = (id) => {
        fetch('http://localhost:9999/cart/' + id, {
            method: "DELETE"
        })
    }

    return (
        <div className="cart">
            {dataofCart && dataofCart.map(value => (
                <div key={value.id} className="cart-section">
                    <div>
                        <form action="">
                            <button onClick={() => handleCancelCartItem(value.id)} className='cancelbtn'>Cancel</button>
                        </form>
                    </div>

                    <div className="img">
                        <img width={100} src={value.imageUrl} alt="" srcSet="" />
                    </div>
                    <Link style={{
                        textAlign: "left",
                        textDecoration: "none",
                        color: '#222'
                    }} to={`/productdetails/${value.id}`}>
                    {value.productName}
                    </Link>
                    <div className="qtybtn">
                        <button className={"a"} onClick={(e) => handleqty('-', 1, e)}>-</button>
                        <input disabled type="text" min={1} value={count} onChange={(e) => setCount(e.target.value)} maxLength={2} />
                        <button onClick={() => handleqty('+')}>+</button>
                    </div>
                    <p>${value.prize * count}.00</p>
                </div>
            ))}


        </div>
    );
}

export default Cart;
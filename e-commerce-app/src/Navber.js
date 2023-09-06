import { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Navber = () => {

    const [active, setActive] = useState(1)

    const handleClass = (i) => {
        setActive(i)
    }

    return (
        <div className="nav">
            <div className="nav-container">
                <div className="logo">
                    <img width={200} src="https://xtratheme.com/elementor/gadgets/wp-content/uploads/sites/108/2023/04/logo.png" alt="" />
                </div>
                <div className="menu">
                    <Link className={active === 1 ? "active" : ""} onClick={() => handleClass(1)} to="/">Home</Link>
                    <Link className={active === 2 ? "active" : ""} onClick={() => handleClass(2)} to="/shop">Shop</Link>
                    <Link className={active === 3 ? "active" : ""} onClick={() => handleClass(3)} to="/categories">Categories</Link>
                    <Link className={active === 5 ? "active" : ""} onClick={() => handleClass(5)} to="">Add Product</Link>
                    <Link className={active === 6 ? "active" : ""} onClick={() => handleClass(6)} to="/cart">Cart</Link>
                    <input placeholder="Search..." type="text" />
                </div>
            </div>

        </div>
    );
}

export default Navber;
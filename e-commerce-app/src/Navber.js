import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Navber = () => {
    return (
        <div className="nav">
            <div className="nav-container">
                <div className="logo">
                    <img width={200} src="https://xtratheme.com/elementor/gadgets/wp-content/uploads/sites/108/2023/04/logo.png" alt=""/>
                </div>
                <div className="menu">
                    <Link to="">Home</Link>
                    <Link to="">Shop</Link>
                    <Link to="">Categories</Link>
                    <Link to="">Quick Find</Link>
                    <Link to="">Pages</Link>
                    <input placeholder="Search..." type="text" />
                </div>
            </div>
            
        </div>
    );
}

export default Navber;
import HeaderBanner from "./HeaderBanner";
import ProductCetagoryCard from "./ProductCetagoryCard";
import Products from "./Products";
import SpecialProductCard from "./SpecialProductsCard";

const Home = () => {
    return (
        <div className="home">
            <HeaderBanner/>
            <ProductCetagoryCard/>
            <SpecialProductCard/>
            <Products/>
        </div>
    );
}

export default Home;
import DiscountOfferBanner from "./DiscountOfferBanner";
import Footer from "./Footer";
import HeaderBanner from "./HeaderBanner";
import News from "./News";
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
            <DiscountOfferBanner/>
            <News/>
            <Footer/>
        </div>
    );
}

export default Home;
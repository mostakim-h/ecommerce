import Navber from "./Navber";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom/cjs/react-router-dom";
import Home from './Home';
import ProductDetails from "./ProductDetails";
import Footer from "./Footer";
import Shop from "./Shop";
import ProductCategory from "./ProductCategory";
import Cart from "./Cart";
import AddProduct from "./AddProduct";

function App() {
  return (
    <div className="App">
      <Router>
      <Navber/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/productdetails/:id">
            <ProductDetails/>
          </Route>
          <Route path="/shop">
            <Shop/>
          </Route>
          <Route path="/categories">
            <ProductCategory/>
          </Route>
          <Route path="/cart">
            <Cart/>
          </Route>
          <Route path="/addproduct">
            <AddProduct/>
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;

import Navber from "./Navber";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom/cjs/react-router-dom";
import Home from './Home';
import ProductDetails from "./ProductDetails";
import Footer from "./Footer";

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
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;

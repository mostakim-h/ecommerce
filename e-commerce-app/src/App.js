import Navber from "./Navber";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom/cjs/react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Navber/>
        <Switch>
          <Route path="/">
            
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Pages/Home";
import { Switch, Route, Redirect } from "react-router-dom";
import ProductDetails from "./Components/Pages/ProductDetails";

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home" exact>
          <Home />
        </Route>
        <Route path="/product/:id" exact>
          <ProductDetails />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

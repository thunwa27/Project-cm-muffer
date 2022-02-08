import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import ShowProduct from "./component/SubComponent/ShowProduct";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

const MyRoute = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" component={App} exact></Route>
        <Route path="/ShowProduct" component={ShowProduct}></Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default MyRoute;

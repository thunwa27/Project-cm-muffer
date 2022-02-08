import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import ShowProduct from "./component/SubComponent/ShowProduct";

const MyRoute = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App} exact></Route>
        <Route path="/ShowProduct" component={ShowProduct}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default MyRoute;

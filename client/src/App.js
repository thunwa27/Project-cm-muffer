import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import BannerIndex from "./component/BannerIndex";
import ContentSwiper from "./component/ContentSwiper";
import ContentDetail from "./component/ContentDetail";
import PresentPrice from "./component/PresentPrice";
import ContentAccordion from "./component/ContentAccordion";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <BannerIndex />
        <ContentSwiper />
        <ContentDetail />
        <PresentPrice />
        <ContentAccordion />
        <Footer />
      </Router>
    </div>
  );
}

export default App;

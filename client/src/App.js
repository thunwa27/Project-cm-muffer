import "./App.css";
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
      <BannerIndex />
      <ContentSwiper />
      <ContentDetail />
      <PresentPrice />
      <ContentAccordion />
    </div>
  );
}

export default App;

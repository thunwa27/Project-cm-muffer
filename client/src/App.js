import "./App.css";
import BannerIndex from "./component/BannerIndex";
import ContentSwiper from "./component/ContentSwiper";
import ContentDetail from "./component/ContentDetail";
import PresentPrice from "./component/PresentPrice";
import ContentAccordion from "./component/ContentAccordion";
import "bootstrap/dist/css/bootstrap.min.css";

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

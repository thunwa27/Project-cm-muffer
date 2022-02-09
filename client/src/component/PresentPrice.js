import "./PresentPrice.css";
import products_home_1 from "../img/PresentPrice/products_home_1.png";
import products_home_2 from "../img/PresentPrice/products_home_2.png";
import products_home_3 from "../img/PresentPrice/products_home_3.png";
import products_home_4 from "../img/PresentPrice/products_home_4.png";
import present_price_bg1 from "../img/PresentPrice/present_price_bg1.jpg";
import present_price_bg2 from "../img/PresentPrice/present_price_bg2.jpg";
import present_price_bg3 from "../img/PresentPrice/present_price_bg3.jpg";
import present_price_bg4 from "../img/PresentPrice/present_price_bg4.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const PresentPrice = () => {
  return (
    <Container className="present_price">
      <Row>
        <Col lg={3} md={3}>
          <div className="present-bg">
            <img src={present_price_bg1} alt="" />
          </div>
          <div className="present-text">
            <h3>ท่อสแตนเลส</h3>
            <p>ราคาเริ่มที่ 3,000 บาท</p>
            <img src={products_home_2} alt="" />
          </div>
        </Col>

        <Col lg={3} md={3}>
          <div className="present-bg">
            <img src={present_price_bg2} alt="" />
          </div>
          <div className="present-text">
            <h3>ท่อไทเทเนียม</h3>
            <p>ราคาเริ่มที่ 5,000 บาท</p>
            <img src={products_home_1} alt="" />
          </div>
        </Col>

        <Col lg={3} md={3}>
          <div className="present-bg">
            <img src={present_price_bg3} alt="" />
          </div>
          <div className="present-text">
            <h3>หม้อพักกลาง</h3>
            <p>ราคาเริ่มที่ 4,500 บาท</p>
            <img src={products_home_3} alt="" />
          </div>
        </Col>

        <Col lg={3} md={3}>
          <div className="present-bg">
            <img src={present_price_bg4} alt="" />
          </div>
          <div className="present-text">
            <h3>ท่อออกคู่</h3>
            <p>ราคาเริ่มที่ 4,000 บาท</p>
            <img src={products_home_4} alt="" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default PresentPrice;

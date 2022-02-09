import img_car_1 from "../img/bannerHero/img_car_1.png";
import "./ContentDetail.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const ContentDetail = () => {
  return (
    <Container fluid className="detail-main">
      <div className="line-detail-main">
        <div className="line-detail"></div>
      </div>
      <Container className="detail-content">
        <Row>
          <Col md={7}>
            <img src={img_car_1} alt="" />
          </Col>
          <Col md={5}>
            <section className="detail-text">
              <h1>ท่อคู่ออกจริง แรงจริง</h1>
              <p>
                ท่อคู่หลากหลายทรงไม่ว่าจะ ทรง VIP หรือ ทรงรูปไข่วงรี
                ทางร้านจัดให้
                พร้อมออกแบบเดินไลน์ท่อและหม้อพักใหม่ให้เข้ากับตัวรถ
                เลือกชนิดวัตถุได้ทั้ง เหล็ก สแตนเลส หรือไทเทเนียม
              </p>
            </section>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default ContentDetail;

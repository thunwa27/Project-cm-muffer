import banner_hero_1 from "../img/bannerHero/banner_hero_1.png";
import banner_hero_2 from "../img/bannerHero/banner_hero_2.png";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./BannerIndex.css";

const BannerIndex = () => {
  return (
    <Container fluid className="bg-banner">
      <div className="line">
        <div className="line-bg-1"></div>
        <div className="line-bg-2"></div>
      </div>
      <Carousel className="bg-banner">
        <Carousel.Item interval={1500}>
          <Container>
            <div className="banner-index">
              <Row>
                <Col sm={4} className="banner-text">
                  <h1>CM MUFFLER</h1>
                  <p>
                    ปรึกษาแนะนำเกี่ยวกับท่อไอเสีย ผลิตและติดตั้งท่อไอเสีย
                    โดยเฉพาะท่อคู่ VIP พร้อมเดินไลน์ท่อใหม่ตามต้องการ ตรงรุ่น
                    แรงไม่ตรง
                  </p>
                  <button type="" className="btn-banner">
                    อ่านเพิ่มเติม
                  </button>
                </Col>
                <Col sm={8} className="banner-img">
                  <img src={banner_hero_1} alt="bannerHero" />
                </Col>
              </Row>
            </div>
          </Container>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <Container>
            <div className="banner-index">
              <Row>
                <Col sm={4} className="banner-text">
                  <h1>DUAL EXHAUST</h1>
                  <p>
                    CM MUFFLER เชี่ยวชาญด้านการปรับแต่ง
                    สูตรท่อไอเสียระบบท่อคู่ให้สามารถใช้งานได้จริง
                    เพิ่มอัตราการเร่งอย่างเห็นได้ชัด
                    แรงดันอากาศภายในไม่มีตรงด้วยสูตรจากทางร้าน
                  </p>
                  <button type="" className="btn-banner">
                    อ่านเพิ่มเติม
                  </button>
                </Col>
                <Col sm={8} className="banner-img">
                  <img
                    src={banner_hero_2}
                    alt="bannerHero"
                    className="img-banner-2"
                  />
                </Col>
              </Row>
            </div>
          </Container>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default BannerIndex;

/*

<div
      id="demo"
      className="carousel slide container-fluid bg-banner"
      data-bs-ride="carousel"
    >
      <div className="line">
        <div className="line-bg-1"></div>
        <div className="line-bg-2"></div>
      </div>

      <div className="carousel-inner container">
        <div className="carousel-item active">
          <div className="banner-index">
            <div className="row ">
              <div className="col-md-4 banner-text">
                <h1>CM MUFFLER</h1>
                <p>
                  ปรึกษาแนะนำเกี่ยวกับท่อไอเสีย ผลิตและติดตั้งท่อไอเสีย
                  โดยเฉพาะท่อคู่ VIP พร้อมเดินไลน์ท่อใหม่ตามต้องการ ตรงรุ่น
                  แรงไม่ตรง
                </p>
                <button type="" className="btn-banner">
                  อ่านเพิ่มเติม
                </button>
              </div>
              <div className="col-md-8 banner-img">
                <img src={banner_hero_1} alt="bannerHero" />
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="banner-index">
            <div className="row ">
              <div className="col-md-4 banner-text">
                <h1>DUAL EXHAUST</h1>
                <p>
                  CM MUFFLER เชี่ยวชาญด้านการปรับแต่ง
                  สูตรท่อไอเสียระบบท่อคู่ให้สามารถใช้งานได้จริง
                  เพิ่มอัตราการเร่งอย่างเห็นได้ชัด
                  แรงดันอากาศภายในไม่มีตรงด้วยสูตรจากทางร้าน
                </p>
                <button type="" className="btn-banner">
                  อ่านเพิ่มเติม
                </button>
              </div>
              <div className="col-md-8 banner-img">
                <img
                  src={banner_hero_2}
                  alt="bannerHero"
                  className="img-banner-2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#demo"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#demo"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
*/

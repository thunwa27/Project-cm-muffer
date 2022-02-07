import banner_hero_1 from "../img/bannerHero/banner_hero_1.png";
import banner_hero_2 from "../img/bannerHero/banner_hero_2.png";
import "./BannerIndex.css";

const BannerIndex = () => {
  return (
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
          <div className="banner-index ">
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
          <div className="banner-index ">
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
  );
};

export default BannerIndex;

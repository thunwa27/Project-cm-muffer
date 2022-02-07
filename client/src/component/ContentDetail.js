import img_car_1 from "../img/bannerHero/img_car_1.png";
import "./ContentDetail.css";

const ContentDetail = () => {
  return (
    <div className="detail-main container-fluid">
      <div className="line-detail-main">
        <div className="line-detail"></div>
      </div>
      <div className="detail-content container">
        <div className="row gx-0 ">
          <div className="col-md-7">
            <img src={img_car_1} alt="" />
          </div>
          <div className="col-md-5">
            <section className="detail-text">
              <h1>ท่อคู่ออกจริง แรงจริง</h1>
              <p>
                ท่อคู่หลากหลายทรงไม่ว่าจะ ทรง VIP หรือ ทรงรูปไข่วงรี
                ทางร้านจัดให้
                พร้อมออกแบบเดินไลน์ท่อและหม้อพักใหม่ให้เข้ากับตัวรถ
                เลือกชนิดวัตถุได้ทั้ง เหล็ก สแตนเลส หรือไทเทเนียม
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentDetail;

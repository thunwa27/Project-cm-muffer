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
              <h1>TEXT DETAIL</h1>
              <p>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentDetail;

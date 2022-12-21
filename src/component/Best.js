import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { Link } from "react-router-dom";
import "../css/Best.scss";
const PTF = [
  { id: 1, title: "너무 한낮의 연애" },
  { id: 2, title: "럭키 드로우" },
  { id: 3, title: "백광" },
  { id: 4, title: "바깥은 여름" },
  { id: 1, title: "너무 한낮의 연애" },
  { id: 2, title: "럭키 드로우" },
  { id: 3, title: "백광" },
  { id: 4, title: "바깥은 여름" },
];

const NPTF = [...PTF, PTF[0]].splice(1, PTF.length);

const Best = () => {
  const LS = useRef();
  const RS = useRef();

  const [LSS, setLSS] = useState();
  const [RSS, setRSS] = useState();

  useEffect(() => {
    setLSS(LS.current);
    setRSS(RS.current);
  }, []);

  return (
    <section className="Best csc">
      <h2>베스트 도서</h2>
      <p>이달의 베스트 도서를 만나보세요.</p>
      <div className="container">
        <div className="left">
          <div className="slide">
            <Slider
              fade={true}
              ref={LS}
              arrows={false}
              asNavFor={RSS}
              speed={500}
              autoplaySpeed={3000}
              responsive={[
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 1,
                    autoplay: true,
                    infinite: true,
                  },
                },
              ]}
            >
              {PTF.map((building) => {
                return (
                  <figure key={building.id}>
                    <div className="box">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/main_best0" +
                          building.id +
                          ".jpg"
                        }
                        alt=""
                      />
                    </div>
                    <div className="des">{building.title}</div>
                  </figure>
                );
              })}
            </Slider>
          </div>
        </div>
        <div className="right">
          <h2>도서 명 : </h2>
          <p>줄거리 : </p>

          <div className="arrows">
            <i
              className="xi-angle-left-thin"
              onClick={() => LS.current.slickPrev()}
            ></i>
            <i
              className="xi-angle-right-thin"
              onClick={() => LS.current.slickNext()}
            ></i>
          </div>
          <div className="slide">
            <Slider
              slidesToShow={5}
              className="right_slide"
              ref={RS}
              asNavFor={LSS}
              arrows={false}
              autoplay={true}
              speed={500}
              responsive={[
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 1,

                    infinite: true,
                  },
                },
              ]}
            >
              {NPTF.map((building) => {
                return (
                  <figure key={building.id}>
                    <div className="box">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/main_best0" +
                          building.id +
                          ".jpg"
                        }
                        alt=""
                      />
                    </div>
                    <div className="des">{building.title}</div>
                  </figure>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Best;

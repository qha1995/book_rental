import { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "../css/MainSlider.scss";

const MS = [
  {
    id: 1,
    content: "사업 소개",
    description:
      "SINSIBOOK 은 도서를 간편하게 대여할 수 있는 신개념 도서 대여 시스템입니다.",
    link: "/",
  },
  {
    id: 2,
    content: "스마트 독서",
    description:
      "전자도서관과 함께하는 스마트한 독서 생활. 멀리 있는 서점 찾아 헤매지 말고, 가까운 곳에서 독서를 즐기세요.",
    link: "/",
  },
  {
    id: 3,
    content: "회사 소개",
    description:
      "SINSIWAY 는 글로벌 소프트웨어 회사로 정보보호 원칙을 기반으로 한 데이터베이스 보안 전문 기업입니다. ",
    link: "/",
  },
  {
    id: 4,
    content: "핵심 가치관",
    description:
      "Warm-hearted professtional innovator. 기본에 충실하고 고객과 직원을 존중하며 사람과 기술이 최고 자산인 기업 SINSIWAY 입니다. ",
    link: "/",
  },
];
const MainSlider = () => {
  const [slideNum, setSlideNum] = useState(0);
  const SLIDE = useRef(null);
  return (
    <section className="MainSlider">
      <div className="container">
        <Slider
          centerMode={true}
          centerPadding={"300px"}
          afterChange={(index) => setSlideNum(index)}
          arrows={false}
          ref={SLIDE}
          className={"MainSlider_slide"}
        >
          {MS.map((img, idx) => {
            return (
              <figure key={img.id} className={slideNum === idx ? "on" : ""}>
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/main_ss0" +
                    img.id +
                    ".jpg"
                  }
                  alt=""
                />
              </figure>
            );
          })}
        </Slider>

        <div className="box">
          <div className="content">
            <div className="tit">{MS[slideNum].content}</div>
            <p>{MS[slideNum].description}</p>
            <a href={MS[slideNum].link} className="cbtn">
              자세히보기
            </a>
          </div>
          <div className="num">
            0{slideNum + 1} <span>/ 0{MS.length}</span>
          </div>
        </div>
        <div className="arrows">
          <i
            className="xi-angle-left-thin"
            onClick={() => SLIDE.current.slickPrev()}
          ></i>
          <i
            className="xi-angle-right-thin"
            onClick={() => SLIDE.current.slickNext()}
          ></i>
        </div>
        <ul className="dots">
          {MS.map((dot, idx) => (
            <li
              key={dot.id}
              onClick={() => SLIDE.current.slickGoTo(idx)}
              className={slideNum === idx ? "on" : ""}
            >
              {dot.id}
            </li>
          ))}
        </ul>
      </div>

      <div class="boxx">
        <div class="wave -one"></div>
        <div class="wave -two"></div>
        <div class="wave -three"></div>
      </div>
    </section>
  );
};

export default MainSlider;

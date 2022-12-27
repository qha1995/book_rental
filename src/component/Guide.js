import "../css/Guide.scss";
import { Link } from "react-router-dom";

const CONTENT = [
  {
    id: 1,
    title: "이용 방법",
    dec: "신시북 도서 대여 방법 입니다.",
    link: "/sub02",
    click: "사용 방법 보기",
  },
  {
    id: 2,
    title: "도서 리스트",
    dec: "대여 할 수 있는 도서 리스트 입니다.",
    link: "/list",
    click: "책 구경하기",
  },
  {
    id: 3,
    title: "도서 보관함",
    dec: "대여 희망 도서를 보관함에 담으세요.",
    link: "/cart",
    click: "보관함 가기",
  },
];

const Guide = () => {
  return (
    <section className="Guide csc">
      <h2>이용 안내</h2>
      <p>신시북 이용 가이드</p>
      <div className="inner">
        {CONTENT.map((content) => {
          return (
            <Link to={content.link}>
              <figure key={content.id}>
                <div className="box">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/main_solution_icon_0" +
                      content.id +
                      ".png"
                    }
                    alt=""
                  />
                </div>
                <div className="tit">{content.title}</div>
                <div className="dec">{content.dec}</div>
                <a href={content.link} className="cbtn">
                  {content.click}
                </a>
              </figure>
            </Link>
          );
        })}
      </div>
    </section>
  );
};
export default Guide;

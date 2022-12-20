import "../css/Guide.scss";

const CONTENT = [
  { id: 1, title: "회사 소개", dec: "신시웨이 브랜드 소개", link: "/a" },
  { id: 2, title: "이용 방법", dec: "신시북 도서 대여 방법", link: "/a" },
  {
    id: 3,
    title: "도서 보관함",
    dec: "관심있는 도서를 보관하세요.",
    link: "/a",
  },
  { id: 4, title: "예약 신청", dec: "보고싶은 도서를 예약하세요.", link: "/a" },
];

const Guide = () => {
  return (
    <section className="Guide csc">
      <h2>이용 안내</h2>
      <p>신시북 이용 가이드</p>
      <div className="inner">
        {CONTENT.map((content) => {
          return (
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
                자세히 보기
              </a>
            </figure>
          );
        })}
      </div>
    </section>
  );
};
export default Guide;

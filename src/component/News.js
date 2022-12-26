import "../css/News.scss";

const NEWS = [
  {
    id: 1,
    category: "배송 안내",
    title: "도서 대여 배송 안내",
    date: "2022. 12. 14",
    link: "https://blog.sinsiway.com/",
    src: "/assets/images/main_news01.jpg",
  },
  {
    id: 2,
    category: "주간 도서 알리미",
    title: "12월 4주차 도서 알리미",
    date: "2022. 12. 26",
    link: "https://blog.sinsiway.com/",
    src: "/assets/images/main_news02.jpg",
  },
  {
    id: 3,
    category: "이벤트",
    title: "이 달의 독서왕 이벤트",
    date: "2022. 12. 26",
    link: "https://blog.sinsiway.com/",
    src: "/assets/images/main_news03.jpg",
  },
];

const News = () => {
  return (
    <section className="News csc">
      <h2>신시북 알림</h2>
      <p>신시북의 새 소식을 전해드립니다.</p>
      <div className="inner">
        {NEWS.map((news) => {
          return (
            <figure key={news.id}>
              <a href={news.link}>
                <div className="box">
                  <img
                    src={process.env.PUBLIC_URL + news.src}
                    alt={news.title}
                  />
                </div>
                <strong>{news.category}</strong>
                <div className="title">{news.title}</div>
                <span>{news.date}</span>
              </a>
            </figure>
          );
        })}
      </div>
    </section>
  );
};
export default News;

import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../css/Header.scss";

const NAVLINK = [
  { id: 1, menu: "회사 소개", link: "/sub01" },
  { id: 2, menu: "이용 방법", link: "/sub02" },
  { id: 3, menu: "도서 보관함", link: "/sub03" },
  { id: 4, menu: "예약 신청", link: "/sub04" },
];

const Header = ({ on, setOn }) => {
  const [TG, setTG] = useState([false, false]);
  const HL = useRef();

  const scrollEvent = () => {
    let sct = window.scrollY;
    sct > 0
      ? HL.current.classList.add("on")
      : HL.current.classList.remove("on");
  };

  const wheelEvent2 = (e) => {
    e.preventDefault();
    console.log(0);
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollEvent);
    HL.current.addEventListener("wheel", wheelEvent2);
  }, []);

  return (
    <header className={`Header ${on ? "os" : ""}`} ref={HL}>
      <div className="hd_wrap">
        <h1>
          <a href="/">신시북</a>
        </h1>
        <nav className="Gnb">
          <ul>
            {NAVLINK.map((it, idx) => {
              return (
                <li key={it.id} onClick={() => setOn(false)}>
                  <Link to={it.link}>{it.menu}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="top_service">
          <div className="top_box">
            <div className={"lang " + (TG[0] ? "on" : "")}>
              <strong onClick={() => setTG([!TG[0], false])}>
                <i className="xi-book"></i> 도서목록{" "}
                <i className="xi-angle-down arrow"></i>
              </strong>
              <ul className="lang_box">
                <li>
                  <a href="#!">경제경영</a>
                </li>
                <li>
                  <a href="#!">자기계발</a>
                </li>
                <li>
                  <a href="#!">시.에세이</a>
                </li>
                <li>
                  <a href="#!">종교</a>
                </li>
                <li>
                  <a href="#!">소설</a>
                </li>
                <li>
                  <a href="#!">국어/외국어</a>
                </li>
                <li>
                  <a href="#!">정치/사회</a>
                </li>
                <li>
                  <a href="#!">역사/문화</a>
                </li>
                <li>
                  <a href="#!">과학/공학</a>
                </li>
                <li>
                  <a href="#!">IT/프로그래밍</a>
                </li>
                <li>
                  <a href="#!">건강/의학</a>
                </li>
                <li>
                  <a href="#!">가정/생활/요리</a>
                </li>
                <li>
                  <a href="#!">여행/취미</a>
                </li>
                <li>
                  <a href="#!">예술/대중문화</a>
                </li>
                <li>
                  <a href="#!">유아</a>
                </li>
                <li>
                  <a href="#!">아동</a>
                </li>
                <li>
                  <a href="#!">청소년</a>
                </li>
                <li>
                  <a href="#!">교재/수험서</a>
                </li>
                <li>
                  <a href="#!">매거진</a>
                </li>
                <li>
                  <a href="#!">로맨스</a>
                </li>
                <li>
                  <a href="#!">로맨스판타지</a>
                </li>
                <li>
                  <a href="#!">판타지</a>
                </li>
                <li>
                  <a href="#!">단행본만화</a>
                </li>
                <li>
                  <a href="#!">미분류</a>
                </li>
              </ul>
            </div>
            <div className={"top_search " + (TG[1] ? "on" : "")}>
              <strong onClick={() => setTG([false, !TG[1]])}>
                <i className="xi-search"></i>
              </strong>

              <div className="search_box">
                <form action="#!">
                  <input
                    type="text"
                    placeholder="검색어를 입력하세요"
                    required
                  />
                  <button>
                    <i className="xi-search"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
          <ul className="project">
            <li>
              <a href="#!">로그인</a>
            </li>
            <li>
              <a href="#!">회원가입</a>
            </li>
            <li>
              <a href="#!">상담센터</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;

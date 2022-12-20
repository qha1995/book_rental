import Header from "./component/Header";
import Footer from "./component/Footer";
import Totop from "./component/Totop";
import Wrapper from "./component/Wrapper";
import Sub01 from "./pages/Sub01";
import Sub02 from "./pages/Sub02";
import Sub03 from "./pages/Sub03";
import Sub04 from "./pages/Sub04";
import { Route, Routes } from "react-router-dom";
import Main from "./component/Main";
import Mopen from "./component/Mopen";
import { useState } from "react";

const App = () => {
  const MAINSLIDRE = [
    {
      id: 0,
      tit: "회사 소개",
      con: "신시웨이 브랜드 소개",
      des: "신시웨이 브랜드를 소개합니다.",
      link: "/sub01",
    },

    {
      id: 1,
      tit: "이용 방법",
      con: "신시북 도서 대여 방법",
      des: "신시북 도서 대여하는 방법을 소개합니다.",
      link: "/sub02",
    },
    {
      id: 2,
      tit: "도서 보관함",
      con: "관심있는 도서를 보관하세요.",
      des: "도서를 보관하는 방법을 소개합니다.",
      link: "/sub03",
    },
    {
      id: 3,
      tit: "예약 신청",
      con: "보고싶은 도서를 예약하세요.",
      des: "도서를 예약하는 방법을 소개합니다.",
      link: "/sub04",
    },
  ];
  const [on, setOn] = useState(false);
  return (
    <Wrapper>
      <Header on={on} setOn={setOn} />
      <Routes>
        <Route path="/" element={<Main content={MAINSLIDRE} />} />
        <Route path="/sub01" element={<Sub01 content={MAINSLIDRE} />} />
        <Route path="/sub02" element={<Sub02 content={MAINSLIDRE} />} />
        <Route path="/sub03" element={<Sub03 content={MAINSLIDRE} />} />
        <Route path="/sub04" element={<Sub04 content={MAINSLIDRE} />} />
        {/* <Route path='/detail/:id' element={<Detail user={user} />} /> */}
      </Routes>

      <Footer />
      <Totop />
      <Mopen on={on} setOn={setOn} />
    </Wrapper>
  );
};

export default App;

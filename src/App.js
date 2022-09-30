import './App.css';
import Header from './component/Header'
import MainVisual from './component/MainVisual';
import MainContent from './component/MainContent';
import Portfolio from './component/Portfolio';
import Solution from './component/Solution';
import Promotion from './component/Promotion';
import News from './component/News';
import Footer from './component/Footer';
import Totop from './component/Totop';
import Popup from './component/Popup';
import Wrapper from './component/Wrapper';
import Sub01 from './pages/Sub01';
import Sub02 from './pages/Sub02';
import Sub03 from './pages/Sub03';
import Sub04 from './pages/Sub04';
import { Route, Routes } from 'react-router-dom';
import Main from './component/Main';

const App = () => {
  const MAINSLIDRE = [
    { id: 0, tit: "이용정보", con: "에버랜드 이용 방법 안내", des: "방문 전 에버랜드 온라인 회원가입 및 APP을 꼭 설치해주세요.", link: "/sub01" },
    { id: 1, tit: "요금&제휴카드", con: "에버랜드 이용 요금 안내", des: "365일 축제의 나라 에버랜드 ! 알차게 즐기고 싶다면 제휴카드를 확인하세요.", link: "/sub02" },
    { id: 2, tit: "즐길거리", con: "어트랙션 즐기기 추천 코스 ", des: "기상 상황 및 시즌에 따라 어트랙션 및 공연 관람이 변동될 수 있습니다. 에버랜드 App에서 운휴 및 대기시간 정보를 확인해주세요.", link: "/sub03" },
    { id: 3, tit: "멤버십", con: "할인 및 프로모션 안내", des: "다양한 프로모션과 이벤트를 확인해보세요.", link: "/sub04" }
  ];
  return (
    <Wrapper>
      <Header />
      <Routes>
        <Route path='/' element={<Main content={MAINSLIDRE} />} />

        <Route path='/sub01' element={<Sub01 content={MAINSLIDRE} />} />
        <Route path='/sub02' element={<Sub02 content={MAINSLIDRE} />} />
        <Route path='/sub03' element={<Sub03 content={MAINSLIDRE} />} />
        <Route path='/sub04' element={<Sub04 content={MAINSLIDRE} />} />
        {/* <Route path='/detail/:id' element={<Detail user={user} />} /> */}
      </Routes>

      <Footer />
      <Totop />
    </Wrapper>
  );
}

export default App;
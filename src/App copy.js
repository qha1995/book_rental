import axios from "axios";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Totop from "./component/Totop";
import Wrapper from "./component/Wrapper";
import Sub01 from "./pages/Sub01";
import Sub02 from "./pages/Sub02";
import { Route, Routes, useSearchParams } from "react-router-dom";
import Main from "./component/Main";
import { useEffect, useState } from "react";
import Cart from "./shop/Cart";
import Itm from "./shop/Itm";
import List from "./shop/List";
import Glist from "./shop/Glist";

import "./css/ShopDetail.scss";
// import Board from "./pages/Board";
// import Search from "./component/Search";

const App = () => {
  const INFORMATION = [
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
      tit: "도서 리스트",
      con: "보고싶은 도서를 예약하세요.",
      des: "도서를 예약하는 방법을 소개합니다.",
      link: "/list",
    },
    {
      id: 3,
      tit: "도서 보관함",
      con: "관심있는 도서를 보관하세요.",
      des: "도서를 보관하는 방법을 소개합니다.",
      link: "/cart",
    },
  ];

  const [on, setOn] = useState(false);

  const [itm, setItm] = useState();
  const [cart, setCart] = useState([]);

  const [list, setList] = useState([]);
  const [glist, setGlist] = useState([]);
  const [input, setInput] = useState({
    title: "",
    content: "",
    check: false,
  });

  // const [searchInput, setSearchInput] = useState("");
  // const [search, setSearch] = useSearchParams();

  // const searchRe = search.get("search");

  useEffect(() => {
    const url = "https://desipossa.github.io/shop_cra/assets/data.json";
    const getProduct = async () => {
      const res = await axios.get(url);

      const shopdata = res.data.slice(85, 195).map((it) => {
        return {
          id: it.id,
          name: it.name,
          src: it.image_link,
          brand: it.brand,
          cate: it.category,
          price: it.price * 1450,
          des: it.description,
          color: it.product_colors,
          time: new Date(Date.parse(it.created_at)),
          type: it.product_type,
        };
      });
      setItm(shopdata);
      // console.log(res.data);
      // console.log(shopdata);
    };
    getProduct();
  }, []);

  // const [os, setOs] = useState(false);
  return (
    <Wrapper>
      <Header
        on={on}
        setOn={setOn}
        cart={cart}
        shopList={itm}
        // searchInput={searchInput}
        // setSearchInput={setSearchInput}
        // search={search}
        // setSearch={setSearch}
        // os={os}
        // setOs={setOs}
      />
      <Routes>
        <Route path="/" element={<Main content={INFORMATION} />} />
        <Route path="/sub01" element={<Sub01 content={INFORMATION} />} />
        <Route path="/sub02" element={<Sub02 content={INFORMATION} />} />
        <Route
          path="/list"
          element={<List shopList={itm} cart={cart} setCart={setCart} />}
        />
        <Route
          path="/glist"
          element={<Glist shopList={itm} cart={cart} setCart={setCart} />}
        />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />

        <Route path="/shopList" element={<List shopList={itm} />} />

        <Route
          path="/shopItem/:itm"
          element={<Itm shopList={itm} cart={cart} setCart={setCart} />}
        />
      </Routes>

      {/* <Route
          path="/board"
          element={
            <Board
              input={input}
              setInput={setInput}
              list={list}
              setList={setList}
            />
          }
        /> */}

      {/* <Route
          path="/search"
          element={
            <Search
              shopList={itm}
              searchInput={searchInput}
              setSearchInput={setSearchInput}
              searchRe={searchRe}
            />
          }
        /> */}

      <Footer />
      <Totop />
    </Wrapper>
  );
};

export default App;

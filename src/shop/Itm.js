import React, { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";

const PTF = [
  { id: 1, title: "럭키 드로우" },
  { id: 2, title: "백광" },
  { id: 3, title: "바깥은 여름" },
  { id: 4, title: "너무 한낮의 연애" },
];

const Itm = ({ shopList, cart, setCart }) => {
  const { itm } = useParams();
  const navigate = useNavigate();
  const matchItm = shopList.find((it) => itm === String(it.id));
  return (
    <section className="shopItm">
      <div className="inner">
        <div className="box">
          <img
            src={
              process.env.PUBLIC_URL +
              "/assets/images/main_best01" +
              PTF.id +
              ".jpg"
            }
            alt=""
          />
          {/* <img src={matchItm.src} alt="" /> */}
        </div>
        <div className="right">
          <div className="name">{matchItm.name}</div>
          <div className="des">{matchItm.des.substring(0, 300)} ...</div>
          <ul className="color">
            {matchItm.color.map((color, idx) => {
              return (
                <li style={{ background: color.hex_value }} key={idx}>
                  {color.hex_value}
                </li>
              );
            })}
          </ul>
          <div className="price">
            <span>{matchItm.price.toLocaleString()}</span> 원
          </div>
          <button
            className="btn"
            onClick={() => {
              setCart([
                ...cart,
                {
                  id: matchItm.id,
                  name: matchItm.name,
                  des: matchItm.des,
                  src: matchItm.src,
                  price: matchItm.price,
                  e: 1,
                },
              ]);
              navigate("/cart");
            }}
          >
            장바구니 담기
          </button>
          <button className="bts">
            <a href="https://qha1995.github.io/book_rental/list">back</a>
          </button>
          <button className="btp">
            <a href="/">대여 가능 인원 수: 10 명</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Itm;

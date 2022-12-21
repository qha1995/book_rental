import React, { useState } from "react";
import { Link } from "react-router-dom";

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

const List = ({ shopList }) => {
  //const cateList = [...shopList];

  const [sortList, onSortList] = useState(shopList);
  const rowPrice = [...sortList].sort((a, b) => a.price - b.price);
  const hiPrice = [...sortList].sort((a, b) => b.price - a.price);
  const newProduct = [...sortList].sort((a, b) => b.id - a.id);
  const inkki = [...sortList].sort((a, b) => b.name.length - a.name.length);

  const newSort = (it) => {
    onSortList(it);
  };

  return (
    <section className="shopList pn">
      <div className="category">홈 : all</div>
      <h2>모든 제품</h2>
      <ul className="list">
        <li>total book : {shopList.length}</li>
        <li className="line">line</li>
        <li>
          <ul className="option">
            <li onClick={() => newSort(rowPrice)}>도서 명</li>
            <li onClick={() => newSort(hiPrice)}>저자 명</li>
            <li onClick={() => newSort(newProduct)}>출판사 명</li>
            <li onClick={() => newSort(inkki)}>대출 가능 도서</li>
          </ul>
        </li>
      </ul>

      <div className="inner">
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
            </figure>
          );
        })}
        {sortList.map((it) => {
          return (
            <>
              <figure key={it.id}>
                <Link to={"/shopItem/" + it.id}>
                  <div className="name">{it.name}</div>
                  <div className="des">{it.des.substring(0, 100)} ...</div>
                  <div className="price">
                    <span>{it.price.toLocaleString()}</span> 원
                  </div>
                </Link>
              </figure>
            </>
          );
        })}
      </div>
    </section>
  );
};

export default List;

import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Load = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  font-size: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 9999;
`;

const ListUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(20, 1fr);
  gap: 5px;
  list-style: none;
`;

function Glist() {
  const [book, getBook] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [load, setLoad] = useState(true);
  const getApi = async () => {
    setLoad(true);
    const r = await axios.get(
      `https://apis.data.go.kr/4050000/libebook/getLibebook?serviceKey=nmPIjJ%2Bj0FufPiP6k4BLPlq3n%2B46QZN%2B6hgSINrrxqk3nNwnoHX2ynqX6Dlgr3xFeivGPus2vgmh6Ifx1vdu1g%3D%3D&pageNo=${pageNo}&numOfRows=100`
    );
    getBook(r.data);
    setLoad(false);
  };

  useEffect(() => {
    getApi();
  }, [pageNo]);

  return (
    <>
      {load ? <Load>로딩중 입니다. 잠시만 기다려주세요.</Load> : null}
      {console.log(book)}
      <strong>총 {book.totalCount}개의 책을 팔고 있습니다.</strong>
      <ListUl>
        {Array.from({ length: book.totalCount / 100 }).map((it, idx) => {
          return (
            <li key={idx} onClick={() => setPageNo(idx + 1)}>
              <button>{idx + 1}</button>
            </li>
          );
        })}
      </ListUl>
      <div>
        <figure>
          {book.items?.map((it, idx) => {
            return (
              <div className="book" key={it.no}>
                <h3>
                  {idx + 1} : {it.ebk_nm}
                </h3>
                <em>
                  {it.gnr} 저자 : {it.aut_nm}
                </em>
                <p>{it.cn_intro}</p>
                <b>{it.pblsh_ymd}</b>
              </div>
            );
          })}
        </figure>
      </div>
    </>
  );
}

export default Glist;

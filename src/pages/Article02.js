import React from 'react';


const Article = ({ content, num }) => {
    return (
        <article className='Article'>
            <div className="tit">
                <strong>{content[num].tit}</strong>&nbsp;&nbsp; / &nbsp;&nbsp;{content[1].tit}
            </div>
            <div className='bg'>
                <div className="case">
                    <div className="tit__log">
                        <img src={process.env.PUBLIC_URL + '/assets/images/.png'} alt="" />
                    </div>
                    <h2>
                        {content[num].tit}
                    </h2>
                    <p>
                        {content[num].con}
                    </p>
                </div>
            </div>


            <div className="sub__tit">
                종일권 요금 안내
            </div>


            <table summary="티켓 (A, B, C,D)" className="tb_org02 mt10">
                <colgroup>
                    <col style={{ width: '94px' }} />
                    <col style={{ width: '94px' }} />
                    <col style={{ width: '94px' }} />
                    <col style={{ width: '94px' }} />
                    <col style={{ width: '200px' }} />

                </colgroup>


                <thead>
                    <tr>
                        <th scope="col">
                        </th>
                        <th scope="col">
                            A
                        </th>
                        <th scope="col">
                            B
                        </th>
                        <th scope="col">
                            C
                        </th>
                        <th scope="col">
                            D
                        </th>
                        <th scope="col" className="last">비고</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>대인/청소년</td>
                        <td>
                            58,000 원
                        </td>
                        <td>
                            50,000 원
                        </td>
                        <td>
                            46,000 원
                        </td>
                        <td>
                            64,000 원
                        </td>
                        <td rowspan="2" className="last alignL bdOrg">
                            <ul className="td_listL">
                                <li>에버랜드 입장 및 놀이시설 이용<br /> (코인물/대여물/기획전 등 일부 시설<br /> 별도 요금)</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td className="bdOrg">소인/경로</td>
                        <td className="bdOrg">
                            46,000 원
                        </td>
                        <td className="bdOrg">
                            40,000 원
                        </td>
                        <td className="bdOrg">
                            36,000 원
                        </td>
                        <td className="bdOrg">
                            51,000 원
                        </td>
                    </tr>
                </tbody>
            </table>



            <div className="sub__tit">
                제휴카드 안내
            </div>
            <p className="sub__des">
                {content[num].des}
            </p>

            <div className="sub__img">
                <figure>
                    <img src={process.env.PUBLIC_URL + '/assets/images/article02_1.png'} alt="" />
                </figure>
                <figure>
                    <img src={process.env.PUBLIC_URL + '/assets/images/article02_2.png'} alt="" />
                </figure>
                <figure>
                    <img src={process.env.PUBLIC_URL + '/assets/images/article02_3.png'} alt="" />
                </figure>
                <figure>
                    <img src={process.env.PUBLIC_URL + '/assets/images/article02_4.png'} alt="" />
                </figure>
            </div>

            <div className="sub__tit">
                우대 정보
            </div>

            <ul className="sub__service">

                <li >연령에 따른 우대 (나이 확인이 가능한 신분증 또는 서류 제시)
                    <ul className='txt'>
                        <li>- 경로 : 만 65세 ~</li>
                        <li>- 청소년 : 만 13세 ~ 만 18세</li>
                        <li>- 소인 : 36개월 ~ 만 12세</li>
                        <li>- 36개월 미만 :
                            무료 이용 (유료시설의 경우 이용권 별도 구입 필요)</li>
                    </ul>
                </li>

                <li>장애인 우대 (장애인등록증 제시)
                    <ul className='txt'>
                        <li>- 장애의 정도가 심한 장애인<br />
                            본인 : 우대가 적용<br />
                            동반인 : 우대가 적용 (최대1명까지)</li>
                        <li>- 장애의 정도가 심하지 않은 장애인<br />
                            본인 : 우대가 적용<br />
                            ※ 종일권 우대가로 구입 가능
                        </li>

                    </ul></li>
                <li>국가유공자 우대 (증명서류 제시)
                    <ul className='txt'>
                        <li>- 본인 : 종일권 50% 우대가로 구입 가능</li>
                        <li>- 동반인 : 종일권 50% 우대가로 구입 가능 (최대 1명까지)</li>
                    </ul></li>

                <li>3자녀 이상 가정 우대 (건강보험증, 등본 등 3자녀 이상 가정 증명서류 제시)
                    <ul className='txt'>
                        <li>- 종일권 우대가로 구입 가능 </li>
                        <li>- 우대 대상 : 막내 자녀가 만 15세 이하인 3명 이상의 3자녀 이상 가정의 부부와 직계자녀</li>
                        <li>- 해당 가정 내 일부 가족만 이용 시에도 혜택 적용</li>

                    </ul></li>
                <li>임신부 우대 (산모수첩 혹은 임신확인서 제시)
                    <ul className='txt'>
                        <li>- 종일권(임신부 본인) 우대가로 구입 가능</li>
                    </ul></li>

            </ul>

        </article>
    )
}

export default Article;
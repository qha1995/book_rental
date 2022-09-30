import React from 'react'
const Article = ({ content, num }) => {

    return (
        <article className='Article'>
            <div className="tit">
                <strong>{content[num].tit}</strong>&nbsp;&nbsp; / &nbsp;&nbsp;{content[0].tit}
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
                {content[num].tit}
            </div>
            <p className="sub__des">
                {content[num].des}
            </p>

            <div className="sub__img">
                <figure>
                    <img src={process.env.PUBLIC_URL + '/assets/images/article01_1.png'} alt="" />
                </figure>


            </div>

            <div className="sub__tit">
                에버랜드 이용 방법
            </div>

            <ul className="sub__service">

                <li >안전하고 즐거운 이용을 위하여 아래 물품의 반입을 제한하고 있습니다.
                    <ul className='txt'>
                        <li>- 버너/돗자리(1인용 방석 제외)/ 애완동물(안내견 제외)</li>
                        <li>- 자전거/ 인라인/ 킥보드 등 소형탑승기구, 무선조종탑승기구</li>
                    </ul>
                </li>

                <li>다른 손님에게 피해를 줄 수 있는 행동은 삼가 주세요.
                    <ul className='txt'>
                        <li>- 잔디, 꽃밭 훼손, 대기 동선에서 부정한 방법으로 줄 서기</li>
                        <li>- 고성방가, 과격한 행동, 음주 후 어트랙션 이용, 벤치에 눕는 행위 등</li>
                        <li>- 흡연은 흡연구역으로 표시된 지역에서만 가능합니다.</li>
                    </ul></li>
                <li>가지고 오신 도시락은 피크닉 영역에서 이용해 주세요.
                    <ul className='txt'>
                        <li>- 레스토랑 및 야외 테라스에서는 도시락을 드실 수 없습니다.</li>
                        <li>- 피크닉 영역은 현장의 가이드북을 참고해 주세요.</li>
                    </ul></li>
                <li>동물에게 음식을 주거나 플래시를 켜고 촬영하는 것은 삼가 주세요</li>
                <li>어린이는 목말을 태우는 것은 위험하오니 삼가 주세요.</li>
                <li>어트랙션 이용 Tip
                    <ul className='txt'>
                        <li>- 지정된 좌석에서 안전장치를 정확히 잠그고 바른 자세로 이용해 주세요.</li>
                        <li>- 떨어지기 쉬운 물건은 소지하지 말고 탑승해 주세요.</li>
                        <li>- 탑승 중에는 촬영, 취식 같은 위험한 행동은 삼가 주세요</li>
                        <li>- 탑승객의 건강 상태에 따른 탑승자 안전 기준을 준수해 주세요.</li>
                        <li>- 고객과 동물의 안전을 위하여 일부 어트랙션과 동물원 일부 시설은 보조견의 동반 이용이 제한될 수 있습니다.</li>
                    </ul></li>
                <li>스마트 줄서기 시행 안내
                    <ul className='txt'>
                        <li>- 스마트줄서기 적용 기종 이용 시 에버랜드 App에서 해당 시설 스마트 줄서기 신청 후
                            예약된 시간에 이용하실 수 있습니다.</li>
                    </ul></li>
                <li>장애인 탑승예약제도 시행 안내
                    <ul className='txt'>
                        <li>- 오랜시간 줄 서기가 어려운 일부 장애인 손님들의 이용을 돕고자 '장애인 탑승예약제'를 시행하오니
                            손님들의 많은 협조를 부탁드립니다.</li>
                    </ul></li>
                <li>최선을 다하는 근무자를 존중해 주십시오.
                    <ul className='txt'>
                        <li>- 실수나 미흡한 점이 있더라도 반말이나 욕설, 신체 접촉은 삼가 주세요.</li>
                        <li>- 건의사항은 관리자를 호출해 말씀해 주세요. (대표번호 : 031-320-5000)</li>
                    </ul></li>
            </ul>

            <div className="sub__img">
                <figure>
                    <img src={process.env.PUBLIC_URL + '/assets/images/article01_2.png'} alt="" />
                </figure></div>
        </article>
    )
}

export default Article;
const CONTENT = [
    { id: 1, title: "이용 가이드", dec: "스마트 줄서기 이용가이드", link: "/a" },
    { id: 2, title: "모바일 오더", dec: "편하고 여유있게 즐기세요", link: "/a" },
    { id: 3, title: "기프트 카드", dec: "마음을 담아 선물하세요", link: "/a" },
    { id: 4, title: "스마트 예약", dec: "유모차, 웨건 스마트예약", link: "/a" },
]

const MainContent = () => {
    return (
        <section className="MainContent csc">
            <h2>편리함 가득 , 에버랜드 </h2>
            <p>에버랜드에서 만날 수 있는 편리한 헤택을 만나보세요.</p>
            <div className="inner">
                {
                    CONTENT.map(content => {
                        return (
                            <figure key={content.id}>
                                <div className="box">
                                    <img src={process.env.PUBLIC_URL + "/assets/images/section1_" + content.id + ".PNG"} alt="" />
                                </div>
                                <div className="tit">{content.title}</div>
                                <div className="dec">{content.dec}</div>
                                <a href={content.link} className="cbtn">자세히 보기</a>
                            </figure>
                        )
                    })
                }
            </div>
        </section>
    )
}
export default MainContent;
const PROM = [
    { id: 1, category: "할인/프로모션", title: "가입 프로모션", date: "10월 연간이용권", link: "/", src: "/assets/images/prom01.jpg" },
    { id: 2, category: "할인/프로모션", title: "방문 이벤트", date: "연간이용손님", link: "/", src: "/assets/images/prom02.jpg" },
    { id: 3, category: "할인/프로모션", title: "가입 프로모션", date: "9월 연간이용권", link: "/", src: "/assets/images/prom03.jpg" },
    { id: 4, category: "이벤트", title: "가입 프로모션", date: "8월 연간이용권", link: "/", src: "/assets/images/prom04.jpg" },
    { id: 5, category: "이벤트", title: "당첨자 발표", date: "에버랜드 방문 이벤트", link: "/", src: "/assets/images/prom05.jpg" },
    { id: 6, category: "이벤트", title: "연간이용권 할인 안내", date: "사랑단 가입자", link: "/", src: "/assets/images/prom06.jpg" },

]


const Prom = () => {
    return (
        <section className="Prom">


            <div className="inner">
                {
                    PROM.map(PROM => {
                        return (
                            <figure key={PROM.id}>
                                <a href={PROM.link}>
                                    <div className="box">
                                        <img src={process.env.PUBLIC_URL + PROM.src} alt={PROM.title} />
                                    </div>
                                    <strong>{PROM.category}</strong>
                                    <div className="title">{PROM.title}</div>
                                    <span>{PROM.date}</span>
                                </a>
                            </figure>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Prom;
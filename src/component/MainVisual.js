import { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";

const SLIDE = [
    { id: 1, content: "HAPPY\n HALLOWEEN ", desc: "2022. 09. 02 ~ 2022. 11. 20", link: "https://www.everland.com/pick/2022/happy_halloween/web/index.html" },
    { id: 2, content: "PHOTO ZONE !", desc: "에버랜드 포토존을 찾으세요", link: "https://www.everland.com/pick/2022/happy_halloween/web/index.html" },
    { id: 3, content: "T - EXPRESS", desc: "스마트 예약으로 누구보다 빠르게", link: "https://www.everland.com/pick/2022/happy_halloween/web/index.html" }]

const SLIDE02 = [
    { id: 4, content: "HAPPY\nHALLOWEEN", desc: "2022. 09. 02 ~ 2022. 11. 20", link: "https://www.everland.com/pick/2022/happy_halloween/web/index.html" },
    { id: 5, content: "HAPPY\nHALLOWEEN", desc: "2022. 09. 02 ~ 2022. 11. 20", link: "https://www.everland.com/pick/2022/happy_halloween/web/index.html" },
    { id: 6, content: "HAPPY\nHALLOWEEN", desc: "2022. 09. 02 ~ 2022. 11. 20", link: "https://www.everland.com/pick/2022/happy_halloween/web/index.html" }]





const MainVisual = () => {
    const [IDX, setIDX] = useState();
    useEffect(() => {
        setIDX(0)
    }, []);
    const mainSlide = useRef(null);
    const setting = {

        arrows: false,
        //dots: true,
        afterChange: index => setIDX(index),
        autoplay: false,
        autoplaySpeed: 2000,
        speed: 2000
        // fade: true,
    };
    const rs = useRef(null);
    const setting02 = {

        arrows: false,
        //dots: true,
        afterChange: index => setIDX(index),
        autoplay: false,
        autoplaySpeed: 1900,
        speed: 1900
        // fade: true,
    };

    const LS = useRef();
    const RS = useRef();

    const [LSS, setLSS] = useState();
    const [RSS, setRSS] = useState();

    useEffect(() => {
        setLSS(LS.current);
        setRSS(RS.current);
    }, [])

    return (
        <section className='MainVisual'>
            <ul>
                <li>
                    <Slider {...setting} ref={LS} asNavFor={RSS}>
                        {
                            SLIDE.map((slide, idx) => {
                                return (
                                    <figure key={slide.id} className={'itm0' + slide.id + (idx === IDX ? ' on' : '')}>
                                        <div className="inner">
                                            <p className='tit'>{slide.content}</p>
                                            <div className='des'>{slide.desc}</div>
                                            <a href={slide.link} target="_blank" className='cbtn'>
                                                VIEW MORE
                                            </a>
                                        </div>
                                    </figure>
                                )
                            })
                        }
                    </Slider>
                </li>
                <li>
                    <Slider {...setting02} ref={RS} asNavFor={LSS}>
                        {
                            SLIDE02.map((slide, idx) => {
                                return (
                                    <figure key={slide.id} className={'itm0' + slide.id + (idx === IDX ? ' on' : '')}>



                                    </figure>
                                )
                            })
                        }
                    </Slider>
                </li>
                <div className="slideNum">
                    0{IDX + 1}<span> / 0{SLIDE.length}</span>
                </div>
                <ul className="slideTab">
                    {
                        SLIDE.map((dots, idx) => {
                            return (
                                <li key={dots.id} className={idx === IDX ? ' on' : ''} onClick={() => mainSlide.current.slickGoTo(idx)}>{dots.title}</li>
                            )
                        })
                    }
                </ul>
                <div className="slideArrows">
                    <button onClick={() => LS.current.slickPrev()}><i className='xi-arrow-left'></i></button>

                    <button onClick={() => LS.current.slickNext()}><i className='xi-arrow-right'></i></button>

                </div>
            </ul>
            {/* <div className='Main_obj01'>
                <figure><img src={process.env.PUBLIC_URL + "/assets/images/main_obj1.png"} alt="" /></figure></div>
            <div className='Main_obj02'>
                <figure><img src={process.env.PUBLIC_URL + "/assets/images/main_obj3.png"} alt="" /></figure></div>
            <div className='Main_obj03'>
                <figure><img src={process.env.PUBLIC_URL + "/assets/images/main_obj4.png"} alt="" /></figure></div> */}
        </section>
    )
}

export default MainVisual;
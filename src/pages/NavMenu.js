import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const NAVLINK = [
    { content: "이용정보", link: "/sub01" },
    { content: "요금&프로모션", link: "/sub02" },
    { content: "즐길거리", link: "/sub03" },
    { content: "멤버십", link: "/sub04" },
]
const NavMenu = () => {
    return (
        <ul>
            {
                NAVLINK.map((it, idx) => {
                    return (
                        <li key={idx}><NavLink to={it.link}>{it.content}</NavLink></li>
                    )
                })
            }
        </ul>
    )
}

export default NavMenu
import React from 'react';
import Article03 from './Article03';
import Aside from './Aside';
import '../Subpage.scss'
const Sub03 = ({ content }) => {
    const num = 2;
    return (
        <div className='Subpage'>
            <div className="nav__bar">
                <div className="inner">{content[num].tit} / {content[2].tit}</div>
            </div>
            <div className="inner sub">
                <Article03 content={content} num={num} />
                <Aside />
            </div>
        </div>
    )
}

export default Sub03
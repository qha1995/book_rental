import React from 'react'
import Prom from './Prom';


const Article = ({ content, num }) => {
    return (
        <article className='Article'>
            <div className="tit">
                <strong>{content[num].tit}</strong>&nbsp;&nbsp; / &nbsp;&nbsp;{content[3].tit}
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

       

        </article>
    )
}

export default Article;
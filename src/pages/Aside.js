import React from 'react'
import NavMenu from './NavMenu'

const Aside = () => {
    return (
        <aside>
            <div className="aside__lnb">
                <NavMenu />
            </div>

            <div className="aside__customer">
                <img src={process.env.PUBLIC_URL + '/assets/images/sub_logo.png'} alt="" />
                <p>
                    <strong>전화문의 051-331-3354 </strong>
                    <hr />
                    <span>e-mail : qha1995@github.io</span>
                </p>
            </div>
        </aside>
    )
}

export default Aside
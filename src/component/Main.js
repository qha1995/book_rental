import React from 'react';
import MainVisual from './MainVisual';
import MainContent from './MainContent';
import Portfolio from './Portfolio';
import News from './News';
import Promotion from './Promotion';

import '../css/Main.scss';

const Main = () => {

    return (
        <main className='Main'>
            <MainVisual />
            <MainContent />
            <Portfolio />
            <News />
            <Promotion />
        </main>
    )
}

export default Main


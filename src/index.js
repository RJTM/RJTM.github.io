import React from 'react';
import ReactDOM from 'react-dom';
import styles from './styles/globals.scss';
import { StickyContainer } from 'react-sticky';

import Header from './header/header.component.jsx';
import About from './about/about.component.jsx';

ReactDOM.render(
    <StickyContainer>
        <Header />
        <About />
        <div className="fill"></div>
    </StickyContainer>, document.getElementById('root'));
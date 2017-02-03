import React from 'react';
import {} from './header.scss';
import Reveal from 'react-reveal';
import 'animate.css/animate.css';
import { StickyContainer, Sticky } from 'react-sticky';
import { Link } from 'react-scroll';

export default class Header extends React.Component {

    render() {
        return (
            <div className="header">
                <div className="contact-info">
                    <a href="mailto:rjtm1992@gmail.com">rjtm1992@gmail.com</a>
                    <a href="tel:+584141271146">+584141271146</a>
                    <a href="#">Download PDF</a>
                </div>
                <Reveal effect="animated fadeInUp" className="header-container">
                    <h1><span className="light">Full-stack</span> Developer</h1>
                </Reveal>
                <Sticky className="sticky" stickyClassName="sticked">
                    <div className="nav">
                        <h2>Ricardo Montero <span className="light">(rjtm)</span></h2>
                        <ul className="nav-links">
                            <li>
                                <Link to="about" spy={true} smooth={true} offset={-50}>About</Link></li>
                            <li>Experience</li>
                            <li>Skills</li>
                            <li>Education</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </Sticky>
            </div>
        );
    }
}
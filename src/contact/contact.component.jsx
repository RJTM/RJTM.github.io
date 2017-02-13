import React from 'react';
import {} from './contact.scss';
import Reveal from 'react-reveal';
import 'animate.css/animate.css';
import { Element } from 'react-scroll';

export default class Education extends React.Component {
    render() {

        return (
            <Element className="section section-black contact" name="contact">
                <div className="left-section">
                    <Reveal effect="animated slideInUp">
                        <h2>Contact me</h2>
                        <i className="material-icons">email</i>
                    </Reveal>
                </div>
                <div className="right-section">
                    <Reveal effect="animated slideInUp">
                        <a href="mailto:rjtm1992@gmail.com" className="mail">
                            rjtm1992@gmail.com
                        </a>
                        <a href="https://www.linkedin.com/in/rjtm1992" target="_blank">
                            <img src={require('./linkedin.png')} alt="LinkedIn"/>
                        </a>
                        <a href="https://github.com/rjtm" target="_blank">
                            <img src={require('./github.png')} alt="Github"/>
                        </a>
                        <a href="/resume.pdf" className="pdf-download" download="RicardoMontero.pdf">
                            <i className="material-icons">file_download</i>
                        </a>
                    </Reveal>
                </div>
                <div className="bottom-text">
                    Ricardo Montero 2017
                </div>
            </Element>
        );
    }
}
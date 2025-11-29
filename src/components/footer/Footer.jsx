import React from 'react';
import "./footer.css";

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">M Raffa Izzel Hendro</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>
                    <li>
                        <a href="#portofolio" className="footer__link">Project</a>
                    </li>
                    <li>
                        <a href="#testi" className="footer__link">Testimonial</a>
                    </li>
                </ul>


                <div className="footer__social">
                        <a href="https://www.instagram.com/raffahmii?igsh=MWpwdTQwdjJhdGJndw==" className="footer__social-link" target="_blank">
                            <i className="bx bxl-instagram"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/m-raffa-izzel-hendro-190302371?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="footer__social-link" target="_blank">
                            <i className="bx bxl-twitter"></i>
                        </a>
                        <a href="https://github.com/Raffahmii" className="footer__social-link" target="_blank">
                            <i className="bx bxl-github"></i>
                        </a>
                </div>

                <span className='footer__copy'>
                    &#169; M Raffa Izzel H. All rigths reverved
                </span>
            </div>
        </footer>
    )
}

export default Footer
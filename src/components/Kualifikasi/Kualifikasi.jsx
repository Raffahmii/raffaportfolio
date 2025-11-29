import React, { useState } from 'react';
import "./kualifikasi.css"

const Kualifikasi = () => {
        const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };
    return (
        <section className="kualifikasi section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My Personal Journey</span>

            <div className="kualifikasi__container container">
                <div className="kualifikasi__tabs">
                    <div className={toggleState === 1 ? "kualifikasi__button kualifikasi__active button--flex" : "kualifikasi__button button--flex"}
                    onClick={() => toggleTab(1)}
                    >
                        <i className="uil uil-graduation-cap kualifikasi__icon"></i>
                        Education
                    </div>

                    <div className={toggleState === 2 ? "kualifikasi__button kualifikasi__active button--flex" : "kualifikasi__button button--flex"}
                    onClick={() => toggleTab(2)}
                    >
                        <i className="uil uil-briefcase-alt kualifikasi__icon"></i>
                        Experience
                    </div>
                </div>
                <div className="kualifikasi__sections">
                    <div className={toggleState === 1 ? "kualifikasi__content kualifikasi__content-active" : "kualifikasi__content"}>
                        <div className="kualifikasi__data">
                            <div>
                                <h3 className="kualifikasi__title">SMKN 1 Banjar</h3>
                                <span className="kualifikasi__subtitle">
                                    Rekayasa Perangkat Lunak
                                </span>
                                <div className="kualifikasi__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    2024 - 2027
                                </div>
                            </div>

                            <div>
                                <span className="kualifikasi__rounder"></span>
                                <span className="kualifikasi__line"></span>
                            </div>
                        </div>

                        <div className="kualifikasi__data">
                            <div></div>

                            <div>
                                <span className="kualifikasi__rounder"></span>
                                <span className="kualifikasi__line"></span>
                            </div>

                            <div>
                                <h3 className="kualifikasi__title">SMPN 1 Banjar</h3>
                                <span className="kualifikasi__subtitle">
                                    ???
                                </span>
                                <div className="kualifikasi__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    2021 - 2023
                                </div>
                            </div>
                        </div>

                        <div className="kualifikasi__data">
                            <div>
                                <h3 className="kualifikasi__title">SDN 1 Banjar</h3>
                                <span className="kualifikasi__subtitle">
                                    ???
                                </span>
                                <div className="kualifikasi__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    2015 - 2021
                                </div>
                            </div>

                            <div>
                                <span className="kualifikasi__rounder"></span>
                                <span className="kualifikasi__line"></span>
                            </div>
                        </div>

                        <div className="kualifikasi__data">
                            <div></div>

                            <div>
                                <span className="kualifikasi__rounder"></span>
                                <span className="kualifikasi__line"></span>
                            </div>

                            <div>
                                <h3 className="kualifikasi__title">TK Tunas Islam</h3>
                                <span className="kualifikasi__subtitle">
                                    ???
                                </span>
                                <div className="kualifikasi__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    2013 - 2015
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className={toggleState === 2 ? "kualifikasi__content kualifikasi__content-active" : "kualifikasi__content"}>
                        <div className="kualifikasi__data">
                            <div>
                                <h3 className="kualifikasi__title">Data Analyst Project</h3>
                                <span className="kualifikasi__subtitle">
                                    Personal Project
                                </span>
                                <div className="kualifikasi__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    2024 - Present
                                </div>
                            </div>

                            <div>
                                <span className="kualifikasi__rounder"></span>
                                <span className="kualifikasi__line"></span>
                            </div>
                        </div>

                        <div className="kualifikasi__data">
                            <div></div>

                            <div>
                                <span className="kualifikasi__rounder"></span>
                                <span className="kualifikasi__line"></span>
                            </div>

                            <div>
                                <h3 className="kualifikasi__title">Machine Learning Mini projects</h3>
                                <span className="kualifikasi__subtitle">
                                    Self-Learning
                                </span>
                                <div className="kualifikasi__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    2024 - Present
                                </div>
                            </div>
                        </div>

                        <div className="kualifikasi__data">
                            <div>
                                <h3 className="kualifikasi__title">Tiktok Affiliate Creator</h3>
                                <span className="kualifikasi__subtitle">
                                    Marketing & Content
                                </span>
                                <div className="kualifikasi__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    2024 - 2025
                                </div>
                            </div>

                            <div>
                                <span className="kualifikasi__rounder"></span>
                                <span className="kualifikasi__line"></span>
                            </div>
                        </div>

                        <div className="kualifikasi__data">
                            <div></div>

                            <div>
                                <span className="kualifikasi__rounder"></span>
                                <span className="kualifikasi__line"></span>
                            </div>

                            <div>
                                <h3 className="kualifikasi__title">Data Enthusiast</h3>
                                <span className="kualifikasi__subtitle">
                                    Continuous Learn in Data & Tech
                                </span>
                                <div className="kualifikasi__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    2024 - Present
                                </div>
                            </div>
                        </div>

                        <div className="kualifikasi__data">
                            <div>
                                <h3 className="kualifikasi__title">Band Extracurricular Member</h3>
                                <span className="kualifikasi__subtitle">
                                    Teamwork & Discipline
                                </span>
                                <div className="kualifikasi__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    2023 - Present
                                </div>
                            </div>

                            <div>
                                <span className="kualifikasi__rounder"></span>
                                <span className="kualifikasi__line"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        
    )
}

export default Kualifikasi
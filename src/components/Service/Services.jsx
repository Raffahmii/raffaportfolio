import React, { useState } from "react";
import "./services.css";

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (
        <section className="services section" id="services">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What I Offer</span>

            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                        <i className="uil uil-database services__icon"></i>
                        <h3 className="services__title">
                            Data <br /> Cleaning
                        </h3>
                    </div>
                    <span className="services__button" onClick={() => toggleTab(1)}>
                        View More
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>
                    <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                            <h3 className="services__modal-title">Data Cleaning</h3>
                            <p className="services__modal-description">Membersihkan, merapikan, dan menyiapkan dataset agar siap dianalisis. termasuk remove duplicates, missing values handling, dan transform data.</p>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon">
                                    </i>
                                        <p className="services__modal-info">Pandas Cleaning</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon">
                                    </i>
                                        <p className="services__modal-info">Excel Cleaning</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon">
                                    </i>
                                        <p className="services__modal-info">Data Formatting</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon">
                                    </i>
                                        <p className="services__modal-info">Quality Checking</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-analysis services__icon"></i>
                        <h3 className="services__title">
                            Exploratory Data <br /> Analyst (EDA)
                        </h3>
                    </div>
                    <span className="services__button" onClick={() => toggleTab(2)}>
                        View More
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>
                    <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                            <h3 className="services__modal-title">
                                Exploratory Data Analyst (EDA)
                            </h3>
                            <p className="services__modal-description">Mengidentifikasi pola, tren, outlier, dan insight wal dataset menggunakan teknik analisis dasar.</p>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon">
                                    </i>
                                        <p className="services__modal-info">Descriptive Statistics</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon">
                                    </i>
                                        <p className="services__modal-info">Correlation Analysis</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon">
                                    </i>
                                        <p className="services__modal-info">Pattern Identification</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon">
                                    </i>
                                        <p className="services__modal-info">Data Summary</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-illustration services__icon"></i>
                        <h3 className="services__title">
                            Data <br /> Visualization
                        </h3>
                    </div>
                    <span className="services__button" onClick={() => toggleTab(3)}>
                        View More 
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>
                    <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                            <h3 className="services__modal-title">Data Visualization</h3>
                            <p className="services__modal-description">Membuat grafik dan visualisasi yang jeals dan informatif untuk menyampaikan insight secara efektif.</p>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon">
                                    </i>
                                        <p className="services__modal-info">Matplotlib Chart</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon">
                                    </i>
                                        <p className="services__modal-info">Visual Storytelling</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon">
                                    </i>
                                        <p className="services__modal-info">Trend Visualization</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon">
                                    </i>
                                        <p className="services__modal-info">Simple Dashboard</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-analytics services__icon"></i>
                        <h3 className="services__title">
                            Excel <br /> Analysis
                        </h3>
                    </div>
                    <span className="services__button" onClick={() => toggleTab(4)}>
                        View More
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>
                    <div className={toggleState === 4 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                            <h3 className="services__modal-title">Excel Analysis</h3>
                            <p className="services__modal-description">Analysis data menggunakan Excel dengan formula, pivot, dan visualisasi yang embantu pengambilan keputusan.</p>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon">
                                    </i>
                                        <p className="services__modal-info">Pivot Table</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon">
                                    </i>
                                        <p className="services__modal-info">Excel Formulas</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon">
                                    </i>
                                        <p className="services__modal-info">Sorting & Filtering</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon">
                                    </i>
                                        <p className="services__modal-info">Excel Charts</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-statistics services__icon"></i>
                        <h3 className="services__title">
                            Basic <br /> Statistics
                        </h3>
                    </div>
                    <span className="services__button" onClick={() => toggleTab(5)}>
                        View More
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>
                    <div className={toggleState === 5 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                            <h3 className="services__modal-title">Basic Statistics</h3>
                            <p className="services__modal-description">Analysis statistik dasar untuk memahami distribusi data dan hubungan antarvariabel</p>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon">
                                    </i>
                                        <p className="services__modal-info">Mean, Median, Mode.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon">
                                    </i>
                                        <p className="services__modal-info">Variance & Standar Deviation</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon">
                                    </i>
                                        <p className="services__modal-info">Correlation</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon">
                                    </i>
                                        <p className="services__modal-info">Basic Probability</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-robot services__icon"></i>
                        <h3 className="services__title">
                            Simple Machine <br /> Learn Models
                        </h3>
                    </div>
                    <span className="services__button" onClick={() => toggleTab(6)}>
                        View More
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>
                    <div className={toggleState === 6 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                            <h3 className="services__modal-title">Simple Machine Learn Models</h3>
                            <p className="services__modal-description">Membangun model machine learning sederhana untuk prediksi dan klasifikasi dasar menggunakan skicit-learn.</p>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon">
                                    </i>
                                        <p className="services__modal-info">Train - Test Split</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon">
                                    </i>
                                        <p className="services__modal-info">Liner Regression</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon">
                                    </i>
                                        <p className="services__modal-info">Basic Classification</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon">
                                    </i>
                                        <p className="services__modal-info">Model Evaluation</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services
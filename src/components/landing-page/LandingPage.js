import React from 'react';
import { useNavigate } from 'react-router-dom';

import LogoColouredLandscape from '../../assets/images/LogoColouredLandscape.png';
import LogoWhiteLandscape from '../../assets/images/LogoWhiteLandscape.png';
import GreatMinds from '../../assets/images/Working Minds.png';
import Stress from '../../assets/images/Stress.png';
import Mental from '../../assets/images/Mental.jpg';
import Burnout from '../../assets/images/Burnout.jpg';
import Competition from '../../assets/images/Competition.jpg';
import Resource from '../../assets/images/Resource.jpg';
import Schedule from '../../assets/images/Schedule.jpg';
import Self from '../../assets/images/Self Awarness.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Footer from '../../assets/images/Footer.png';



import '../../styles/pages/LandingPage.css';

const LandingPage = () => {

    const navigate = useNavigate();
    const handleNavigation = () => {
        navigate('/auth/login');
    }

    return (
        <div className='landingPage'>
            <div data-collapse="medium" data-animation="default" data-duration="400" data-easing="ease-in-quart"
                data-easing2="ease-out-quart" role="banner" className="navbar w-nav">
                <div className="container nav w-container">
                    <div className="logo-wrapper"><img
                        src={LogoColouredLandscape}
                        loading="lazy" width="160" alt="Relaxer Logo" /></div>
                    <div className="nav-wrapper">
                        <nav role="navigation" glass='2' className="nav-menu w-nav-menu">
                            <a href="#feature"
                                className="nav-link w-inline-block">
                                <div>Features</div>
                            </a>

                            <a href="#Benefits" className="nav-link w-inline-block">
                                <div>Benefits</div></a>
                            <a href="#EAP" className="nav-link w-inline-block">
                                <div>EAP</div></a>
                        </nav>

                        <a href="#"
                            className="button mobile w-button" onClick={handleNavigation}><span className="free-copy-switch">Sign In</span> </a>
                        <div className="menu-button w-nav-button">
                            <div className="icon w-icon-nav-menu"></div>
                        </div>
                    </div>
                </div>


            </div>

            <div className="top-curves-wrapper">
                <div style={{ transform: "translate3d(0, 0, 0) scale3d(1, 0.172, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", transform: "translate3d(0, 0, 0) scale3d(1, 0.172, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 0.172, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1, 0.172, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" }}
                    className="top-curve-background"></div>
                <div style={{ transform: "translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", transform: "translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" }}
                    className="background-curve-fill-block"></div>
                <div style={{ transform: "translate3d(0, 0, 0) scale3d(4, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", transform: "translate3d(0, 0, 0) scale3d(4, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(4, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(4, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" }}
                    className="top-curve-foreground"></div>
            </div>

            <main className="main">
                <header id="Introduction" className="header wf-section">
                    <div className="container w-container">
                        <div className="w-layout-grid grid-two introduction">
                            <div className="introduction-headings">
                                <h1>Future of Workplace</h1>
                                <p className="subheading">A digital platform tailored for your Cognitive Wellness.</p>
                            </div><img
                                src={GreatMinds}
                                loading="lazy" id="w-node-_749094cd-3351-73b1-4786-0f89e0b5a528-0862c5d4"
                                alt="Fun " className="introduction-illustration move-up-img"
                                width={200} />
                        </div>
                    </div>
                </header>

                <section id="MHFA" className="xl-gap wf-section">
                    <div className="container w-container">
                        <div className="w-layout-grid grid-two"><img
                            src={Stress}
                            loading="lazy" alt="A man stressed because of his job"  width={400}/>
                            <div>
                                <p className="employee-fontSize" style={{color: 'rgb(167, 4, 167)'}}><strong>Over 3 in 4 full-time employees report experiencing at least one symptom of a mental health condition.</strong></p>
                                <p>The pressures of today’s economic climate, global uncertainty, and post-pandemic realities have made mental well-being more essential than ever. Stress, anxiety, and burnout are no longer isolated issues—they’re widespread challenges affecting the workforce at every level. Now is the time for accessible, comprehensive mental health support that meets people where they are, whenever they need it.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="problem" className="xl-gap wf-section">
                    <div className="container w-container">
                        <h2>Mental health care for today’s workforce</h2>
                        <p>
                             <span className="cite"> —  Employee well-being isn’t just a perk — it’s a business priority.</span> 
                                <br/>  Relaxer helps employees manage stress, anxiety, depression, and other mental health challenges with practical, evidence-based support. Our comprehensive platform empowers individuals to reduce work-related stress, improve emotional well-being, and build a healthier work-life balance — all in one accessible, easy-to-use app.<br />
                                <br /> 
                            <span className="cite">—  Support your team with the tools they need to feel better and perform better.</span>
                                <br />Relaxer helps employees who are struggling with stress, anxiety, depression, or other mental health issues to manage their symptoms and improve their overall well-being. Our application provides employees with a comprehensive solution to reduce work stress, manage their mental health and well-being, and implement a positive work-life balance.<br /><br />
                            <span className="cite">— Your Path to a Healthier Mind Starts Here.</span>
                                <br />Relaxer is designed for individuals committed to improving their mental health, overall well-being, and building lasting, positive habits. Whether you're managing daily stress or working toward long-term wellness goals, Relaxer offers the tools and guidance to help you thrive<span className="cite"></span></p>
                    </div>
                </section>

                <section id="feature" className="l-gap">
                    <div className="container w-container">
                        <h2 >Support That Fits Your Life</h2>
                        <div className="w-layout-grid grid-four" style={{ marginTop: '60px' }}>
                            <div id="w-node-_5e6b692d-801f-8c96-0952-0b35636ec606-0862c5d4" className="relative organic-wrapper">
                                <div data-w-id="c34f6110-7ab3-36b4-dd32-6fe61dbf3389"
                                    style={{ transform: "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)", transform: "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)", transform: "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)" }}
                                    className="organic-background"></div>
                                <div data-w-id="7edbff0e-4c3e-183b-2fbd-66ddb5d69d0f"
                                    style={{ transform: "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(50deg) skew(0, 0)", transform: "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(50deg) skew(0, 0)", transform: "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(50deg) skew(0, 0)", transform: "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(50deg) skew(0, 0)" }}
                                    className="organic-foreground tips"></div>
                                <div className="organic circle therapy"></div>
                            </div>
                            <div>
                                <h2>Expert Help, Just a Conversation Away</h2>
                                <p>Whether it’s stress, anxiety, or work-life challenges, connect with expert support to help you feel better and stay productive.</p>
                            </div>
                            <div id="w-node-_14eda021-b872-0191-e91a-ec9c158f5fd5-0862c5d4" className="relative organic-wrapper">
                                <div data-w-id="14eda021-b872-0191-e91a-ec9c158f5fd6"
                                    style={{ transform: "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)", transform: "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)", transform: "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)", transform: "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)" }}
                                    className="organic-background tips"></div>
                                <div data-w-id="14eda021-b872-0191-e91a-ec9c158f5fd7"
                                    style={{ transform: "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(50deg) skew(0, 0)", transform: "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(50deg) skew(0, 0)", transform: "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(50deg) skew(0, 0)", transform: "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(50deg) skew(0, 0)" }}
                                    className="organic-foreground tips"></div>
                                <div className="organic circle goals"></div>
                            </div>
                            <div>
                                <h2>Track Your Progress. Elevate Your Wellness.</h2>
                                <p>Stay on top of your well-being by monitoring daily habits. Because small steps lead to big changes.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="xl-gap">
                    <div className="container w-container">
                        <div className="w-layout-grid grid-four" style={{ marginTop: '60px' }}>
                            <div id="w-node-_5e6b692d-801f-8c96-0952-0b35636ec606-0862c5d4" className="relative organic-wrapper">
                                <div data-w-id="c34f6110-7ab3-36b4-dd32-6fe61dbf3389"
                                    style={{ transform: "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)", transform: "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)", transform: "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)" }}
                                    className="organic-background"></div>
                                <div data-w-id="7edbff0e-4c3e-183b-2fbd-66ddb5d69d0f"
                                    style={{ transform: "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(50deg) skew(0, 0)", transform: "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(50deg) skew(0, 0)", transform: "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(50deg) skew(0, 0)", transform: "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(50deg) skew(0, 0)" }}
                                    className="organic-foreground tips"></div>
                                <div className="organic circle question"></div>
                            </div>

                            <div>
                                <h2>Understand Your Mind. One Question at a Time.</h2>
                                <p>Gain valuable insights into your mental health — and take control with greater self-awareness.</p>
                            </div>
                            <div id="w-node-_14eda021-b872-0191-e91a-ec9c158f5fd5-0862c5d4" className="relative organic-wrapper">
                                <div data-w-id="14eda021-b872-0191-e91a-ec9c158f5fd6"
                                    style={{ transform: "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)", transform: "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)", transform: "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)", transform: "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)" }}
                                    className="organic-background tips"></div>
                                <div data-w-id="14eda021-b872-0191-e91a-ec9c158f5fd7"
                                    style={{ transform: "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(50deg) skew(0, 0)", transform: "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(50deg) skew(0, 0)", transform: "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(50deg) skew(0, 0)", transform: "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(50deg) skew(0, 0)" }}
                                    className="organic-foreground tips"></div>
                                <div className="organic circle relax"></div>
                            </div>
                            <div>
                                <h2>Take a Break. Recharge Your Mind.</h2>
                                <p>Because a few peaceful moments during your day can make a big difference in your mental well-being. </p>
                            </div>
                        </div>

                        <br/><p style={{textAlign: "right"}}>and much more . . . .</p>
                    </div>
                </section>

                <section id="Benefits" className="xl-gap wf-section">
                    <div className="container w-container">
                        <h2>Everything Your Team Needs, In One Place</h2>
                        <div className="w-layout-grid grid-three">
                            <div className="feature-wrapper"><img
                                src={Mental}
                                width="180" height="180" alt="Mental health &amp; wellbeing training" />
                                <h3 style={{color: 'rgb(167, 4, 167)'}}> Improved mental health </h3>
                                <p>App offers self-assessment tools and access to mental health resources and support providers to improve the user's mental health.</p>
                            </div>
                            <div className="feature-wrapper"><img
                                src={Schedule}
                                width="180" height="180" alt="Tangible business benefits" />
                                <h3 style={{color: 'rgb(167, 4, 167)'}}>Achieve health goals and track progress </h3>
                                <p>Improves mental health by promoting target change strategies, self-care goals, reminders and progress tracking through an interactive dashboard.</p>
                            </div>
                            <div className="feature-wrapper"><img
                                src={Competition}
                                width="180" height="180" alt="Positive training experience" />
                                <h3 style={{color: 'rgb(167, 4, 167)'}}> Encourages healthy competition</h3>
                                <p>The leaderboard is an effective way to track progress, set goals and promote a culture of support and accountability for employees' mental health.</p>
                            </div>
                            <div className="feature-wrapper"><img
                                src={Self}
                                width="180" height="180" alt="Develop your wellbeing strategy" />
                                <h3 style={{color: 'rgb(167, 4, 167)'}}> Increase Self Awareness</h3>
                                <p>Individuals can monitor their own behaviors, be more self-aware, and be empowered to seek medical attention as they see negative trends.</p>
                            </div>
                            <div className="feature-wrapper"><img
                                src={Burnout}
                                width="180" height="180" alt="Highly experienced trainer" />
                                <h3 style={{color: 'rgb(167, 4, 167)'}}> Prevents Burnout</h3>
                                <p>By taking breaks and participating in engaging activities like mediation and exercise, the user can avoid burnout and maintain a peaceful state of mind.
                                </p>
                            </div>
                            <div className="feature-wrapper"><img
                                src={Resource}
                                width="180" height="180" alt="Safe environment" />
                                <h3 style={{color: 'rgb(167, 4, 167)'}}> Increased access to mental health resources</h3>
                                <p>Provides convenient and accessible resources to support mental health, including self-help tools, articles and  guided meditations.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="EAP" className="relative xxl-gap wf-section">

                    <div className="container w-container">
                        <h2>Take Your EAP to the Next Level with Relaxer</h2>
                        <p>Employee Assistance Programs (EAPs) are a vital part of workplace well-being, offering support for a variety of personal and professional challenges. Relaxer complements and expands your existing EAP by delivering accessible, digital mental health solutions — including online therapy, counseling, and self-guided tools — all in one easy-to-use platform. Empower your employees with the care they need, when they need it most.<br/><br />
                            — <span className="cite">Relaxer for Employee Assistance Programs</span><span className="cite"></span></p>
                    </div>
                </section>
            </main>


            <footer className="footer" style={{backgroundColor:' #e4d7df'}}>

                <div className="footer-curve-wrapper">
                    <img src={Footer} alt="Footer Curve" className="footer-curve"/>
                </div>
                <div className="container w-container">
                    <h2>
                        <img
                            src={LogoWhiteLandscape}
                            alt="Relaxer Logo" className="logo"
                            
                        />
                    </h2>
                    <div className="w-layout-grid grid-three" style={{ marginLeft: '20px' }}>

                        <div>
                            <a href="tel:(+91) 1234567890" className="footer-link">(+91) 1234567890</a>
                            <a href="#" className="footer-link">hello@relaxer.live</a>
                        </div>
                        <div className="footer-link">
                                <a href='https://www.facebook.com/'><FontAwesomeIcon icon={faFacebook} style={{ color: '#00ACD1', fontSize: '30px', margin: '30px' }} /></a>
                                <a href='https://www.instagram.com/'><FontAwesomeIcon icon={faInstagram} style={{ color: '#00ACD1', fontSize: '30px', margin: '30px' }} /></a>
                        </div>
                        <div style={{ color: 'rgb(167, 4, 167)', marginTop: '100px', marginLeft: '50px' }}>© relaxer 2025  <span style={{ color: '#00ACD1' }}> - Tanistha Panda</span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default LandingPage;
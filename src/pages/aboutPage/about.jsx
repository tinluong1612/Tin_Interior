import './about.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faPhone, faChevronRight } from '@fortawesome/free-solid-svg-icons'

function About() {
    return <div>
        <div className="about">
            {/* Banner */}
            <img
                src={`assets/img/img_aboutPage/banner-about.png`}
                width="100%"
                alt=""
                className="image-banner"
            />
            {/* Quotes */}
            <div className="pd-100 quotes">
                <div className="border-quotes">
                    <div className="fz-18 content-quotes">
                        <div className="fw content-heading">“</div>
                        <div className="fw content-body">
                            I like an interior that defies labeling. I don't really want someone
                            to walk into a room and know that I did it
                        </div>
                        <div className="f opacity content-footer">-Bunny Williams</div>
                    </div>
                </div>
            </div>
            {/* What We Do */}
            <div className="what-we-do">
                <div className="content">
                    <div className="info-content">
                        <h1>What We Do</h1>
                        <p className="fz-18 f opacity note">
                            It is a long established fact that a reader will be distracted by the
                            of readable content of a page when lookings at its layouts the points
                            of using that it has a more-or-less normal.
                        </p>
                    </div>
                    <button className="get-free-btn">
                        Our Concept
                        <div className="arrow">
                            {/* icon mui ten */}
                            <FontAwesomeIcon icon={faArrowRight} />
                        </div>
                        {/* <i className="arrow bx bx-right-arrow-alt" /> */}
                    </button>
                </div>
                <img
                    src={`assets/img/img_aboutPage/aboutUs1-about.jpg`}
                    width="35%"
                    alt=""
                    className="image"
                />
            </div>
            {/* The End Result */}
            <div className="pd-100 what-we-do">
                <img
                    src={`assets/img/img_aboutPage/aboutUs2-about.jpg`}
                    width="35%"
                    alt=""
                    className="image"
                />
                <div className="content">
                    <div className="info-content">
                        <h1>The End Result</h1>
                        <p className="fz-18 f opacity note">
                            It is a long established fact that a reader will be distracted by the
                            of readable content of a page when lookings at its layouts the points
                            of using that it has a more-or-less normal.
                        </p>
                    </div>
                    <button className="get-free-btn">
                        Our Portfolio
                        <div className="arrow">
                            {/* icon mui ten */}
                            <FontAwesomeIcon icon={faArrowRight} />
                        </div>
                        {/* <i className="arrow bx bx-right-arrow-alt" /> */}
                    </button>
                </div>
            </div>
            {/* Team */}
            <div className="content-team">
                <div className="title">
                    <h1>What the People Thinks About Us</h1>
                </div>
                <div className="members-team">
                    <div className="member">
                        <img
                            src={`assets/img/img_aboutPage/person1-about.png`}
                            alt=""
                            className="image-member-team"
                        />
                        <img
                            src={`assets/img/img_aboutPage/person2-about.png`}
                            alt=""
                            className="image-member-team"
                        />
                        <div className="image-member-team member-3">
                            <div className="info-member-3">
                                    <h2>Nattasha Julie</h2>
                                    <p className="f fz-18">Design Australia</p>

                                <div className="pd-100 social-member">
                                    <i className="social bx bxl-facebook" />
                                    <i className="social bx bxl-twitter" />
                                    <i className="social bx bxl-linkedin" />
                                    <i className="social bx bxl-instagram" />
                                </div>
                                <div className="f fz-18 contact-member">
                                    <p>+1 (378) 400-1234</p>
                                    <p>julie@email.com</p>
                                </div>
                            </div>
                        </div>
                        <img
                            src={`assets/img/img_aboutPage/person3-about.png`}
                            alt=""
                            className="image-member-team"
                        />
                    </div>
                </div>
            </div>
            {/* Mail Box */}
            <div className="mail-box">
                <h1 className="title">Creative project? Let's have a productive talk.</h1>
                <div className="fz-18 info-mail">
                    <div className="info-user">
                        <input type="text" name="" placeholder="Name" id="" />
                        <input type="text" name="" placeholder="Email" id="" />
                    </div>
                    <input
                        type="text"
                        name=""
                        placeholder="Hello Iam Intrested in.."
                        id=""
                        className="note-input"
                    />
                </div>
                <button className="mg-auto get-free-btn">
                    Send Now
                    <div className="arrow">
                        {/* icon mui ten */}
                        <FontAwesomeIcon icon={faArrowRight} />
                    </div>
                    {/* icon mui ten */}
                    {/* <i className="arrow bx bx-right-arrow-alt" /> */}
                </button>
            </div>
        </div>

    </div>;
}

export default About;
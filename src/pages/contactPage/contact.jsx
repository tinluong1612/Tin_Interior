import './contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight, faPhone, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

function Contact() {
    return <div>
        <div className="contact-page">
            <div className="banner">
                <img
                    src={`assets/img/img_contactPage/banner-contact.jpg`}
                    width="100%"
                    alt=""
                />
                <div className="banner-text">
                    <h1>Contact Us</h1>
                    <p className="f fz-18">Home / Contact</p>
                </div>
            </div>
            <div className="body-contact">
                <h1>We love meeting new people and helping them.</h1>
                <div className="contact-form">
                    <div className="contact-left">
                        <div className="fz-18 info-contact-left">
                            {/* <i className="bx bx-envelope icon-social-contact" /> */}
                            <FontAwesomeIcon className='icon-social-contact' icon={faEnvelope} />
                            <p className="f fz-18 mgl-20">info@yourdomain.com</p>
                        </div>
                        <div className="info-contact-left">
                            {/* <i className="bx bx-phone icon-social-contact" /> */}
                            <FontAwesomeIcon className='icon-social-contact' icon={faPhone} />
                            <p className="f fz-18 mgl-20">+1 (378) 400-1234</p>
                        </div>
                        <div className="info-contact-left">
                            {/* <i className="bx bx-world icon-social-contact" /> */}
                            <FontAwesomeIcon className='icon-social-contact' icon={faGlobe} />
                            <p className="f fz-18 mgl-20">www.yourdomain.com</p>
                        </div>
                        <div className="mgt-20 social">

                            <a href="#" className='icon-social'>
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                            <a href="#" className='icon-social'>
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                            <a href="#" className='icon-social'>
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                            <a href="#" className='icon-social'>
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                        </div>
                    </div>
                    <div className="contact-right">
                        <div className="fz-18 info-mail">
                            <div className="info-user">
                                <input
                                    className="outline" type="text" name="" placeholder="Name" id=""
                                />
                                <input
                                    className="outline" type="text" name="" placeholder="Email" id=""
                                />
                            </div>
                            <div className="info-user">
                                <input className="outline" type="text" name="" placeholder="Subject" id=""
                                />
                                <input
                                    className="outline" type="text" name="" placeholder="Phone" id=""
                                />
                            </div>
                            <input
                                type="text" name="" placeholder="Hello Iam Intrested in.." id=""
                                className="outline note-input"
                            />
                        </div>
                        <button className="float-right get-free-btn">
                            Send Now
                            <div className="arrow">
                                <FontAwesomeIcon icon={faArrowRight} />
                            </div>
                            {/* icon mui ten */}
                            {/* <i className="arrow bx bx-right-arrow-alt" /> */}
                        </button>
                    </div>
                </div>
            </div>
        </div>

    </div>;
}

export default Contact;
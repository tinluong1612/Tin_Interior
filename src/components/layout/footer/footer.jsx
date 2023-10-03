
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';



function Footer() {
    return <div>
        <div className="col-60 footer">
            <div className="main">
                <div className="col-20 sub-content">
                    <div className="logo">
                        <img src="/src/assets/img/Logo.png" width="30px" height="30px" alt="" />
                        <div className="name">Interno</div>
                    </div>
                    <p className="slogan">
                        It is a long established fact that a reader will be distracted lookings.
                    </p>
                    <div className="social">

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
                {/* Pages */}
                <div className="col-10 page-content">
                    <h2 className="content">Pages</h2>
                    <a href="#" className="info">
                        About Us
                    </a>
                    <a href="#" className="info">
                        Our Projects
                    </a>
                    <a href="#" className="info">
                        Our Team
                    </a>
                    <a href="#" className="info">
                        Contact Us
                    </a>
                    <a href="#" className="info">
                        Services
                    </a>
                </div>
                {/* Services */}
                <div className="col-10 page-content">
                    <h2 className="content">Services</h2>
                    <a href="#" className="info">
                        Kitchan
                    </a>
                    <a href="#" className="info">
                        Living Area
                    </a>
                    <a href="#" className="info">
                        Bathroom
                    </a>
                    <a href="#" className="info">
                        Dinning Hall
                    </a>
                    <a href="#" className="info">
                        Bedroom
                    </a>
                </div>
                {/* Contact */}
                <div className="col-20 contact">
                    <h2 className="content">Contact</h2>
                    <p className="info">55 East Birchwood Ave. Brooklyn, New York 11201</p>
                    <p className="mgtd-45 info">khanhtin.luong1612@gmail.com</p>
                    <p className="mgtd-45 info">(+84) 81330 - 0435</p>
                </div>
            </div>
            {/* Coppy Right */}
            <div className="copyright">
                <hr className="line" />
                <p className="info-copyright">
                    Copyright © Interno | Designed by Victorflow Templates - Powered by
                    Webflow
                </p>
            </div>
        </div>

    </div>;
}

export default Footer;
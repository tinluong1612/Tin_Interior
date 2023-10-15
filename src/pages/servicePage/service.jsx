import './service.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function Service() {
    return <div>
        <div className="service">
            {/* Banner */}
            <img
                src="/src/assets/img/img_servicePage/banner-service.jpg"
                width="100%"
                alt=""
            />
            {/* Work */}
            <div className="all-service">
                <div className="work">
                    {/* item_1 */}
                    <div className="col-20 item">
                        <div className="sub-content-work">
                            <h2>Project Plan</h2>
                            <p>
                                There are many variations of the passages of lorem Ipsum from
                                available, majority.
                            </p>
                        </div>
                        <button className="readmore-btn">
                            Read More
                            {/* icon mui ten */}
                            <i className="arrow bx bx-right-arrow-alt" />
                        </button>
                    </div>
                    {/* item_2 */}
                    <div className="col-20 item">
                        <div className="sub-content-work">
                            <h2>Interior Work</h2>
                            <p>
                                There are many variations of the passages of lorem Ipsum from
                                available, majority.
                            </p>
                            <button className="readmore-btn">
                                Read More
                                {/* icon mui ten */}
                                <i className="arrow bx bx-right-arrow-alt" />
                            </button>
                        </div>
                    </div>
                    {/* item_3 */}
                    <div className="col-20 item">
                        <div className="sub-content-work">
                            <h2>Realization</h2>
                            <p>
                                There are many variations of the passages of lorem Ipsum from
                                available, majority.
                            </p>
                            <button className="readmore-btn">
                                Read More
                                {/* icon mui ten */}
                                <i className="arrow bx bx-right-arrow-alt" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="work">
                    {/* item_1 */}
                    <div className="col-20 item">
                        <div className="sub-content-work">
                            <h2>2d/3d Art Work</h2>
                            <p>
                                There are many variations of the passages of lorem Ipsum from
                                available, majority.
                            </p>
                        </div>
                        <button className="readmore-btn">
                            Read More
                            {/* icon mui ten */}
                            <i className="arrow bx bx-right-arrow-alt" />
                        </button>
                    </div>
                    {/* item_2 */}
                    <div className="col-20 item">
                        <div className="sub-content-work">
                            <h2>Interior Work</h2>
                            <p>
                                There are many variations of the passages of lorem Ipsum from
                                available, majority.
                            </p>
                            <button className="readmore-btn">
                                Read More
                                {/* icon mui ten */}
                                <i className="arrow bx bx-right-arrow-alt" />
                            </button>
                        </div>
                    </div>
                    {/* item_3 */}
                    <div className="col-20 item">
                        <div className="sub-content-work">
                            <h2>Decoration Work</h2>
                            <p>
                                There are many variations of the passages of lorem Ipsum from
                                available, majority.
                            </p>
                            <button className="readmore-btn">
                                Read More
                                {/* icon mui ten */}
                                <i className="arrow bx bx-right-arrow-alt" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Home We Work */}
            <div className="homewework">
                {/* Heading */}
                <div className="heading-homeww">
                    <h1>How We Work</h1>
                    <p className="fz-18 f">
                        It is a long established fact will be distracted.Lorem Ipsum is simply
                        dummy text of the printing and typesetting industry.
                    </p>
                </div>
                <div className="container">
                    {/* item-1 */}
                    <div className="item-homeww">
                        <img
                            src="/src/assets/img/img_servicePage/hww1-service.jpg"
                            alt=""
                            className="image-homeww"
                        />
                        <div className="info-item-homeww">
                            <img
                                src="/src/assets/img/img_servicePage/icon1-service.png"
                                alt=""
                                className="icon-item"
                            />
                            <h2 className="name-item">Concept &amp; Details</h2>
                            <p className="fz-18 f">
                                It is a long established fact will be distracted. Lorem Ipsum is
                                simply dummy from text of the and typesetting indufstry.{" "}
                            </p>
                        </div>
                    </div>
                    {/* item-2 */}
                    <div className="item-homeww">
                        <div className="info-item-homeww">
                            <img
                                src="/src/assets/img/img_servicePage/icon2-service.png"
                                alt=""
                                className="icon-item"
                            />
                            <h2 className="name-item">Concept &amp; Details</h2>
                            <p className="fz-18 f">
                                It is a long established fact will be distracted. Lorem Ipsum is
                                simply dummy from text of the and typesetting indufstry.{" "}
                            </p>
                        </div>
                        <img
                            src="/src/assets/img/img_servicePage/hww2-service.jpg"
                            alt=""
                            className="image-homeww"
                        />
                    </div>
                    {/* item-3 */}
                    <div className="item-homeww">
                        <img
                            src="/src/assets/img/img_servicePage/hww3-service.jpg"
                            alt=""
                            className="image-homeww"
                        />
                        <div className="info-item-homeww">
                            <img
                                src="/src/assets/img/img_servicePage/icon3-service.png"
                                alt=""
                                className="icon-item"
                            />
                            <h2 className="name-item">Concept &amp; Details</h2>
                            <p className="fz-18 f">
                                It is a long established fact will be distracted. Lorem Ipsum is
                                simply dummy from text of the and typesetting indufstry.{" "}
                            </p>
                        </div>
                    </div>
                    {/* item-4 */}
                    <div className="item-homeww">
                        <div className="info-item-homeww">
                            <img
                                src="/src/assets/img/img_servicePage/icon4-service.png"
                                alt=""
                                className="icon-item"
                            />
                            <h2 className="name-item">Concept &amp; Details</h2>
                            <p className="fz-18 f">
                                It is a long established fact will be distracted. Lorem Ipsum is
                                simply dummy from text of the and typesetting indufstry.{" "}
                            </p>
                        </div>
                        <img
                            src="/src/assets/img/img_servicePage/hww4-service.jpg"
                            alt=""
                            className="image-homeww"
                        />
                    </div>
                </div>
            </div>
            {/* Contact */}
            <div className="col-60 contact">
                <div className="heading">
                    <h1>Wanna join the interno?</h1>
                    <p>It is a long established fact will be distracted.</p>
                    <button className="contact-us">
                        Contact With Us
                        <div className="arrow-contact">
                            <FontAwesomeIcon icon={faArrowRight} />
                        </div>
                        {/* <i className="arrow-contact bx bx-right-arrow-alt" /> */}
                    </button>
                </div>
            </div>
        </div>

    </div>;
}

export default Service;
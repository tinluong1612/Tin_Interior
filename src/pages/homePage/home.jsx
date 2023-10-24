import './home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faPhone, faChevronRight } from '@fortawesome/free-solid-svg-icons'

function Home() {
  return <div>
    <div className="home-page">
      {/* Banner */}
      <div className="banner">
        <img
          src={`assets/img/img_homePage/banner-home.jpg`}
          width="100%"
          height="768px"
          alt=""
          className="image-banner"
        />
        <div className="intro">
          <div className="sub-content-banner">
            <h1 className="title-banner">Let Your Home Be Unique</h1>
            <p>
              There are many variations of the passages of lorem Ipsum
              fromavailable,variations of the passages.
            </p>
            <button className="started-btn">
              Get Started
              {/* icon mui ten */}
              <div className="arrow">
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
              {/* <i className="arrow bx bx-right-arrow-alt" /> */}
            </button>
          </div>
        </div>
      </div>
      {/* Work */}
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
            <div className="arrow">
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
            {/* <i className="arrow bx bx-right-arrow-alt" /> */}
          </button>
        </div>
        {/* item_2 */}
        <div className="col-20 item">
          <div className="sub-content-work">
            <h2 className="title-work">Interior Work</h2>
            <p>
              There are many variations of the passages of lorem Ipsum from
              available, majority.
            </p>
            <button className="readmore-btn">
              Read More
              {/* icon mui ten */}
              <div className="arrow">
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
              {/* <i className="arrow bx bx-right-arrow-alt" /> */}
            </button>
          </div>
        </div>
        {/* item_3 */}
        <div className="col-20 item">
          <div className="sub-content-work">
            <h2 className="title-work">Realization</h2>
            <p>
              There are many variations of the passages of lorem Ipsum from
              available, majority.
            </p>
            <button className="readmore-btn">
              Read More
              {/* icon mui ten */}
              <div className="arrow">
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
              {/* <i className="arrow bx bx-right-arrow-alt" /> */}
            </button>
          </div>
        </div>
      </div>
      {/* About Us */}
      <div className="about-us">
        <div className="col-25 sub-content-about">
          <h1>We Create The Art Of Stylish Living Stylishly</h1>
          <p>
            It is a long established fact that a reader will be distracted by the of
            readable content of a page when lookings at its layouts the points of
            using that it has a more-or-less normal.
          </p>
          <div className="contact-about-us">
            {/* icon-phone */}
            <div className="phone-icon">
              <FontAwesomeIcon icon={faPhone} />
            </div>
            {/* <i className="phone-icon bx bx-phone" /> */}
            <div className="number">
              <p className="phone-number">0813 300 435</p>
              <p>Call Us Anytime</p>
            </div>
          </div>
          <button className="get-free-btn">
            Get Free Estimate
            {/* icon mui ten */}
            <div className="arrow">
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
            {/* <i className="arrow bx bx-right-arrow-alt" /> */}
          </button>
        </div>
        <img
          src={`assets/img/img_homePage/about-home.jpg`}
          width="420px"
          height="470px"
          alt=""
          className="image-about-us"
        />
      </div>
      {/* Testimonial */}
      <div className=" col-60 testimonial">
        <div className="sub-content-testimonial">
          <h1>What the People Thinks</h1>
          <h1>About Us</h1>
        </div>
        <div className="all-person">
          {/* Person 1 */}
          <div className="person">
            <div className="avt-info-person">
              <img
                src={`assets/img/img_homePage/person1-home.png`}
                alt=""
                className="image-person"
              />
              <div className="info-person">
                <h3>Nattasha Mith</h3>
                <p>Sysney, USA</p>
              </div>
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum
              has been.
            </p>
          </div>
          {/* Person 1 */}
          <div className="person">
            <div className="avt-info-person">
              <img
                src={`assets/img/img_homePage/person2-home.png`}
                alt=""
                className="image-person"
              />
              <div className="info-person">
                <h3>Nattasha Mith</h3>
                <p>Sysney, USA</p>
              </div>
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum
              has been scrambled it to make a type book..
            </p>
          </div>
          {/* Person 1 */}
          <div className="person">
            <div className="avt-info-person">
              <img
                src={`assets/img/img_homePage/person3-home.png`}
                alt=""
                className="image-person"
              />
              <div className="info-person">
                <h3>Nattasha Mith</h3>
                <p>Sysney, USA</p>
              </div>
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum
              has been scrambled.
            </p>
          </div>
        </div>
      </div>
      {/* Client-Logo */}
      <div className="client-logo">
        <img
          src={`assets/img/img_homePage/client1-home.png`}
          alt=""
          className="mg-30 image-client"
        />
        <img
          src={`assets/img/img_homePage/client2-home.png`}
          alt=""
          className="image-client"
        />
        <img
          src={`assets/img/img_homePage/client3-home.png`}
          alt=""
          className="mg-30 image-client"
        />
        <img
          src={`assets/img/img_homePage/client4-home.png`}
          alt=""
          className="mg-30 image-client"
        />
        <img
          src={`assets/img/img_homePage/client5-home.png`}
          alt=""
          className="mg-30 image-client"
        />
      </div>
      {/* Project */}
      <div className="project">
        <div className="heading-project">
          <h1 className="title">Follow Our Projects</h1>
          <p>
            It is a long established fact that a reader will be distracted by the of
            readable content of page lookings at its layouts points.
          </p>
        </div>
        <div className="container-project">
          <div className="2-projects">
            {/* Project-1 */}
            <div className="all-info-project">
              <img
                src={`assets/img/img_homePage/project1-home.png`}
                alt=""
                className="image-project image-project-1"
              />
              <div className="info-project">
                <div className="name-project">
                  <h2>Modern Kitchan</h2>
                  <p>Decor / Artchitecture</p>
                </div>
                <button className="chevron-right-icon">
                  {/* icon */}
                  <FontAwesomeIcon icon={faChevronRight} />
                  {/* <i className="bx bx-chevron-left bx-rotate-180" /> */}
                </button>
              </div>
            </div>
            {/* Project-2 */}
            <div className="all-info-project">
              <img
                src={`assets/img/img_homePage/project3-home.png`}
                alt=""
                className="image-project image-project-2"
              />
              <div className="info-project">
                <div className="name-project">
                  <h2>Modern Kitchan</h2>
                  <p>Decor / Artchitecture</p>
                </div>
                <button className="chevron-right-icon">
                  {/* icon */}
                  <FontAwesomeIcon icon={faChevronRight} />
                  {/* <i className="bx bx-chevron-left bx-rotate-180" /> */}
                </button>
              </div>
            </div>
          </div>
          <div className="2-projects">
            {/* Project-3 */}
            <div className="all-info-project">
              <img
                src={`assets/img/img_homePage/project2-home.png`}
                alt=""
                className="image-project image-project-3"
              />
              <div className="info-project">
                <div className="name-project">
                  <h2>Modern Kitchan</h2>
                  <p>Decor / Artchitecture</p>
                </div>
                <button className="chevron-right-icon">
                  {/* icon */}
                  <FontAwesomeIcon icon={faChevronRight} />
                  {/* <i className="bx bx-chevron-left bx-rotate-180" /> */}
                </button>
              </div>
            </div>
            {/* Project-4 */}
            <div className="all-info-project">
              <img
                src={`assets/img/img_homePage/project4-home.png`}
                alt=""
                className="image-project image-project-4"
              />
              <div className="info-project">
                <div className="name-project">
                  <h2>Modern Kitchan</h2>
                  <p>Decor / Artchitecture</p>
                </div>
                <button className="chevron-right-icon">
                  {/* icon */}
                  <FontAwesomeIcon icon={faChevronRight} />
                  {/* <i className="bx bx-chevron-left bx-rotate-180" /> */}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Counter */}
      <div className="counter">
        <div className="all-info-counter">
          <div className="info-counter">
            <img
              src={`assets/img/img_homePage/12.png`}
              alt=""
              className="image-counter"
            />
            <p>Years Of Experiance</p>
          </div>
          <hr className="vertical" />
          <div className="info-counter">
            <img
              src={`assets/img/img_homePage/85.png`}
              alt=""
              className="image-counter"
            />
            <p>Success Projecte</p>
          </div>
          <hr className="vertical" />
          <div className="info-counter">
            <img
              src={`assets/img/img_homePage/15.png`}
              alt=""
              className="image-counter"
            />
            <p>Active Project</p>
          </div>
          <hr className="vertical" />
          <div className="info-counter">
            <img
              src={`assets/img/img_homePage/95.png`}
              alt=""
              className="image-counter"
            />
            <p>Happy Customers</p>
          </div>
        </div>
      </div>
      {/* Blog */}
      <div className="blog">
        <div className="heading">
          <h1 className="title">Articles &amp; News</h1>
          <p>
            It is a long established fact that a reader will be distracted by the of
            readable content of a page when lookings at its layouts the points of
            using.
          </p>
        </div>
        <div className="all-blog">
          {/* Blog-1 */}
          <div className="item-blog">
            <img
              src={`assets/img/img_homePage/blog1-home.png`}
              alt=""
              className="image-blog"
            />
            <h2 className="blog-name">
              Let’s Get Solution For Building Construction Work
            </h2>
            <div className="blog-date">
              <p>26 December,2022 </p>
              <button className="chevron-right-icon">
                {/* icon mui ten */}
                <FontAwesomeIcon icon={faChevronRight} />
                {/* <i className="bx bx-chevron-left bx-rotate-180" /> */}
              </button>
            </div>
          </div>
          {/* Blog-2 */}
          <div className="item-blog">
            <img
              src={`assets/img/img_homePage/blog2-home.png`}
              alt=""
              className="image-blog"
            />
            <h2 className="blog-name">
              Low Cost Latest Invented Interior Designing Ideas.
            </h2>
            <div className="blog-date">
              <p>26 December,2022 </p>
              <button className="chevron-right-icon">
                {/* icon mui ten */}
                <FontAwesomeIcon icon={faChevronRight} />
                {/* <i className="bx bx-chevron-left bx-rotate-180" /> */}
              </button>
            </div>
          </div>
          {/* Blog-3 */}
          <div className="item-blog">
            <img
              src={`assets/img/img_homePage/blog3-home.png`}
              alt=""
              className="image-blog"
            />
            <h2 className="blog-name">
              Best For Any Office &amp; Business Interior Solution
            </h2>
            <div className="blog-date">
              <p>26 December,2022 </p>
              <button className="chevron-right-icon">
                {/* icon mui ten */}
                <FontAwesomeIcon icon={faChevronRight} />
                {/* <i className="bx bx-chevron-left bx-rotate-180" /> */}
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Contact */}
      <div className="col-60 contact">
        <div className="heading">
          <h1>Wanna join the interno?</h1>
          <p>It is a long established fact will be distracted.</p>
          <button className="contact-us">
            <p>Contact With Us</p>
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

export default Home;
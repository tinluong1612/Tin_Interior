import './blog.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'

function Blog() {
    return <div>
        <div className="blog-page">
            <div className="banner">
                <img
                    src="/src/assets/img/img_blogPage/banner-blog.jpg"
                    width="100%"
                    alt=""
                />
            </div>
            <div className="body-blog">
                {/* Latest - Post */}
                <div className="w-60 latest-post">
                    <h1 className="mb-30">Latest Post</h1>
                    <div className="containner">
                        <img
                            src="/src/assets/img/img_blogPage/latestpost-blog.png"
                            width="44%"
                            alt=""
                            className="image-latest-post"
                        />
                        <div className="info-latest-blog">
                            <h2>Low Cost Latest Invented Interior Designing Ideas</h2>
                            <div className="f fz-18">
                                <p>
                                    Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis
                                    dignissim maximus.posuere in.Contrary to popular belief.
                                </p>
                                <p>
                                    Lorem Ipsum is not simply random text. It has roots in a piece of
                                    classica.
                                </p>
                                <div className="date">
                                    26 December,2022
                                    <button className="chevron-right-icon">
                                        <FontAwesomeIcon icon={faChevronRight} />
                                        {/* <i className="bx bx-chevron-left bx-rotate-180" /> */}
                                    </button>
                                    {/* icon */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Articles & News */}
                <div className="blog">
                    <h1 className="content-blog">Articles &amp; News</h1>
                    <div className="all-blog">
                        {/* Blog-1 */}
                        <div className="item-blog">
                            <img
                                src="/src/assets/img/img_blogPage/news1-blog.png"
                                alt=""
                                className="image-blog"
                            />
                            <h2 className="blog-name">
                                Let’s Get Solution For Building Construction Work
                            </h2>
                            <div className="f fz-18 blog-date">
                                <p>26 December,2022 </p>
                                <button className="chevron-right-icon">
                                    <FontAwesomeIcon icon={faChevronRight} />
                                    {/* <i className="bx bx-chevron-left bx-rotate-180" /> */}
                                </button>
                            </div>
                        </div>
                        {/* Blog-2 */}
                        <div className="item-blog color-blog">
                            <img
                                src="/src/assets/img/img_blogPage/news2-blog.png"
                                alt=""
                                className="image-blog"
                            />
                            <h2 className="blog-name">
                                Low Cost Latest Invented Interior Designing Ideas.
                            </h2>
                            <div className="f fz-18 blog-date">
                                <p>26 December,2022 </p>
                                <button className="chevron-right-icon">
                                    <FontAwesomeIcon icon={faChevronRight} />
                                    {/* <i className="bx bx-chevron-left bx-rotate-180" /> */}
                                </button>
                            </div>
                        </div>
                        {/* Blog-3 */}
                        <div className="item-blog">
                            <img
                                src="/src/assets/img/img_blogPage/news3-blog.png"
                                alt=""
                                className="image-blog"
                            />
                            <h2 className="blog-name">
                                Best For Any Office &amp; Business Interior Solution
                            </h2>
                            <div className="f fz-18 blog-date">
                                <p>26 December,2022 </p>
                                <button className="chevron-right-icon">
                                    <FontAwesomeIcon icon={faChevronRight} />
                                    {/* <i className="bx bx-chevron-left bx-rotate-180" /> */}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="all-blog">
                        {/* Blog-4 */}
                        <div className="item-blog">
                            <img
                                src="/src/assets/img/img_blogPage/news4-blog.png"
                                alt=""
                                className="image-blog"
                            />
                            <h2 className="blog-name">
                                Let’s Get Solution For Building Construction Work
                            </h2>
                            <div className="f fz-18 blog-date">
                                <p>26 December,2022 </p>
                                <button className="chevron-right-icon">
                                    <FontAwesomeIcon icon={faChevronRight} />
                                    {/* <i className="bx bx-chevron-left bx-rotate-180" /> */}
                                </button>
                            </div>
                        </div>
                        {/* Blog-5 */}
                        <div className="item-blog color-blog">
                            <img
                                src="/src/assets/img/img_blogPage/news5-blog.png"
                                alt=""
                                className="image-blog"
                            />
                            <h2 className="blog-name">
                                Low Cost Latest Invented Interior Designing Ideas.
                            </h2>
                            <div className="f fz-18 blog-date">
                                <p>26 December,2022 </p>
                                <button className="chevron-right-icon">
                                    <FontAwesomeIcon icon={faChevronRight} />
                                    {/* <i className="bx bx-chevron-left bx-rotate-180" /> */}
                                </button>
                            </div>
                        </div>
                        {/* Blog-6 */}
                        <div className="item-blog">
                            <img
                                src="/src/assets/img/img_blogPage/news6-blog.png"
                                alt=""
                                className="image-blog"
                            />
                            <h2 className="blog-name">
                                Best For Any Office &amp; Business Interior Solution
                            </h2>
                            <div className="f fz-18 blog-date">
                                <p>26 December,2022 </p>
                                <button className="chevron-right-icon">
                                    <FontAwesomeIcon icon={faChevronRight} />
                                    {/* <i className="bx bx-chevron-left bx-rotate-180" /> */}
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Next pages */}
                    <div className="f fz-18 next-page">
                        <button><FontAwesomeIcon icon={faChevronLeft} /></button>
                        <button>1</button>
                        <button>2</button>
                        <button>3</button>
                        <button><FontAwesomeIcon icon={faChevronRight} /></button>
                    </div>
                </div>
            </div>
        </div>

    </div>;
}

export default Blog;
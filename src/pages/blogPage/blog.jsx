import './blog.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import { React, useState, useEffect } from 'react';
// import { test } from './blog-api'


function Blog() {

    // var postApi = 'https://c2t-api.onrender.com/interior/news'
    // //stream
    // {
    //     fetch(postApi)
    //         .then(function (response) {
    //             return response.json();
    //             //JSON.parse: JSON -> Javascript Type
    //         })
    //         .then(function (get) {
    //             // console.log(get);
    //             setDataTest(get);
    //         })
    //         .catch(function (err) {
    //             alert('Có lỗi!!!')
    //         });
    // }

    const [dataTest, setDataTest] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("https://c2t-api.onrender.com/interior/news")
            // console.log(response)
            if (response?.status === 200) {

                setDataTest(response?.data)
            }
        }
        fetchData();
    }, []);

    return (<div>
        <div className="blog-page">
            <div className="banner">
                <img
                    src={`assets/img/img_blogPage/banner-blog.jpg`}
                    width="100%"
                    alt=""
                />

                <div className="banner-text">
                    <h1>Article & News</h1>
                    <p className="f fz-18">Home / Blog</p>
                </div>
            </div>
            <div className="body-blog">
                {/* Latest - Post */}
                <div className="w-60 latest-post">
                    <h1 className="mb-30">Latest Post</h1>
                    <div className="containner">
                        <img
                            src={`assets/img/img_blogPage/latestpost-blog.png`}
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

                        {/* API */}
                    <div className="render-api">
                        <div className="flex mg-auto">
                        {dataTest && dataTest?.map((item, index) => (
                            
                                <div className="item-blog">
                                    <img className='image-blog' src={item?.image} alt="" />
                                    <h2 className='blog-name'>{item?.title}</h2>
                                    <div className="f fz-18 blog-date">
                                        <p>26 December,2022 </p>
                                        <button className="chevron-right-icon">
                                            <FontAwesomeIcon icon={faChevronRight} />
                                        </button>
                                    </div>
                                </div>
                            
                        ))}
                        </div>





                        {/* <div className="all-blog">


                            <div className="item-blog">
                                <img
                                    src={`assets/img/img_blogPage/news1-blog.png`}
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
                                    </button>
                                </div>
                            </div>


                            <div className="item-blog color-blog">
                                <img
                                    src={`assets/img/img_blogPage/news2-blog.png`}
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
                                    </button>
                                </div>
                            </div>


                            <div className="item-blog">
                                <img
                                    src={`assets/img/img_blogPage/news3-blog.png`}
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
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="all-blog">
                            <div className="item-blog">
                                <img
                                    src={`assets/img/img_blogPage/news4-blog.png`}
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
                                    </button>
                                </div>
                            </div>


                            <div className="item-blog color-blog">
                                <img
                                    src={`assets/img/img_blogPage/news5-blog.png`}
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
                                    </button>
                                </div>
                            </div>


                            <div className="item-blog">
                                <img
                                    src={`assets/img/img_blogPage/news6-blog.png`}
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
                                    </button>
                                </div>
                            </div>
                        </div> */}
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

    </div>);
}

export default Blog;
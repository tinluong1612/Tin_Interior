import "./pricing.css"

function Pricing() {
    return <div>
        <div className="pricing">
            {/* Banner */}
            <div className="banner">
                <img
                    src={`assets/img/img_pricingPage/banner_pricing.jpg`}
                    width="100%"
                    alt=""
                />
            </div>
            {/* Price */}
            <div className="all-price">
                {/* item 1 */}
                <div className="w-18 fz-18 item-price">
                    <div className="header-price">
                        <h2 className="title-price">Design advices</h2>
                        <h1 className="price">$29</h1>
                        <h2>/month</h2>
                    </div>
                    <hr className="line-price" />
                    <div className="f fz-18 body-price">
                        <div className="content-price">
                            <p>General living space advices</p>
                            <p>Rennovation advices</p>
                            <p>Interior design advices</p>
                            <p>Furniture reorganization</p>
                            <p>Up to 5 hours meetings</p>
                        </div>
                        {/* Button */}
                        <button className="f fz-18 get-pricing">
                            Get Started
                            {/* icon */}
                            <i className="bx bx-right-arrow-alt" />
                        </button>
                    </div>
                </div>
                {/* item 2 */}
                <div className="w-18 fz-18 item-price">
                    <div className="header-price">
                        <h2 className="title-price">Complete interior</h2>
                        <h1 className="price">$39</h1>
                        <h2>/month</h2>
                    </div>
                    <hr className="line-price" />
                    <div className="f fz-18 body-price">
                        <div className="content-price">
                            <p>Complete home redesign</p>
                            <p>Interior and exterior works</p>
                            <p>Modular interior planning</p>
                            <p>Kitchen design</p>
                            <p>Garages organization</p>
                        </div>
                        {/* Button */}
                        <button className="f fz-18 get-pricing">
                            Get Started
                            {/* icon */}
                            <i className="bx bx-right-arrow-alt" />
                        </button>
                    </div>
                </div>
                {/* item 3 */}
                <div className="w-18 item-price">
                    <div className="header-price">
                        <h2 className="title-price">Furniture design</h2>
                        <h1 className="price">$59</h1>
                        <h2>/month</h2>
                    </div>
                    <hr className="line-price" />
                    <div className="f fz-18 body-price">
                        <div className="content-price">
                            <p>Furniture for living room</p>
                            <p>Furniture refurbishment</p>
                            <p>Sofas and amchairs</p>
                            <p>Tables and chairs</p>
                            <p>Kitchens</p>
                        </div>
                        {/* Button */}
                        <button className="f fz-18 get-pricing">
                            Get Started
                            {/* icon */}
                            <i className="bx bx-right-arrow-alt" />
                        </button>
                    </div>
                </div>
            </div>
        </div>

    </div>;
}

export default Pricing;
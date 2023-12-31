import './header.css'
import '../../../index.css'
// import './index.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Header() {
    return <div>
        <div className="col-60 header">
            <div className="logo">
                <img src={`assets/img/Logo.png`} width="40px" height="40px" alt="" />
                <div className="name">Interno</div>
            </div>
            <span className="menubar">
                <ul className="menubar-item">
                    <a href="/">Home</a>
                </ul>
                <ul className="menubar-item">
                    <a href="/about">About</a>
                </ul>
                <ul className="menubar-item">
                    <a href="/service">Service</a>
                </ul>
                <ul className="menubar-item">
                    <a href="/Pricing">Pricing</a>
                </ul>
                <ul className="menubar-item">
                    <a href="/Blog">Blog</a>
                </ul>
                <div className="search-box">
                    <button className="search-box_btn">
                    <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
            </span>
        </div>

    </div>;
}
export default Header;
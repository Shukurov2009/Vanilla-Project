import "./footer.css"
import vanilla from "../../assets/img/vanillaLogo.png"
import insta from "../../assets/img/insta.png"
import p from "../../assets/img/p.png"
import master from "../../assets/img/master.png"
import visa from "../../assets/img/visa.png"
import facebook from "../../assets/img/facebook.png"
import twitter from "../../assets/img/twitter.png"
import linkedin from "../../assets/img/linkedin.png"


export const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="footer-inner">
                        <div className="footer-first-box">
                            <img src={vanilla} alt="" className="footer-logo" width={80} height={80} />
                            <ul className="footer-first-box">
                                <div className="footer-first-box-text-box">
                                    <p className="footer-first-box-text">
                                        Some food has looked so awful that it's looked
                                        like something that the dog's brought home.
                                    </p>
                                </div>
                                <div className="footer-first-box-link-box">
                                    <a href="#" className="footer-first-box-link">
                                        Follow Us
                                    </a>
                                </div>
                            </ul>
                            <div className="footer-icon-box">
                                <img src={insta} alt="" className="footer-insta" />
                            </div>
                        </div>
                        <div className="footer-first-list-box">
                            <ul className="footer-first-list">
                                <li className="li footer-first-item">
                                    <a href="#" className="footer-first-link">
                                        Home
                                    </a>
                                </li>
                                <li className="footer-first-item">
                                    <a href="#" className="footer-first-link">
                                        Product
                                    </a>
                                </li>
                                <li className="li footer-first-item">
                                    <a href="#" className="footer-first-link">
                                        Blog
                                    </a>
                                </li>
                                <li className="li footer-first-item">
                                    <a href="#" className="footer-first-link">
                                        Pricing
                                    </a>
                                </li>
                                <li className="li footer-first-item">
                                    <a href="#" className="footer-first-link">
                                        Testimonials
                                    </a>
                                </li>
                                <li className="li footer-first-item">
                                    <a href="#" className="footer-first-link">
                                        Contact Us
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-second-list-box">
                            <ul className="footer-second-list">
                                <li className="footer-second-item">
                                    <a href="#" className="footer-second-link">
                                        Delivery Information
                                    </a>
                                </li>
                                <li className="footer-second-item">
                                    <a href="#" className="footer-second-link">
                                        Privacy Policy
                                    </a>
                                </li>
                                <li className="footer-second-item">
                                    <a href="#" className="footer-second-link">
                                        Terms & Condition
                                    </a>
                                </li>
                                <li className="footer-second-item">
                                    <a href="#" className="footer-second-link">
                                        Search Terms
                                    </a>
                                </li>
                                <li className="footer-second-item">
                                    <a href="#" className="footer-second-link">
                                        Order & Return
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="newsletter-box">
                            <h3 className="footer-newsletter-title">
                                Newsletter
                            </h3>
                            <div className="inp-and-btn">
                                <input type="email" className="footer-newsletter-inp" placeholder="Your Email"/>
                                <button className="footer-newsletter-btn">
                                    Subcribe
                                </button>
                            </div>
                            <div className="footer-newsletter-icon-box">
                                <img src={p} alt="" className="newsltter-pp" />
                                <img src={master} alt="" className="newsltter-pp" />
                                <img src={visa} alt="" className="newsltter-pp" />
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

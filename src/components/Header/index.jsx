import "./header.css"
import logo from "../../assets/img/oriflamelogo.png"

export const Header = () => {
    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="header-inner">
                        <a href="https://uz.oriflame.com/men/?count=48" className="header-logo-link">
                            <img src={logo} alt="" className="header-logo" width={80} height={80} />
                        </a>
                        <nav className="header-navigation">
                            <ul className="header-list">
                                <li className="header-item">
                                    <a href="#" className="header-link">
                                        Home
                                    </a>
                                </li>
                                <li className="header-item">
                                    <a href="#" className="header-link">
                                        Product
                                    </a>
                                </li>
                                <li className="header-item">
                                    <a href="#" className="header-link">
                                        Pricing
                                    </a>
                                </li>
                                <li className="header-item">
                                    <a href="#" className="header-link">
                                        Testimonials
                                    </a>
                                </li>
                                <li className="header-item">
                                    <a href="#" className="header-link">
                                        Contact Us
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        <button className="header-button">
                            Buy Now
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}

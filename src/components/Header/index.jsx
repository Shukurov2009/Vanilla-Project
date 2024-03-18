import "./header.css"
import logo from "../../assets/img/vanillaLogo.png"

export const Header = () => {
    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="header-inner">
                        <a href="#" className="header-logo-link">
                            <img src={logo} alt="logo img" className="header-logo" width={80} height={80} />
                        </a>
                        <nav className="header-navigation">
                            <ul className="header-list">
                                <li className="header-item">
                                    <a href="#" className="header-link">
                                        Bosh sahifa
                                    </a>
                                </li>
                                <li className="header-item">
                                    <a href="#" className="header-link">
                                        Maxsulotlar
                                    </a>
                                </li>
                                <li className="header-item">
                                    <a href="#" className="header-link">
                                        Narxlar
                                    </a>
                                </li>
                                <li className="header-item">
                                    <a href="#" className="header-link">
                                        Guvoxlar
                                    </a>
                                </li>
                                <li className="header-item">
                                    <a href="#" className="header-link">
                                        Biz biln bog'lanish
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

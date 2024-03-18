import React from 'react'
import "./footer.css"
import pollar from "../../assets/img/pollar.png"
import insta from "../../assets/img/insta.png"
import p from "../../assets/img/p.png"
import master from "../../assets/img/master.png"
import visa from "../../assets/img/visa.png"

export const Footer = () => {
  return (
    <>
    <section>
        <div className="container">
            <div className="footer-inner">
                <ul className="footer-list">
                <div className="footer-box">
                <img src={pollar} alt="" className="footer-img" width={79} height={79}/>
                </div>
                    <li className="footer-item">
                        <p className="footer-list-big-text">
                        Some food has looked so awful that it's looked like something that the dog's brought home.
                        </p>
                        <p className="footer-list-mini-text-3">
                        Fllow Us
                        </p>
                       <img src={insta} alt="" className="footer-item-img" width={90} height={15}/>
                    </li>
                </ul>

                <ul className="footer-list">
                    <li className="footer-item">
                        <p className="footer-list-mini-text">
                        Home
                        </p>
                        <p className="footer-list-mini-text">
                        Product
                        </p>
                        <p className="footer-list-mini-text">
                        Blog
                        </p>
                        <p className="footer-list-mini-text">
                        Pricing
                        </p>
                        <p className="footer-list-mini-text">
                        Testimonials
                        </p>
                        <p className="footer-list-mini-text">
                        Contact Us
                        </p>
                    </li>
                </ul>

                <ul className="footer-list">
                    <li className="footer-item">
                        <p className="footer-list-mini-text">
                        Delivery Information
                        </p>
                        <p className="footer-list-mini-text">
                        Privacy Policy
                        </p>
                        <p className="footer-list-mini-text">
                        Terms & Condition
                        </p>
                        <p className="footer-list-mini-text">
                        Search Terms
                        </p>
                        <p className="footer-list-mini-text">
                        Order & Return
                        </p>
                    </li>
                </ul>

                <ul className="footer-list-3">
                    <li className="footer-item">
                        <p className="footer-list-mini-text-4">
                        Newsletter
                        </p>
                        <div className="footer-item-box">
                        <input type="text" className="footer-input" placeholder='Your Email'/>
                        <button className="footer-btn">Subscribe</button>
                        </div>
                       <img src={p} alt="img" className="footer-item-img" width={19} height={22}/>
                       <img src={master} alt="img" className="footer-item-img" width={34} height={20}/>
                       <img src={visa} alt="img" className="footer-item-img" width={47} height={15}/>
                    </li>
                </ul>
            </div>
        </div>
    </section>
    </>
  )
}

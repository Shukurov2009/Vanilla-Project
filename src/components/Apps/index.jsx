import React from 'react'
import "./app.css"
import phone from "../../assets/img/phone.png"
// import click from "../../assets/img/click.zip"

export const Apps = () => {
  return (
    <>
    <section>
        <div className="container">
            <div className="apps-inner">
                <ul className="apps-item">
                <li className="apps-item-list">
                <div className="apps-box">
                    <img src={phone} alt="phone" className="apps-box-img" width={269} height={552}/>
                </div>
                </li>
                <li className="apps-item-list">
                <h2 className="apps-list-text">
                Simple Way To Order Your Food
                </h2>
                <p className="apps-list-mini-text">
                Some food has looked so awful that it's looked like something that the dog's brought home, yet after one mouthful I've been left eating my thoughts.
                </p>
                </li>
                <li className="apps-item-list">
                    <img src="" alt="" className="apps-item-list-img" />
                <p className="apps-list-mini-text">
                Some food has looked so awful that it's looked like something that the dog's brought home, yet after one mouthful I've been left eating my thoughts.
                </p>
                </li>
                </ul>
            </div>
        </div>
    </section>
    </>
  )
}

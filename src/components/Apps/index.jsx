import React from 'react'
import "./app.css"
import phone from "../../assets/img/phone.png"
import click from "../../assets/img/image-click.png"
import karzina from "../../assets/img/karzina.png"
import list from "../../assets/img/list.png"
import goglePlay from "../../assets/img/google-play.png"
import appStore from "../../assets/img/appStore.png"

export const Apps = () => {
  return (
    <>
    <section className='apps'>
        <div className="container">
            <div className="apps-inner">
                <div className="apps-box">
                    <img src={phone} alt="phone" className="apps-box-img" width={269} height={552}/>
                </div>
                <ul className="apps-item">
                <li className="apps-item-list">
                </li>
                <li className="apps-item-list">
                <h2 className="apps-list-text">
                Ovqatingizga buyurtma berishning oddiy usuli
                </h2>
                <p className="apps-list-mini-text">
                Ba'zi ovqatlar shunchalik dahshatli ko'rindiki, it uyga olib kelgan narsaga o'xshaydi, lekin bir og'iz og'izdan so'ng men o'z fikrlarimni yeb qo'ydim.
                </p>
                </li>
                <div className="apps-div">
                <li className="apps-item-list">
                    <img src={click} alt="click" className="apps-item-list-img" width={30} height={30}/>
                    <p className="apps-list-mini-text">
                    Taomingizni tanlang
                    </p>
                </li>
                <li className="apps-item-list">
                    <img src={karzina} alt="click" className="apps-item-list-img" width={30} height={30}/>
                    <p className="apps-list-mini-text">
                    Savatchaga qo'shish
                    </p>
                </li>
                <li className="apps-item-list">
                    <img src={list} alt="click" className="apps-item-list-img" width={30} height={30}/>
                    <p className="apps-list-mini-text">
                    Ovqatingizga buyurtma bering
                    </p>
                </li>
                </div>
                <li className="apps-item-list">
                    <img src={goglePlay} alt="click" className="apps-item-list-img" />
                    <img src={appStore} alt="click" className="apps-item-list-img" />
                </li>
                </ul>
            </div>
        </div>
    </section>
    </>
  )
}

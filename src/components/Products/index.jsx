import React from 'react'
import "./product.css"
import restangle from "../../assets/img/restangle.png"

export const Product = () => {
  return (
    <>
    <section>
        <div className="container">
            <div className="product-inner">
                <div className="product-box">
                <img src={restangle} alt="img" className="product-img-1" width={580} height={415}/>
                </div>
              <div className="product-big-box">
              <div className="product-box-2">
                <h3 className="product-box-2-text">
                Sweet corn
                </h3>
                <p className="product-mini-text">
                Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.
                </p>
               <div className="product-mini-mini-box">
               <p className="product-mini-text-2"><strong className='product-strong' >$19.55</strong></p>
                <p className="product-mini-text-3">$22.55</p>
               </div>
                </div>
                <div className="product-mini-box-3">
                <button className="product-btn">Buy now</button>
                </div>
              </div>
            </div>
        </div>
    </section>
    </>
  )
}

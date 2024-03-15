import React from 'react'
import "./product.css"
import restangle from "../../assets/img/restangle.png"

export const Product = () => {
  return (
    <>
    <section>
        <div className="container">
            <div className="product-inner">
                <img src={restangle} alt="img" className="product-img-1" width={580} height={415}/>
            </div>
        </div>
    </section>
    </>
  )
}

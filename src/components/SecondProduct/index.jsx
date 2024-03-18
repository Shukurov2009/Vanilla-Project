import "./SecondProduct.css"
import cayenne from "../../assets/img/cayenne.png"

export const SecondProducts = () => {
    return (
        <>
            <section>
                <div className="container">
                    <div className="second-product-inner">
                        <div className="second-product-big-box">
                            <div className="second-product-box-2">
                                <h3 className="second-product-box-2-text">
                                    Cayenne shokoladi
                                </h3>
                                <p className="second-product-mini-text">
                                    Bon Au Pain - sog'lom tez ovqatlanish sahnasida kashshof. 
                                    Bon Au Pain - sog'lom tez ovqatlanish sahnasida kashshof.
                                </p>
                                <div className="second-product-mini-mini-box">
                                    <p className="second-product-mini-text-2"><strong className='second-product-strong' >$19.55</strong></p>
                                    <p className="second-product-mini-text-3">$22.55</p>
                                </div>
                            </div>
                            <div className="second-product-mini-box-3">
                                <button className="second-product-btn">Buy now</button>
                            </div>
                        </div>
                        <div className="second-product-box">
                            <img src={cayenne} alt="img" className="second-product-img-1" width={580} height={415} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

import "./ThirtProduct.css"
import brownbread from "../../assets/img/brownbread.png"

export const ThirtProducts = () => {
    return (
        <>
            <section>
                <div className="container">
                    <div className="thirt-product-inner">
                        <div className="thirt-product-box">
                            <img src={brownbread} alt="img" className="thirt-product-img-1" width={580} height={415} />
                        </div>
                        <div className="thirt-product-big-box">
                            <div className="thirt-product-box-2">
                                <h3 className="thirt-product-box-2-text">
                                    Jigarrang Non
                                </h3>
                                <p className="thirt-product-mini-text">
                                    Bon Au Pain - sog'lom tez ovqatlanish sahnasida kashshof.
                                    Bon Au Pain - sog'lom tez ovqatlanish sahnasida kashshof.
                                </p>
                                <div className="thirt-product-mini-mini-box">
                                    <p className="thirt-product-mini-text-2"><strong className='thirt-product-strong' >$19.55</strong></p>
                                    <p className="thirt-product-mini-text-3">$22.55</p>
                                </div>
                            </div>
                            <div className="thirt-product-mini-box-3">
                                <button className="thirt-product-btn">Buy now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

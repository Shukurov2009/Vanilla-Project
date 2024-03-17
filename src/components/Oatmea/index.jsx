import "./oatmea.css"
import oatmeaimg from "../../assets/img/oatmeaimage.png"

export const Oatmea = () => {
    return (
        <>
            <section className="oatmea">
                <div className="container">
                    <div className="oatmea-inner">
                        <div className="oatmea-box">
                            <div className="oatmea-text-box">
                                <div className="oatmea-title-box">
                                    <h2 className="oatmea-title">
                                        Jigarrang shakar jo'xori uni
                                    </h2>
                                </div>
                                <div className="oatmea-p-box">
                                    <p className="oatmea-text">
                                        McDonald's bilan birgalikda Burger King AQShda burgerlar bilan sinonimga aylandi.
                                        McDonald's bilan birgalikda Burger King sinonimiga aylandi.
                                    </p>
                                </div>
                            </div>
                            <div className="oatmea-btn-box">
                            <button className="oatmea-btn">
                                Tafsilotlarni ko'ring
                            </button>
                            </div>
                        </div>
                        <img src={oatmeaimg} alt="" className="oatmea-img" />
                    </div>
                </div>
            </section>
        </>
    )
}

import "./hero.css"
import heroimg from "../../assets/img/heroimg.png"

export const Hero = () => {
    return (
        <>
            <section className="hero" id="hero">
                <div className="container">
                    <div className="hero-inner">
                        <div className="hero-box">
                            <p className="hero-parfume">
                                Our Quality Perfumes
                            </p>
                            <div className="hero-text-box">
                                <div className="hero-h1">
                                    <h1 className="hero-title">
                                        Eng arzon va sifatli Parfyumeriyalarni faqat bizning kompaniyada topishingiz!
                                    </h1>
                                </div>
                                <div className="hero-p">

                                    <p className="hero-text">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                        Hic perspiciatis quae itaque exercitationem unde. Quia repellendus voluptatibus,
                                        sapiente a vitae magnam non dolores rem illo assumenda aut ratione!
                                    </p>
                                </div>
                            </div>
                            <button className="hero-btn">
                                Buy Now
                            </button>
                        </div>
                        <img src={heroimg} className="heroimg" alt="" width={550} height={625} />
                    </div>
                </div>
            </section>
        </>
    )
}

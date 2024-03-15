import "./hero.css"

export const Hero = () => {
    return (
        <>
            <section className="hero" id="hero">
                <div className="container">
                    <div className="hero-inner">
                        <div className="hero-box">
                            <p className="hero-parfume">
                                Sweet fun, full of milk.
                            </p>
                            <div className="hero-text-box">
                                <div className="hero-h1">
                                    <h1 className="hero-title">
                                        Feel inside cold with our delicious ice-cream.
                                    </h1>
                                </div>
                                <div className="hero-p">
                                    <p className="hero-text">
                                        Some food has looked so awful that it's looked like something that the dog's brought home, 
                                        yet after one mouthful I've been left eating my thoughts, my words.
                                    </p>
                                </div>
                            </div>
                            <button className="hero-btn">
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

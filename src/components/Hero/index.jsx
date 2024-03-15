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
                                    Bizning mazali muzqaymoq bilan ichingizda sovuq his eting.
                                    </h1>
                                </div>
                                <div className="hero-p">
                                    <p className="hero-text">
                                        Ba'zi ovqatlar shunchalik dahshatli ko'rindiki, it uyga olib kelgan narsaga o'xshaydi.
                                        hali bir og'iz og'izdan so'ng men o'z fikrlarimni, so'zlarimni yeb qo'ydim.
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

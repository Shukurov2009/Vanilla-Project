import React from "react";
import "./product2.css";
import person from "../../assets/img/person.png";
import right from "../../assets/img/right-arrow 2.png";
import Mask from "../../assets/img/MaskGroup.png";
import Mask2 from "../../assets/img/MaskGroup2.png";
import left from "../../assets/img/left-arrow.png";
import marojna from "../../assets/img/marojna.png";

export const Product2 = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="product2-inner">
            <div className="product2box">
              <ul className="product2-item">
                <li className="product2-list">
                  <img
                    src={person}
                    alt="person"
                    className="product2-list0img"
                    width={59}
                    height={58}
                  />
                  <div className="product2-minimini-box">
                    <h3 className="product2-list-text">Adele A. McNeill</h3>
                    <p className="product2-list-mini-text">AMIRICAN</p>
                  </div>
                  <p className="product2-list-big-text">
                    Thanks a lot for the prompt service. Really appreciate.
                    Excellence taste in Every Bite.Add a joy of best Taste.
                    Foodie Moments.
                  </p>
                  <li className="product2-mini-list">
                    <img
                      src={right}
                      alt="right arrow"
                      className="product2-mini-list-img"
                      width={14}
                      height={14}
                    />
                    <img
                      src={Mask}
                      alt="right arrow"
                      className="product2-mini-list-img"
                      width={35}
                      height={35}
                    />
                    <img
                      src={person}
                      alt="right arrow"
                      className="product2-mini-list-img"
                      width={58}
                      height={58}
                    />
                    <img
                      src={Mask2}
                      alt="right arrow"
                      className="product2-mini-list-img"
                      width={35}
                      height={35}
                    />
                    <img
                      src={left}
                      alt="right arrow"
                      className="product2-mini-list-img"
                      width={14}
                      height={14}
                    />
                  </li>
                </li>
              </ul>
              <img
                src={marojna}
                alt="marojna"
                className="product2-big-img"
                width={564}
                height={442}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

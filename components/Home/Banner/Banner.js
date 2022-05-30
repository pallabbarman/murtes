import React from "react";
import classes from "./Banner.module.css";
import { BsArrowRight } from "react-icons/bs";

const Banner = () => {
    return (
        <section className={`${classes.banner}`}>
            <div className="container">
                <div
                    className={`row d-flex align-items-center ${classes.bannerContent}`}
                >
                    <div className={`col-lg-7 ${classes.bannerItems}`}>
                        <h1>
                            We <span>provide the</span> best all kind of It
                            service
                        </h1>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Exercitationem nulla.
                        </p>
                        <button className="common-btn">
                            Explore more <BsArrowRight />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;

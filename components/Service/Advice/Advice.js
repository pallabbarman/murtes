import React from "react";
import classes from "./Advice.module.css";
import { BsArrowRight } from "react-icons/bs";

const Advice = () => {
    return (
        <section className={`${classes.advice}`}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 text-center">
                        <div className={`${classes.adviceContent1}`}>
                            <h1>+00 856 434 862</h1>
                            <p>
                                But I must explain to you how all this mistaken
                                denouncing praising pain was born and via us
                                passing pain was born give you.
                            </p>
                            <button>
                                Contact Now <BsArrowRight />
                            </button>
                        </div>
                    </div>
                    <div className={`col-md-6 ${classes.adviceContent2}`}>
                        <h4>CALL FOR ADVICE NOW</h4>
                        <h1>
                            To make requests for further information, contact us
                            via our social channels.
                        </h1>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Advice;

import Image from "next/image";
import React from "react";
import classes from "./Experience.module.css";
import { BsArrowRight } from "react-icons/bs";

const Experience = () => {
    return (
        <section className={`${classes.experience}`}>
            <div className="container">
                <div className={`${classes.experienceHeader}`}>
                    <h1>
                        We have <span>more than 25</span> years experience
                    </h1>
                    <p>
                        But I must explain to you how all this mistaken
                        denouncing praising pain was born and I will give you
                    </p>
                </div>
                <div className={`${classes.experienceBody}`}>
                    <div className="row">
                        <div
                            className={`col-lg-4 col-md-6 mt-5 ${classes.experienceItems1}`}
                        >
                            <h3>
                                But I must explain to you how all this mistaken
                                idea
                            </h3>
                            <p>
                                Must explain to you how all this mistaken
                                denouncing praising pain was born and I will
                                give you explain to you how all this pain pain
                                was born and I will give you because those.
                            </p>
                            <h6>
                                “Who do not know to pursue that are extremely
                                painful again is there anyone”.
                            </h6>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-5">
                            <Image
                                src="/images/experience/exp.jpg"
                                alt="exp"
                                width={500}
                                height={500}
                                layout="responsive"
                            />
                        </div>
                        <div
                            className={`col-lg-4 col-md-6 mt-5 ${classes.experienceItems3}`}
                        >
                            <h3>
                                Mission, vission and <span>short history</span>{" "}
                                of murtes.
                            </h3>
                            <p>
                                Must explain to you how all this mistaken
                                denouncing praisig pain was born and will give
                                you explain to you how all this pain pain was
                                born and I will give you because those known
                                those.
                            </p>
                            <p>
                                Denouncing praisig pain was born and give you
                                explain to you how all this pain the pain was
                                born and known those.
                            </p>
                            <button className="common-btn">
                                Learn More <BsArrowRight />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;

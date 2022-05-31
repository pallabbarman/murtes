import React from "react";
import classes from "./Template.module.css";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";

const Template = () => {
    return (
        <section className={classes.template}>
            <div className="container">
                <div className="row">
                    <div className={`col-lg-6 ${classes.templateImg}`}>
                        <Image
                            src="/images/home/template/template.png"
                            alt="person"
                            width={360}
                            height={400}
                            layout="responsive"
                        />
                    </div>
                    <div className={`col-lg-6 mt-5 ${classes.templateItems}`}>
                        <h1>
                            Murtes <span> is the first and </span> powerful
                            template co.
                        </h1>
                        <p>
                            But I must explain to you how all this mistaken
                            denouncing praising pain was born and I will give
                            you
                        </p>
                        <h1>+00 856 434 862</h1>
                        <button className="common-btn">
                            Contact Now <BsArrowRight />
                        </button>
                        <div className={` row ${classes.templateFooter}`}>
                            <div className="col-md-4">
                                <Image
                                    src="/images/home/template/tmp.jpg"
                                    alt="person"
                                    width={250}
                                    height={150}
                                    layout="responsive"
                                />
                            </div>
                            <div
                                className={` col-md-8 ${classes.templateFooterItems2}`}
                            >
                                <p>
                                    All the Lorem Ipsum generators on the Intern
                                    tend to repeat predefined chunks as necessa
                                    making this the first true generator on the
                                    model sentence structures.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Template;

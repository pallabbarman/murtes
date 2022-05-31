import React from "react";
import classes from "./WhyUs.module.css";

const WhyUs = () => {
    const whyUsData = [
        {
            title: "25+ years Experience",
            des: "How all this mistaken was born & because those who do not know.",
        },
        {
            title: "Responsive layout",
            des: "How all this mistaken was born & because those who do not know.",
        },
        {
            title: "24/7 customer support",
            des: "How all this mistaken was born & because those who do not know.",
        },
        {
            title: "Awesome team member",
            des: "How all this mistaken was born & because those who do not know.",
        },
    ];

    return (
        <section className={`${classes.whyUs}`}>
            <div className="container">
                <div className="row align-items-center">
                    <div className={`col-md-6 ${classes.whyUsContent1}`}>
                        <h1>
                            Why you <span>are choose us!</span> some reason
                            here.
                        </h1>
                        <h5>
                            Who do not know how to pursue pleasure that are
                            extremely painful again is there anyone who loves.
                        </h5>
                        <p>
                            But I must explain to you how all this mistaken
                            denouncing praising pain was born and because those
                            who do not know pursue pleasure rationally encounter
                            consequences that are again is there anyone.
                        </p>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            {whyUsData.map((data) => (
                                <div className="col-lg-6" key={data.title}>
                                    <div className={`${classes.whyUsCard}`}>
                                        <h3>{data.title}</h3>
                                        <p>{data.des}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;

import Image from "next/image";
import React from "react";
import classes from "./Success.module.css";

const Success = () => {
    return (
        <section className={`${classes.success}`}>
            <div className="container">
                <div className="row align-items-center">
                    <div className={`col-md-6 ${classes.successImg}`}>
                        <Image
                            src="/images/service/success/people.jpg"
                            alt="people"
                            width={300}
                            height={130}
                            layout="responsive"
                        />
                    </div>
                    <div className={`col-md-6 ${classes.successDetails}`}>
                        <h1>
                            We run all kinds of IT services that vow your
                            success
                        </h1>
                        <p>
                            We help transform the world most important
                            businesses into that anticipate the agile
                            unpredtable adapt rapidly disruption with high
                            potential and high ambition.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Success;

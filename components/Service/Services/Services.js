import React from "react";
import classes from "./Services.module.css";
import { BsArrowRight } from "react-icons/bs";

const Services = () => {
    const serviceData = [
        {
            id: "01",
            title: "Warranty Management IT",
            des: " Must explain to you how this denouncing praisig pain was give you explain to you how pain was born.",
        },
        {
            id: "02",
            title: "Product control service",
            des: " Must explain to you how this denouncing praisig pain was give you explain to you how pain was born.",
        },
        {
            id: "03",
            title: "Quality control system",
            des: " Must explain to you how this denouncing praisig pain was give you explain to you how pain was born.",
        },
        {
            id: "04",
            title: "Warranty Management IT",
            des: " Must explain to you how this denouncing praisig pain was give you explain to you how pain was born.",
        },
        {
            id: "05",
            title: "Warranty Management IT",
            des: " Must explain to you how this denouncing praisig pain was give you explain to you how pain was born.",
        },
        {
            id: "06",
            title: "Warranty Management IT",
            des: " Must explain to you how this denouncing praisig pain was give you explain to you how pain was born.",
        },
    ];
    return (
        <section className={`${classes.services}`}>
            <div className="container">
                <div className={`${classes.servicesContents}`}>
                    {serviceData.map((data) => (
                        <div
                            className={`${classes.servicesItems}`}
                            key={data.id}
                        >
                            <div className={`${classes.servicesCard}`}>
                                <div>{data.id}.</div>
                                <div>
                                    <h3>{data.title}</h3>
                                    <p>{data.des}</p>
                                    <h5>
                                        Details <BsArrowRight />
                                    </h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;

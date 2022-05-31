import Link from "next/link";
import React from "react";
import classes from "./ServiceBanner.module.css";

const ServiceBanner = () => {
    return (
        <section className={`${classes.banner}`}>
            <div className="container">
                <div
                    className={`row d-flex align-items-center ${classes.bannerContent}`}
                >
                    <div className={`col-lg-7 ${classes.ServiceBannerHeader}`}>
                        <h1>IT Solution</h1>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link href="/">Home</Link>
                                </li>
                                <li
                                    className="breadcrumb-item active"
                                    aria-current="page"
                                >
                                    Our Services
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceBanner;

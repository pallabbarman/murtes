import React from "react";
import classes from "./footer.module.css";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaGoogle } from "react-icons/fa";

const Footer = () => {
    const footerData = [
        {
            title: "Company",
            link1: "what's new",
            link2: "Try Demo",
            link3: "Terms of service",
            link4: "Page Builder",
            link5: "Privacy policy",
        },
        {
            title: "Product",
            link1: "Features",
            link2: "Pricing",
            link3: "Customers",
            link4: "Page Builder",
            link5: "what's new",
        },
        {
            title: "Help Center",
            link1: "Features",
            link2: "Pricing",
            link3: "Customers",
            link4: "Page Builder",
            link5: "what's new",
        },
    ];
    return (
        <footer className={`${classes.footerContainer}`}>
            <div className="container">
                <div className="row">
                    {footerData.map((data) => (
                        <div
                            className={`col-lg-3 col-md-6 ${classes.footerItem}`}
                            key={data.title}
                        >
                            <h3>{data.title}</h3>
                            <p>
                                <Link href="/">{data.link1}</Link>
                            </p>
                            <p>
                                <Link href="/">{data.link2}</Link>
                            </p>
                            <p>
                                <Link href="/">{data.link3}</Link>
                            </p>
                            <p>
                                <Link href="/">{data.link4}</Link>
                            </p>
                            <p>
                                <Link href="/">{data.link5}</Link>
                            </p>
                        </div>
                    ))}
                    <div className={`col-lg-3 col-md-6 ${classes.footerItem}`}>
                        <h3>About murtes</h3>
                        <p>
                            It uses a dictionary of over 200 Latin words
                            combined with a handful of model sentence structures
                            generate which looks reasonable generated is
                            therefore allow.
                        </p>
                        <p>
                            It uses a dictionary of over 200 Latin words
                            generated is therefore allow.
                        </p>
                    </div>
                </div>
            </div>
            <div className={`${classes.footerBottom}`}>
                <div className={`container ${classes.footerElement}`}>
                    <div className="copyRight">
                        &copy; {new Date().getFullYear()}All rights reserved by{" "}
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/pallabbarman"
                        >
                            Pallab
                        </a>
                    </div>
                    <div className={`${classes.socialMedia}`}>
                        <FaFacebook />
                        <FaTwitter />
                        <FaGoogle />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

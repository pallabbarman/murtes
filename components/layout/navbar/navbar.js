import Image from "next/image";
import Link from "next/link";
import React from "react";
import classes from "./navbar.module.css";
import { Turn } from "hamburger-react";

const Navbar = () => {
    return (
        <nav
            className={`navbar navbar-expand-lg sticky-top ${classes.navContainer}`}
        >
            <div className="container">
                <Link href="/">
                    <a>
                        <Image
                            src="/images/navbar/logo.png"
                            alt="logo"
                            height={50}
                            width={190}
                        />
                    </a>
                </Link>
                <button
                    className={`navbar-toggler ${classes.navToggle}`}
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasNavbar"
                    aria-controls="offcanvasNavbar"
                >
                    <Turn direction="right" size={30} />
                </button>
                <div
                    className="offcanvas offcanvas-start"
                    tabIndex="-1"
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                >
                    <div className="offcanvas-header">
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul
                            className={`navbar-nav justify-content-center flex-grow-1 ${classes.navItems1}`}
                        >
                            <li className="nav-item">
                                <Link href="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/service">Service</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/">Page</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/">Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/">Contact</Link>
                            </li>
                        </ul>
                        <ul
                            className={`navbar-nav justify-content-end flex-grow-1 ${classes.navItems2}`}
                        >
                            <li className="nav-item">
                                <a className="nav-link" href="tel:+00568468954">
                                    +00 568 468 954
                                </a>
                            </li>
                            <li>
                                <button className="common-btn">
                                    Get A Quote
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

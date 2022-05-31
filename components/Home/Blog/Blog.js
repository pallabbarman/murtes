import Image from "next/image";
import React from "react";
import classes from "./Blog.module.css";
import { IoMdPerson } from "react-icons/io";
import { GoCalendar } from "react-icons/go";

const Blog = () => {
    const blogData = [
        {
            title: "This is Standard blog design for Digital",
            des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias ullam id amet error esse reiciendis.",
            img: "/images/home/blog/blog1.jpg",
            by: "Pallab",
            date: new Date().toLocaleDateString(),
        },
        {
            title: "It uses a dictionary over words combined",
            des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias ullam id amet error esse reiciendis.",
            img: "/images/home/blog/blog2.jpg",
            by: "Pallab",
            date: new Date().toLocaleDateString(),
        },
        {
            title: "Old cameras can capture images better!",
            des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias ullam id amet error esse reiciendis.",
            img: "/images/home/blog/blog3.jpg",
            by: "Pallab",
            date: new Date().toLocaleDateString(),
        },
    ];

    return (
        <section className={classes.blog}>
            <div className="container">
                <div className={`${classes.blogHeader}`}>
                    <h1>
                        Our <span>blog list and</span> latest news
                    </h1>
                    <p>
                        But I must explain to you how all this mistaken
                        denouncing praising pain was born and I will give you
                    </p>
                </div>
                <div className={`${classes.blogBody}`}>
                    {blogData.map((data) => (
                        <div
                            className={`card ${classes.blogCard}`}
                            key={data.title}
                        >
                            <div className={`${classes.cardHeader}`}>
                                <h3>{data.title}</h3>
                                <p>{data.des}</p>
                            </div>
                            <Image
                                src={data.img}
                                alt={data.title}
                                width={300}
                                height={200}
                                layout="responsive"
                            />
                            <div className={`${classes.cardFooter}`}>
                                <p>
                                    <IoMdPerson /> {data.by}
                                </p>
                                <p>
                                    <GoCalendar /> {data.date}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;

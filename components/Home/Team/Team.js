import React from "react";
import classes from "./Team.module.css";
import Image from "next/image";

const Team = () => {
    const teamData = [
        {
            name: "Felicia Becker",
            img: "/images/team/member1.jpg",
            position: "Financial Manager",
        },
        {
            name: "Randall Rios",
            img: "/images/team/member2.jpg",
            position: "Financial Manager",
        },
        {
            name: "Casey Jones",
            img: "/images/team/member3.jpg",
            position: "Executive Officer",
        },
    ];

    return (
        <section className={`${classes.team}`}>
            <div className="container">
                <div className={`${classes.teamHeader}`}>
                    <h1>
                        Meet <span>our awesome</span> team members
                    </h1>
                    <p>
                        But I must explain to you how all this mistaken
                        denouncing praising pain was born and I will give you
                    </p>
                </div>
                <div className={`${classes.teamBody}`}>
                    {teamData.map((data) => (
                        <div
                            className={`card ${classes.teamCard}`}
                            key={data.name}
                        >
                            <Image
                                src={data.img}
                                alt={data.name}
                                width={320}
                                height={350}
                                layout="responsive"
                            />
                            <div className={`${classes.cardBody}`}>
                                <div>
                                    <h3>{data.name}</h3>
                                    <p>{data.position}</p>
                                </div>
                                <div className={`${classes.cardPlayBtn}`}>
                                    <div></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;

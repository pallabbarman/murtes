import React from "react";
import Advice from "../Advice/Advice";
import ServiceBanner from "../ServiceBanner/ServiceBanner";
import Success from "../Success/Success";

const Service = () => {
    return (
        <>
            <ServiceBanner />
            <Success />
            <Advice />
        </>
    );
};

export default Service;

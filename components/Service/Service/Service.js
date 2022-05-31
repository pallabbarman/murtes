import React from "react";
import Advice from "../Advice/Advice";
import ServiceBanner from "../ServiceBanner/ServiceBanner";
import Services from "../Services/Services";
import Success from "../Success/Success";

const Service = () => {
    return (
        <>
            <ServiceBanner />
            <Success />
            <Services />
            <Advice />
        </>
    );
};

export default Service;

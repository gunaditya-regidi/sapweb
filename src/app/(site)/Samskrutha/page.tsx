import HeroSub from "@/components/shared/HeroSub";
import Appartment from "@/components/Properties/Appartment";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Property List | Homely",
};

const page = () => {
    return (
        <>
            <HeroSub
                title="Veda Samskruta Patasala"
                description="Holistic education for the next generation of Vedic scholars and dharmic leaders."
                badge="Initiative for Free Food and Education"
            />
            <Appartment />
        </>
    );
};

export default page;
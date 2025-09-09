import HeroSub from "@/components/shared/HeroSub";
import ResidentialList from "@/components/Properties/Residential";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Property List | Homely",
};

const page = () => {
    return (
        <>
            <HeroSub
                title="Vedic Upliftment"
                description="Preserving and promoting Vedic wisdom through travel, daily chanting, and annual celebrations."
                badge="Initiative to Preserve & Honor Vedas"
            />
            <ResidentialList />
        </>
    );
};

export default page;
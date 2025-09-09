import HeroSub from "@/components/shared/HeroSub";
import PropertiesListing from "@/components/Properties/PropertyList";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Our Services | Saptarushi Charitable Trust",
};

const page = () => {
    return (
        <>
            <HeroSub
                title="Explore our sacred initiatives and dharmic efforts"
                description="Discover meaningful seva through our Vedic programs, temple upliftment, community outreach, and daily spiritual services."
                badge="Our Services"
            />
            <PropertiesListing />
        </>
    );
};

export default page;

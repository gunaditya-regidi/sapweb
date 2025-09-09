import HeroSub from "@/components/shared/HeroSub";
import LuxuryVillas from "@/components/Properties/LuxuryVilla";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Property List | Homely",
};

const page = () => {
    return (
        <>
            <HeroSub
                title="Dharma Seva & Cultural Upliftment"
                description="Reviving Sanatana Dharma through Dharma prasadam, Vedic Chanting, and Society outreach."
                badge="Initiative to Promote Hindu Culture"
            />
            <LuxuryVillas />
        </>
    );
};

export default page;
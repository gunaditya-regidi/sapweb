import HeroSub from "@/components/shared/HeroSub";
import OfficeSpace from "@/components/Properties/OfficeSpaces";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Property List | Homely",
};

const page = () => {
    return (
        <>
            <HeroSub
                title="Spiritual Yagnas & Public Well-being"
                description="Large-scale rituals for peace, health, prosperity & national spiritual strength."
                badge="Initiative to Provide Sacred Vedic Services to Everyone"
            />
            <OfficeSpace />
        </>
    );
};

export default page;
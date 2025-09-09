import BlogList from "@/components/Blog";
import HeroSub from "@/components/shared/HeroSub";
import { Metadata } from "next";

export const metadata: Metadata = {
    title:
        "Latest Updates & News | Saptarushi Charitable Trust ",
};

const Blog = () => {
    return (
        <>
            <HeroSub
                title="Recent Activities & Updates"
                description="Stay connected with our latest programs, yatras, and service milestones."
                badge="Latest News and Articles"
            />
            <BlogList />
        </>
    );
};

export default Blog;

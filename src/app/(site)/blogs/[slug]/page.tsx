import { getAllPosts, getPostBySlug } from "@/components/utils/markdown";
import markdownToHtml from "@/components/utils/markdownToHtml";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { Icon } from '@iconify/react'

type Props = {
    params: { slug: string };
};

export async function generateMetadata({ params }: any) {
    const data = await params;
    const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);
    const post = getPostBySlug(data.slug, [
        "title",
        "author",
        "content",
        "metadata",
    ]);

    const siteName = process.env.SITE_NAME || "Saptarushi Charitable Trust";
    const authorName = process.env.AUTHOR_NAME || "Dr. M. Madhav Sharma";

    if (post) {
        const metadata = {
            title: `${post.title || "Single Post Page"} | ${siteName}`,
            author: authorName,
            robots: {
                index: true,
                follow: true,
                nocache: true,
                googleBot: {
                    index: true,
                    follow: false,
                    "max-video-preview": -1,
                    "max-image-preview": "large",
                    "max-snippet": -1,
                },
            },
        };

        return metadata;
    } else {
        return {
            title: "Not Found",
            description: "No blog article has been found",
            author: authorName,
            robots: {
                index: false,
                follow: false,
                nocache: false,
                googleBot: {
                    index: false,
                    follow: false,
                    "max-video-preview": -1,
                    "max-image-preview": "large",
                    "max-snippet": -1,
                },
            },
        };
    }
}

export default async function Post({ params }: any) {
    const data = await params;
    const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);
    const post = getPostBySlug(data.slug, [
        "title",
        "author",
        "authorImage",
        "content",
        "coverImage",
        "date",
        "tag",
        "detail",
    ]);

    const content = await markdownToHtml(post.content || "");

    return (
        <>
            <section className="relative !pt-44 pb-0!">
                <div className="container max-w-8xl mx-auto md:px-0 px-4">
                    <div>
                        <div>
                            <Link href="/blogs" className="flex items-center gap-3 text-white bg-primary py-3 px-4 rounded-full w-fit hover:bg-dark duration-300">
                                <Icon
                                    icon={'ph:arrow-left'}
                                    width={20}
                                    height={20}
                                    className=''
                                />
                                <span>Go Back</span>
                            </Link>
                            <h2 className="text-dark dark:text-white md:text-52 text-40 leading-[1.2] font-semibold pt-7">
                                {post.title}
                            </h2>
                            <h6 className="text-xm mt-5 text-dark dark:text-white">
                                {post.detail}
                            </h6>
                        </div>
                        <div className="flex items-center justify-between gap-6 mt-12">
                            
                            <div className="flex items-center gap-7">
                                <div className="flex items-center gap-4">
                                    <Icon
                                        icon={'ph:clock'}
                                        width={20}
                                        height={20}
                                        className=''
                                    />
                                    <span className="text-base text-dark font-medium dark:text-white">
                                        {format(new Date(post.date), "MMM dd, yyyy")}
                                    </span>
                                </div>
                                <div className="py-2.5 px-5 bg-dark/5 rounded-full dark:bg-white/15">
                                    <p className="text-sm font-semibold text-dark dark:text-white">{post.tag}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="z-20 mt-12 overflow-hidden rounded">
                        <Image src={post.coverImage} alt="Blog image" width={1200} height={600} quality={100} className="h-48 md:h-64 lg:h-150 lg:w-150 w-full mx-auto object-cover object-center rounded-3xl"
/>
                        
                    </div>
                </div>
            </section>
            <section className="pt-12!">
                <div className="container max-w-8xl mx-auto px-4">
                    <div className="-mx-4 flex flex-wrap justify-center">
                        <div className="blog-details markdown xl:pr-10">
                            <div dangerouslySetInnerHTML={{ __html: content }}></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

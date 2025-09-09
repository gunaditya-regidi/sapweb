import React, { FC } from "react";
import Image from "next/image";
import { Blog } from "@/types/blog";
import { format } from "date-fns";
import Link from "next/link";

const BlogCard: FC<{ blog: Blog }> = ({ blog }) => {
    const { title, coverImage, date, slug, tag } = blog;
    return (
        <Link href={`/blogs/${slug}`} aria-label="blog cover 5xl:h-full 5xl:inline-block" className="gap-4 group">
            <div className="overflow-hidden rounded-2xl flex-shrink-0">
                <Image
                    src={coverImage!}
                    alt="image"
                    className="transition group-hover:scale-110"
                    width={190}
                    height={190}
                    style={{ width: "100%", height: "100%" }}
                    unoptimized={true}
                />
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-4 gap-3 sm:gap-0">
                <div>
                    <h3 className="mt-2 text-xl font-medium text-dark dark:text-white group-hover:text-primary">
                        {title}
                    </h3>
                    <span className="text-base font-medium dark:text-white/50 text-dark/50 leading-loose">
                        {format(new Date(date), "MM, dd, yyyy")}
                    </span>
                </div>
                <div className="py-2 px-4 sm:py-2.5 sm:px-5 bg-dark/5 rounded-full dark:bg-white/15 text-center">
                    <p className="text-sm font-semibold text-dark dark:text-white">{tag}</p>
                </div>
            </div>
        </Link>
    );
};

export default BlogCard;

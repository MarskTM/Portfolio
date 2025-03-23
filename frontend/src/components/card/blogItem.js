
import { Image } from "@heroui/react";
import clsx from 'clsx'
import { ClockIcon } from "@heroicons/react/24/solid";

export default function BlogCard({ title, description, author, time, category, image, blogType }) {
    let blogStyle = getInfoByBlogType(blogType);

    return (
        <div className="flex flex-row items-start justify-evenly space-x-8 p-4 rounded-lg transition-all duration-500 animated-container">

            {/* Hình ảnh */}
            <div className={clsx(
                blogStyle.container,
                `flex-shrink-0 rounded-2xl relative z-0`)}>
                <div className={clsx(
                    blogStyle.postition,
                    blogStyle.animation,
                )}>
                    <Image
                        src={image}
                        alt={title}
                        layout="fill"
                        className={clsx(
                            blogStyle.image,
                        )}

                    />
                </div>
            </div>

            {/* Nội dung */}
            <div className="flex-1 w-3/4 self-start">

                {/* Tiêu đề */}
                <div className="text-left">
                    <h2 className={clsx(`max-w-full font-semibold text-gray-700 cursor-pointer`,
                        blogStyle.titleFont,
                    )}>
                        {title}
                    </h2>
                </div>

                {/* Danh mục */}
                {
                    category &&
                    <div className="w-max text-sm text-gray-600 my-2 rounded-sm bg-amber-100">
                        <span className="px-2 pt-1 text-xs">
                            {category}
                        </span>
                    </div>
                }

                {/* Mô tả */}
                <p className="max-w-full text-gray-600 text-base text-left mt-1 line-clamp-3 overflow-y-hidden text-ellipsis">{description}</p>

                {/* Tác giả & Thời gian */}
                <div className="flex items-center text-gray-500 text-xs mt-3 space-x-2">
                    {/* <UserCircleIcon className="w-6 h-6" />
                    <span>{author}</span> */}
                    <ClockIcon className="w-4 h-4" />
                    <span>{time}</span>
                </div>
            </div>
        </div>
    );
}


function getInfoByBlogType(blogType) {
    switch (blogType) {
        case "suggest":
            return {
                container: "w-48 h-52 border-3 border-gray-500",
                image: "w-48 h-52 shadow-xl rounded-2xl",
                titleFont: "h-28  text-lg animated-title",
                postition: "absolute -top-4 -left-4 z-10 p-0 m-0",
                animation: "hover:translate-3  hover:blur-sm duration-400",
            };
        case "news":
            return {
                image: "w-28 h-24 rounded-md",
                titleFont: "text-sm line-clamp-2 overflow-y-hidden text-ellipsis hover:text-blue-500 duration-400",
            };
        default:
            return {
                image: `w-auto h-auto`,
                titleFont: "text-sm",
            };
    }
};
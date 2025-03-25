
import { Image } from "@heroui/react";
import clsx from 'clsx'
import { ClockIcon } from "@heroicons/react/24/solid";

export default function BlogCard({ title, description, author, time, category, image, blogType }) {
    let blogStyle = getInfoByBlogType(blogType);

    return (
        <div className={clsx(
            blogStyle.containerV1,
            "flex flex-row items-start justify-evenly",
            "rounded-lg transition-all duration-500 animated-container"
        )}>

            {/* Hình ảnh */}
            <div className={clsx(
                blogStyle.containerV2,
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
                {
                    description &&
                    <p className="max-w-full text-gray-600 text-base text-left mt-1 mb-2 line-clamp-3 overflow-y-hidden text-ellipsis">{description}</p>
                }


                {/* Tác giả & Thời gian */}
                <div className="flex items-center text-gray-500 text-xs space-x-2">
                    {/* <UserCircleIcon className="w-6 h-6" />
                    <span>{author}</span> */}
                    <ClockIcon className="w-4 h-4" />
                    <span>{time}</span>
                </div>
            </div>
        </div >
    );
}


function getInfoByBlogType(blogType) {
    switch (blogType) {
        case "suggest":
            return {
                containerV1: "space-x-3 px-2 py-3",
                containerV2: "w-32 h-40 border-2 border-gray-500",
                image: "w-32 h-40 shadow-xl rounded-2xl",
                titleFont: "h-28 text-base animated-title",
                postition: "absolute -top-3 -left-3 z-10 p-0 m-0",
                animation: "hover:translate-3  hover:blur-sm duration-300",
            };
        case "news":
            return {
                containerV1: "space-x-3 p-1",
                image: "w-16 h-16 rounded-md",
                titleFont: "text-xs line-clamp-2 overflow-y-hidden text-ellipsis hover:text-blue-500 duration-300",
            };
        default:
            return {
                image: `w-auto h-auto`,
                titleFont: "text-sm",
            };
    }
};
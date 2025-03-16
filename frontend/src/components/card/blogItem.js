
import { Image } from "@heroui/react";
import { UserCircleIcon, ClockIcon } from "@heroicons/react/24/solid";

export default function BlogCard({ title, description, author, time, category, image, imgeHeight, titleSize }) {
    return (
        <div className="flex items-start space-x-4 p-4 rounded-lg transition-all duration-500">
            {/* Hình ảnh */}
            <div className={`w-1/4 min-h-26 flex-shrink-0 rounded-2xl overflow-hidden`}>
                {image &&
                    <Image
                        src={image}
                        alt={title}
                        layout="fill"
                        height={imgeHeight ? imgeHeight : "100%"}
                    />
                }
            </div>

            {/* Nội dung */}
            <div className="flex-1 w-3/4 ">
                {/* Danh mục */}
                {
                    category &&
                    <div className="w-max text-sm text-gray-600 px-1 py-1 rounded-4xl shadow-md">
                        <span className="px-2 text-xs">
                            {category}
                        </span>
                    </div>
                }

                {/* Tiêu đề */}
                <h2 className={`max-w-full h-1/2 text-left font-semibold mt-2 text-gray-700 hover:text-blue-500 cursor-pointer overflow-y-hidden text-ellipsis ${titleSize ? titleSize : "text-sm"}`}>
                    {title}
                </h2>

                {/* Mô tả */}
                <p className="max-w-full text-gray-600 text-base text-left mt-1 line-clamp-2 overflow-y-hidden text-ellipsis ">{description}</p>

                {/* Tác giả & Thời gian */}
                <div className="flex items-center text-gray-500 text-xs mt-3 space-x-2">
                    <UserCircleIcon className="w-6 h-6" />
                    <span>{author}</span>
                    <ClockIcon className="w-4 h-4" />
                    <span>{time}</span>
                </div>
            </div>
        </div>
    );
}

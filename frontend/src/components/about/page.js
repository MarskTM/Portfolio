"use client";

import { CodeBracketIcon, PencilIcon } from "@heroicons/react/24/outline";

export default function About() {
    return (
        <div
            className="container mx-auto flex items-center justify-between my-28 min-h-96 bg-[url('/images/about_background.svg')] bg-[length:80%] bg-[position:right_center] bg-no-repeat"
        >
            <div className="p-8 md:p-12 xl:p-14 bg-gray-100 bg-opacity-90 lg:max-w-2xl xl:max-w-4xl  min-h-[500px]">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 text-center">
                    A BIT ‘BOUT MY JOURNEY
                </h2>
                <p className="mt-4 text-gray-700 leading-relaxed">
                    I'm a freelance frontend developer based in Ahmedabad, India, with almost{" "}
                    <strong>6 years</strong> of experience. My journey started at an MNC, then I moved to a startup where I had the chance to build some cool projects that taught me a ton.
                </p>
                <p className="mt-2 text-gray-700">
                    Hành trình của tôi bắt đầu từ sự tò mò vô tận về thế giới xung quanh. Từ những bước đi chập chững đầu tiên, tôi đã không ngừng học hỏi, khám phá và thử thách bản thân. Những trải nghiệm, cả thành công lẫn thất bại, đã giúp tôi trưởng thành hơn và định hình con người tôi ngày hôm nay. Tôi tin rằng, mỗi chặng đường đều là một bài học quý giá, và tôi luôn sẵn sàng đón nhận những điều mới mẻ phía trước.
                </p>

                <div className="mt-6">
                    <h3 className="font-semibold text-gray-800">Here’s some tech and frameworks I love and work with:</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {[
                            "JavaScript",
                            "TypeScript",
                            "React",
                            "Next.js",
                            "Sass",
                            "TailwindCSS",
                            "Node.js",
                            "Express",
                            "Figma",
                            "Storybook",
                            "Cypress",
                            "Jest",
                        ].map((tech, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 text-sm font-medium bg-gray-200 text-gray-800 rounded-md"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>


                <p className="mt-6 text-gray-700">
                    <span className="font-bold">Fun fact:</span> I've been learning Figma just for fun, mainly to create templates and get a feel for how the tool works. It’s been a great way to boost my creativity!
                </p>
            </div>

            <div className="hidden md:block">
                
            </div>
        </div>
    );
}

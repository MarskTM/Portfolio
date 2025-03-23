import { useState } from "react";
import { Card, CardFooter, CardBody, Image } from "@heroui/react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import Pagination from "@components/pagination/page";

const projects = [
    {
        title: "Fiskil",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra.",
        image: "/images/project_img.png", // Ảnh lưu trong thư mục public/
        tech: ["React", "Next.js", "TypeScript", "PostgreSQL", "TailwindCSS", "Figma", "Cypress", "Storybook", "Git"],
        link: "https://example.com",
    },
    {
        title: "Fiskil",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra.",
        image: "/images/project_img.png",
        tech: ["React", "Next.js", "TypeScript", "PostgreSQL", "TailwindCSS", "Figma", "Cypress", "Storybook", "Git"],
        link: "https://example.com",
    },
    {
        title: "Fiskil",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra.",
        image: "/images/project_img.png",
        tech: ["React", "Next.js", "TypeScript", "PostgreSQL", "TailwindCSS", "Figma", "Cypress", "Storybook", "Git"],
        link: "https://example.com",
    },
];

export default function Project() {
    const [currentPage, setCurrentPage] = useState(1);

    return (
        <section className="container lg:w-7xl mt-28 mb-16 mx-auto ">
            <div className="flex flex-col items-center">
                <h2 className="text-xl md:text-3xl font-bold text-gray-600">Projects</h2>
                <p className="mt-2 text-gray-600">
                    Check out some of my recent work – cool products I've been part of, built using the latest tech and libraries
                    to create something awesome!
                </p>
            </div>

            <div className="mx-auto mt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 justify-items-center">
                {projects.map((project, index) => (
                    <Card className="w-sm md:w-xs my-3 lg:w-sm border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2 min-h-[370px]" key={index}>
                        <CardBody className="overflow-visible">
                            <Image
                                className="rounded-xl"
                                alt={project.title}
                                src={project.image}
                                width="100%"
                                height="280px"
                            />
                        </CardBody>
                        <CardFooter className="pt-2 px-4 pb-4 flex-col items-start">
                            <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
                            <p className="mt-2 text-gray-600 sm:hidden md:block">{project.description}</p>

                            <h4 className="font-semibold text-large mt-2 sm:hidden md:block">Frontend Tech</h4>
                            {/* Công nghệ sử dụng */}
                            <div className="flex flex-wrap gap-2 my-2">
                                {project.tech.map((tech, idx) => (
                                    <span key={idx + index} className="px-3 py-1 text-sm bg-gray-200 rounded-full">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Link dự án */}
                            <div className="mt-4 w-full flex flex-row items-end justify-end gap-2 leading-relaxed">
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center text-blue-600 hover:underline"
                                >
                                    View Project <ArrowTopRightOnSquareIcon className="ml-1 w-5 h-5" />
                                </a>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-2 flex items-center text-white bg-black rounded-full hover:bg-gray-800 transition"
                                >
                                    Github  <ArrowTopRightOnSquareIcon className="ml-1 w-5 h-5" />
                                </a>
                            </div>
                        </CardFooter>
                    </Card>
                ))}
            </div>
            <div className="md:mx-16 flex flex-row justify-end mt-4">
                <Pagination showControls currentPage={currentPage} totalPages={5} onPageChange={(page) => setCurrentPage(page)} />
            </div>
        </section>
    );
}

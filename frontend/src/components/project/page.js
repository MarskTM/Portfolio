import Image from "next/image";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

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
    return (
        <section className="w-full my-28">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-900">My Project</h2>
                <p className="mt-2 text-gray-600">
                    Check out some of my recent work – cool products I've been part of, built using the latest tech and libraries
                    to create something awesome!
                </p>
            </div>

            <div className="max-w-5xl mx-auto mt-10 space-y-10">
                {projects.map((project, index) => (
                    <div key={index} className="p-6 bg-white shadow-lg rounded-xl flex flex-col md:flex-row md:space-x-6">
                        {/* Ảnh project */}
                        <div className="relative w-full md:w-1/2 h-60 rounded-lg overflow-hidden">
                            <Image src={project.image} alt={project.title} layout="fill" objectFit="cover" />
                        </div>

                        {/* Thông tin dự án */}
                        <div className="mt-4 md:mt-0 md:w-1/2">
                            <h3 className="text-2xl font-semibold text-gray-900">{project.title}</h3>
                            <p className="mt-2 text-gray-600">{project.description}</p>

                            {/* Công nghệ sử dụng */}
                            <div className="flex flex-wrap mt-4 gap-2">
                                {project.tech.map((tech, idx) => (
                                    <span key={idx} className="px-3 py-1 text-sm bg-gray-200 rounded-full">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Link dự án */}
                            <div className="mt-4">
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center text-blue-600 hover:underline"
                                >
                                    View Project <ArrowTopRightOnSquareIcon className="ml-2 w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

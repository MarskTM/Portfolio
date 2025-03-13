import { Card, CardFooter, CardBody, Image } from "@heroui/react";
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
        <section className="w-full my-28 mx-auto container">
            <div className="mx-auto text-left">
                <h2 className="text-xl md:text-xl font-bold text-gray-600 border-b-2 max-w-max">My Project</h2>
                <p className="mt-2 text-gray-600">
                    Check out some of my recent work – cool products I've been part of, built using the latest tech and libraries
                    to create something awesome!
                </p>
            </div>

            <div className="mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4">
                {projects.map((project, index) => (
                    <Card className="border border-gray-200 rounded-xl shadow-lg w-sm">
                        <CardBody className="overflow-visible">
                            <Image
                                className="object-cover rounded-xl"
                                alt={project.title}
                                src={project.image}
                                width="full"
                            />
                        </CardBody>
                        <CardFooter className="pt-2 px-4 pb-4 flex-col items-start">
                            <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
                            <p className="mt-2 text-gray-600">{project.description}</p>

                            <h4 className="font-semibold text-large my-2">Frontend Tech</h4>
                            {/* Công nghệ sử dụng */}
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech, idx) => (
                                    <span key={idx} className="px-3 py-1 text-sm bg-gray-200 rounded-full">
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


                    // <div key={index} className="w-52 p-6 bg-white shadow-lg rounded-xl flex flex-col md:space-x-6">
                    //     {/* Ảnh project */}
                    //     <div className="relative w-full md:w-1/2 h-60 rounded-lg overflow-hidden">
                    //         <Image src={project.image} alt={project.title} layout="fill" objectFit="cover" />
                    //     </div>

                    //     {/* Thông tin dự án */}
                    //     <div className="mt-4 md:mt-0 md:w-1/2">
                    //         <h3 className="text-2xl font-semibold text-gray-900">{project.title}</h3>
                    //         <p className="mt-2 text-gray-600">{project.description}</p>




                    //     </div>
                    // </div>
                ))}
            </div>
        </section>
    );
}

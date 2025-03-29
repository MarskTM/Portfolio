import { useState } from "react";
import { Card, CardFooter, CardBody, Image } from "@heroui/react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import Pagination from "@components/pagination/page";
import { ProjectCard } from "@components/card";
import clsx from 'clsx'

const projects = [
    {
        title: "Fiskil",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra.",
        image: "/images/project_img.png", // Ảnh lưu trong thư mục public/
        tech: ["React", "Next.js", "TypeScript", "PostgreSQL"],
        link: "https://example.com",
    },
    {
        title: "Fiskil",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra.",
        image: "/images/project_img.png",
        tech: ["React", "Next.js", "TypeScript", "PostgreSQL"],
        link: "https://example.com",
    },
    {
        title: "Fiskil",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra.",
        image: "/images/project_img.png",
        tech: ["React", "Next.js", "TypeScript", "PostgreSQL", "TailwindCSS"],
        link: "https://example.com",
    },
];

export default function Project() {
    const [currentPage, setCurrentPage] = useState(1);

    return (
        <section id="projects" className={clsx(
            "container lg:w-5xl pt-24 pb-10 mx-auto",
            "max-sm:px-4"
        )}>
            <div className="flex flex-col items-center">
                <h2 className="text-xl md:text-2xl font-bold text-gray-700 drop-shadow-sm">Projects</h2>
                <p className="mt-2 text-gray-600">
                    Check out some of my recent work – cool products I've been part of, built using the latest tech and libraries
                    to create something awesome!
                </p>
            </div>

            <div className="mx-auto mt-10 flex flex-wrap gap-4 justify-items-center">
                {projects.map((project, index) => (
                    <ProjectCard key={index} aosDelay={index * 200} />
                ))}
            </div>
            <div className="md:mx-16 flex flex-row justify-end mt-4">
                <Pagination showControls currentPage={currentPage} totalPages={5} onPageChange={(page) => setCurrentPage(page)} />
            </div>
        </section>
    );
}

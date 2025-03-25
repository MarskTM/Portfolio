export const steps = [
    {
        id: "A",
        title: "Spot issues and improvements",
        description: "Audit your site’s current state and identify opportunities for design and content enhancements.",
    },
    {
        id: "B",
        title: "Create site prototypes",
        description: "Use wireframes or mockups to visualize the new design before development.",
    },
    {
        id: "C",
        title: "Gather initial feedback",
        description: "Share early designs with team members or stakeholders to collect input.",
    },
    {
        id: "D",
        title: "Rebuild and revise",
        description: "Incorporate feedback and iterate on the design to improve the experience.",
    },
    {
        id: "E",
        title: "Kickstart development",
        description: "Begin building the redesigned site using your preferred stack.",
    },
    {
        id: "F",
        title: "Conduct a final round of feedback",
        description: "Ensure everything works as expected by sharing with users/testers.",
    },
    {
        id: "G",
        title: "Optimize your site for SEO",
        description: "Add meta tags, improve performance, and enhance discoverability.",
    },
    {
        id: "H",
        title: "Launch!",
        description: "Make the site live and celebrate your launch.",
    },
];

export function StepCard({ step, onDelete }) {
    return (
        <div className="flex items-start gap-4 bg-white border border-red-300 shadow-md rounded-xl p-4 w-full max-w-md">
            <div className="bg-red-600 text-white font-bold rounded-full h-8 w-8 flex items-center justify-center">
                {step.id}
            </div>
            <div className="flex-1">
                <h3 className="text-lg font-semibold text-red-700">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
            </div>
            {onDelete && (
                <button onClick={() => onDelete(step.id)} className="text-red-500 hover:text-red-700">
                    &times;
                </button>
            )}
        </div>
    );
}

import { useState } from "react";

export default function StepList({ initialSteps }) {
    const [steps, setSteps] = useState(initialSteps);

    const handleDelete = (id) => {
        setSteps(steps.filter((step) => step.id !== id));
    };

    return (
        <div className="relative w-full h-[500px] flex flex-col items-start justify-start p-10 bg-gray-50">

            {/* Box 1 - Left */}
            <div className="absolute top-0 left-10 w-40 h-24 bg-white border-2 border-gray-800 rounded shadow-md z-10 flex items-center justify-center">
                Box 1
            </div>

            {/* Line from Box 1 to Box 2 (L shape) */}
            <div className="absolute top-12 left-50 w-12 h-0.5 bg-black" /> {/* horizontal */}
            <div className="absolute top-12 left-[14.5rem] w-0.5 h-80 bg-black" /> {/* vertical */}

            {/* Box 2 - Right */}
            <div className="absolute top-80 left-[14rem] w-40 h-24 bg-white border-2 border-gray-800 rounded shadow-md z-10 flex items-center justify-center">
                Box 2
            </div>

            {/* Line from Box 2 to Box 3 (inverted L) */}
            <div className="absolute top-[21rem] left-[14rem] w-0.5 h-24 bg-black" /> {/* vertical */}
            <div className="absolute top-[27rem] left-[6rem] w-[8rem] h-0.5 bg-black" /> {/* horizontal */}

            {/* Box 3 - Left again */}
            <div className="absolute top-[26rem] left-10 w-40 h-24 bg-white border-2 border-gray-800 rounded shadow-md z-10 flex items-center justify-center">
                Box 3
            </div>
        </div>
    );
}
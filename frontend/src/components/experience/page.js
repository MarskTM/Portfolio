import Image from "next/image";

const experiences = [
    {
        company: "Upwork",
        title: "CÔNG TY CỔ PHẦN VCCORP",
        period: "Nov 2021 - Present",
        description: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Ut pretium arcu et massa semper, id fringilla leo semper.",
            "Sed quis justo ac magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        ],
        logo: "/images/vccorp_logo.png", // Đặt logo công ty vào thư mục public/
    },
    {
        company: "Upwork",
        title: "CÔNG TY CỔ PHẦN CHUYỂN ĐỔI SỐ PHENIKAA",
        period: "Jul 2017 - Oct 2021",
        description: [
            "Sed quis justo ac magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Sed quis justo ac magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        ],
        logo: "/images/phenikaa_logo.png",
    },
];

export default function Experience() {
    return (
        <section className="w-full m-auto py-28 bg-gray-50">
            <div className="max-w-3xl mx-auto text-center">
                <span className="px-4 py-1 text-xl md:text-xl font-semibold text-gray-600 bg-gray-300 rounded-full">
                    Experience
                </span>
                <h2 className="mt-4 text-base font-semibold text-gray-600 leading-relaxed">
                    Here is a quick summary of my most recent experiences
                </h2>
            </div>

            <div className="max-w-3xl mx-auto mt-8 space-y-6">
                {experiences.map((exp, index) => (
                    <div key={index} className="p-8 bg-white shadow-lg rounded-lg flex flex-col md:flex-row justify-between">
                        <div className="flex items-start space-x-8">
                            <div className="relative w-24 h-24 mr-8">
                                <Image src={exp.logo} alt={exp.company} layout="fill" objectFit="contain" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold">{exp.title}</h3>
                                <ul className="mt-2 list-disc list-inside text-gray-600">
                                    {exp.description.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="text-gray-500 text-sm mt-4 md:mt-0">{exp.period}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}

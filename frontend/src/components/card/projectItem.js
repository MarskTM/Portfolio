import { CubeIcon } from '@heroicons/react/24/solid'
import clsx from 'clsx'

export default function ProjectCard() {
    return (
        <div className={clsx(
            "w-xl lg:w-md h-60 p-6 my-1 m-auto",
            "bg-white shadow-md rounded-2xl border border-gray-100",
            "hover:shadow-xl hover:shadow-blue-300/10 transition-shadow",
            "duration-300 ease-linear",
        )}>
            {/* Header */}
            <div className="flex items-center space-x-4 mb-4">
                <div className="bg-black p-2 rounded-lg">
                    <CubeIcon className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-lg font-semibold animated-title">Weaverse SDKs</h2>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-sm mb-6 line-clamp-3 overflow-y-hidden text-ellipsis">
                Open-source toolkits for seamless integration and development of Shopify Hydrogen themes and headless commerce solutions.Open-source toolkits for seamless integration and development of
            </p>

            {/* Footer */}
            <div className="grid grid-cols-2 gap-4 justify-start items-start mtext-sm text-gray-500">
                <div>
                    <span className="text-gray-600 text-sm">Links</span>
                    <div className="flex flex-row">
                        <p className="font-semibold text-gray-600 text-sm mb-6 animated-title">
                            Website
                        </p>
                        <p className="font-semibold text-gray-600 text-sm mb-6 ml-1 pl-1 border-l-1 animated-title">
                            GitHub
                        </p>
                    </div>

                </div>
                <div className="flex items-center space-x-2">
                    <span className="text-gray-600 text-sm">Stack</span>
                    <div className="flex flex-row"></div>
                </div>
            </div>
        </div>
    )
}
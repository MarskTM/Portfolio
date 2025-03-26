"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <div className="flex items-center justify-center space-x-2 mt-6 opacity-95">
            {/* Nút Previous */}
            <button
                className={`p-2 rounded-md transition-all duration-200 ${currentPage === 1 ? "text-gray-400 cursor-not-allowed" : "hover:bg-gray-200 dark:hover:bg-gray-700"
                    }`}
                onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                <ChevronLeftIcon className="w-5 h-5" />
            </button>

            {/* Hiển thị số trang */}
            {pages.map((page) => (
                <motion.button
                    key={page}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`text-sm px-3 py-1.5 rounded-lg transition-all duration-600 ${currentPage === page
                            ? "bg-blue-500 text-white shadow-lg"
                            : "hover:bg-gray-200 dark:hover:bg-gray-700"
                        }`}
                    onClick={() => onPageChange(page)}
                >
                    {page}
                </motion.button>
            ))}

            {/* Nút Next */}
            <button
                className={`p-2 rounded-md transition-all duration-200 ${currentPage === totalPages ? "text-gray-400 cursor-not-allowed" : "hover:bg-gray-200 dark:hover:bg-gray-700 "
                    }`}
                onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                <ChevronRightIcon className="w-5 h-5" />
            </button>
        </div>
    );
}

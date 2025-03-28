// components/ScrollToTopButton.js
'use client'
import { useEffect, useState } from 'react'
import { ArrowUpIcon } from '@heroicons/react/24/solid'

export default function ScrollToTopButton() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setVisible(true)
            } else {
                setVisible(false)
            }
        }

        window.addEventListener('scroll', toggleVisibility)
        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <div className="fixed bottom-10 right-2 z-40">
            {visible && (
                <button
                    onClick={scrollToTop}
                    className=" hover:bg-gray-100 text-gray-500 p-3 rounded-full shadow-lg transition-all"
                    aria-label="Scroll to top"
                >
                    <ArrowUpIcon className="h-5 w-5" />
                </button>
            )}
        </div>
    )
}

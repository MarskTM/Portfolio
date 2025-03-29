"use client";
import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSInit() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            // once: true,
            once: false, // Cho phép animation chạy lại mỗi khi phần tử cuộn vào màn hình 
            mirror: true,
        });
    }, []);
    return null;
}
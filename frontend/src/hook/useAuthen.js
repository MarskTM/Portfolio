'use client';

import { useEffect } from "react";
import { useStore } from "zustand";

// Define your Zustand store
const useAuthStore = create((set) => ({
    role: null, // Example role state
    setRole: (role) => set({ role }),
}));

const useAuthen = (requiredRole) => {
    const role = useStore((state) => state.role);

    useEffect(() => {
        if (role !== requiredRole) {
            alert("You do not have the appropriate role to access this resource.");
        }
    }, [role, requiredRole]);
};

export default useAuthen;

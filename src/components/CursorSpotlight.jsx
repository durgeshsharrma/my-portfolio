import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CursorSpotlight = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
            if (!isVisible) setIsVisible(true);
        };

        window.addEventListener("mousemove", updateMousePosition);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
        };
    }, [isVisible]);

    return (
        <motion.div
            className="fixed top-0 left-0 w-[25rem] h-[25rem] bg-purple-600/30 rounded-full blur-[120px] pointer-events-none z-30 mix-blend-screen"
            animate={{
                x: mousePosition.x - 200,
                y: mousePosition.y - 200,
            }}
            transition={{
                type: "spring",
                damping: 25,
                stiffness: 100,
                mass: 0.2, // Low mass for quick response
            }}
            style={{
                opacity: isVisible ? 1 : 0,
            }}
        />
    );
};

export default CursorSpotlight;

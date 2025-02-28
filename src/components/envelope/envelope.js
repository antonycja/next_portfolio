'use client'
import { useEffect } from 'react';

export default function LottieAnimation( {link} ) {
    useEffect(() => {
        // Check if the Lottie Player script is already added
        if (!document.querySelector("script[src='https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js']")) {
            const lottieScript = document.createElement("script");
            lottieScript.src = "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js";
            lottieScript.async = true;
            document.body.appendChild(lottieScript);
        }

        // No cleanup needed here as the script should stay available for other components
    }, []);

    return (
        <lottie-player
            src={link}
            background="transparent"
            speed="1"
            style={{ width: '300px', height: '300px' }}
            loop
            autoplay
        ></lottie-player>
    );
}

"use client"
import { useEffect, useState } from "react";

function LottieAnimation() {
    const [isBrowser, setIsBrowser] = useState(false);

    useEffect(() => {
        // Ensure this runs only on the client-side
        setIsBrowser(true);
    }, []);

    if (!isBrowser) {
        return null;  // Avoid rendering on the server-side
    }

    return (
        <lottie-player
            src="https://assets4.lottiefiles.com/packages/lf20_cbc2dy5y.json"
            background="transparent"
            speed="1"
            style={{ width: '300px', height: '300px' }}
            loop
            autoplay
        ></lottie-player>
    );
}

export default LottieAnimation;

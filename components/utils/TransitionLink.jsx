'use client'


import TransitionOverlay from './TransitionOverlay'

import { Link, useRouter } from "@/i18n/routing";
import { useState } from "react";

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export const TransitionLink = ({ 
        children, 
        toggleMenu,
        href, 
        ...props 
}) => {

    const router = useRouter();
    const [isTransitioning, setIsTransitioning] = useState(false);

    const handleClick = async (e) => {
        e.preventDefault();

        await sleep(500);
 
        setIsTransitioning(true);
        
        await sleep(800);
        
        if(toggleMenu) toggleMenu();

        router.push(href);

        await sleep(500);

        setIsTransitioning(false);
    }

    return (
        <>
            <TransitionOverlay is isTransition={isTransitioning} />
            <Link 
                onClick={handleClick}
                href={href}
                {...props}
            >{children}</Link>
        </>
    );
}

export default TransitionLink;
'use client'

import { delay } from "motion";
import { AnimatePresence, motion } from "motion/react";
import { createPortal } from 'react-dom';

export default function TransitionOverlay({ isTransition }) {
    if (typeof document === "undefined") return null;

    return createPortal(
        <AnimatePresence>
            {isTransition && (
                <motion.div
                    key='overlay1'
                    variants={overlayVariants}
                    initial={'closed'}
                    animate= {'open'}
                    exit={'exit'}
                    style={style}
                />
            )}
            {isTransition && (
                <motion.div
                    key='overlay2'
                    variants={overlayVariants2}
                    initial={'closed'}
                    animate= {'open'}
                    exit={'exit'}
                    style={style2}
                />
            )}
            {isTransition && (
                <motion.div
                    key='overlay3'
                    variants={overlayVariants3}
                    initial={'closed'}
                    animate= {'open'}
                    exit={'exit'}
                    style={style3}
                />
            )}
        </AnimatePresence>,
        document.body
    );
}

const overlayVariants = {
    open: (height = 1000) => ({ 
      clipPath:  `circle(${height * 2 + 200}px at 50% 100%)`,
      transition: {duration: 2.0, ease: "easeInOut"}
    }),
    closed: { 
        clipPath: `circle(100px at 110% 110%)`,
        transition: {duration: 1.0, ease: "easeInOut"}
    },
    exit: { 
        clipPath: "circle(100px at -10% -10%)",
        transition: {duration: 1.0, ease: "easeInOut", delay: 0.2}
    },
}

const overlayVariants2 = {
    open: (height = 1000) => ({ 
        clipPath:  `circle(${height * 2 + 200}px at 50% 100%)`,
        transition: {duration: 1.9, ease: "easeInOut", delay: 0.1}
      }),
    closed: { 
        clipPath: `circle(100px at 110% 110%)`,
        transition: {duration: 1.0, ease: "easeInOut"}
    },
    exit: { 
        clipPath: "circle(100px at -10% -10%)",
        transition: {duration: 1.0, ease: "easeInOut", delay: 0.1}
    },
}

const overlayVariants3 = {
    open: (height = 1000) => ({ 
        clipPath:  `circle(${height * 2 + 200}px at 50% 100%)`,
        transition: {duration: 1.8, ease: "easeInOut", delay: 0.2}
      }),
    closed: { 
        clipPath: `circle(100px at 110% 110%)`,
        transition: {duration: 1.0, ease: "easeInOut"}
    },
    exit: { 
        clipPath: "circle(100px at -10% -10%)",
        transition: {duration: 1.0, ease: "easeInOut"}
      },
}

/*
*   ------- Styles -------
*/

const style = {
    position: 'fixed',
    top: 0,
    right: 0,
    height: '100dvh',
    width: '100dvw',
    background: '#EF798A',
    zIndex: 9998,
}

const style2 = {
    position: 'fixed',
    top: 0,
    right: 0,
    height: '100dvh',
    width: '100dvw',
    background: '#80ef80',
    zIndex: 9998,
}

const style3 = {
    position: 'fixed',
    top: 0,
    right: 0,
    height: '100dvh',
    width: '100dvw',
    background: '#a374ff',
    zIndex: 9998,
}
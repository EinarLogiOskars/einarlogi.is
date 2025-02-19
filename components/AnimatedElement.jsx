'use client'

import { motion, AnimatePresence } from 'motion/react';

export default function AnimatedElement({ 
    children,
    key,
    layoutId,
    transition,
    initial,
    animate,
    exit,
    style
    }) {
    return (
        <motion.div
            key={key}
            layoutId={layoutId}
            transition={transition}
            initial={initial}
            animate={animate}
            exit={exit}
            style={style}
        >
            {children}
        </motion.div>
    );
}
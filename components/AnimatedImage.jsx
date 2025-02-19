'use client'

import { motion } from 'motion/react';

export default function AnimatedImage() {
    return (
        <motion.img
        layoutId='einarImg'
        transition={{ duration: 1.5, ease: "easeInOut" }}
        style={style}
        src='../einarlogi.webp'
        alt='Einar Logi' />
    );
}

/**
 * ==============   Styles   ================
 */

const style = {
    height: "100%",
    width: "100%",
    border: "5px solid white",
    borderRadius: "50%",
}
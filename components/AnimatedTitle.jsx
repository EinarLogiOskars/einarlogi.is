'use client'

import { motion } from "motion/react";

export default function AnimatedTitle({
    text = "Einar Logi",
    fontFamily = "Montserrat",
    fontWeight = "300",
    fontSize = "3rem",
}) {
    return(
        <motion.h1
            layoutId='nameSection'
            transition={{ duration: 1.5, ease: "easeInOut"}}
            style={{ fontFamily, fontWeight, fontSize}}
        >
            {text}
        </motion.h1>
    );
}
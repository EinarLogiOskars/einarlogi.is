'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import styles from './Hamburger.module.css';

export default function Hamburger({ isOpen, onClick }) {

    return (
        <motion.div
            className={styles.hamburgerWrapper} 
        >
            <button
                className={`${styles.hamburger} ${isOpen ? styles.open : ''}`}
                onClick={onClick}
                aria-label='Toggle menu'
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
        </motion.div>
    );
}
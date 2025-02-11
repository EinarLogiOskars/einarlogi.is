'use client';

import { useState } from 'react';
import styles from './Hamburger.module.css';

export default function Hamburger({ isOpen, onClick }) {

    return (
        <button
            className={`${styles.hamburger} ${isOpen ? styles.open : ''}`}
            onClick={onClick}
            aria-label='Toggle menu'
        >
            <span></span>
            <span></span>
            <span></span>
        </button>
    );
}
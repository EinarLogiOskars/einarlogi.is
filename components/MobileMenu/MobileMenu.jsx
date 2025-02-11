'use client';

import styles from './MobileMenu.module.css';

export default function MobileMenu({ isOpen, onClose }) {
    return (
        <div
            className={`${styles.overlay} ${isOpen ? styles.open : ''}`}
            onClick={onClose}
        >
            <nav className={styles.menu} onClick={(e) => e.stopPropagation()}>
                <ul>
                    <li>
                        <a href='/' onClick={onClose}>Home</a>
                    </li>
                    <li>
                        <a href='/about' onClick={onClose}>About</a>
                    </li>
                    <li>
                        <a href='/projects' onClick={onClose}>Projects</a>
                    </li>
                    <li>
                        <a href='/contact' onClick={onClose}>Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
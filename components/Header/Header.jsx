'use client'
import { useState } from 'react'
import Hamburger from '../Hamburger/Hamburger'
import MobileMenu from '../MobileMenu/MobileMenu'
import styles from './Header.module.css'

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    }

    return (
        <header className={styles.header}>
            <h5 className={styles.title}>Einar Logi</h5>
            <Hamburger isOpen={menuOpen} onClick={toggleMenu}/>
            <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)}/>
        </header>
    )
}
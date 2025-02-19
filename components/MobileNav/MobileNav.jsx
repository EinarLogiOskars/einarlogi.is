'use client'

import { motion } from 'motion/react';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

import Hamburger from '../Hamburger/Hamburger';
import TransitionLink from '../utils/TransitionLink';

import styles from './MobileNav.module.css';

export default function MobileNav2() {
    const [menuOpen, setMenuOpen] = useState(false);
    const t = useTranslations('Menu')

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    }

    return (
        <div className={styles.navWrapper}>
            <div className={styles.nav}>
                <Hamburger isOpen={menuOpen} onClick={toggleMenu} />
            </div>
            <motion.nav
                variants={navVariants}
                initial={false}
                animate={menuOpen ? 'open' : 'closed'}
                className={styles.navOverlay}
            >
                <NavItems menuOpen={menuOpen} toggleMenu={toggleMenu}/>
            </motion.nav>
        </div>
    );
}

const navVariants = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at calc(100% - 3rem) 3rem)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2,
        },
    }),
    closed: {
        clipPath: "circle(0px at calc(100% - 3rem) 3rem)",
        transition: {
            delay: 0.2,
            type: "spring",
            stiffness: 400,
            damping: 40,
        },
    },
} 

const NavItems = ({ toggleMenu, menuOpen }) => {
    return (
        <motion.ul className={styles.list} variants={listVariants}>
            <motion.li
                className={styles.listItem}
                variants={listItemVariants}
                whileHover={{ color: '#a374ff' }}
            >
                <TransitionLink href={'/'} toggleMenu={toggleMenu}>
                    <motion.span className={styles.navLinkLetter} variants={letterVariants}>h</motion.span>
                    <motion.span className={styles.navLinkLetter} variants={letterVariants}>o</motion.span>
                    <motion.span className={styles.navLinkLetter} variants={letterVariants}>m</motion.span>
                    <motion.span className={styles.navLinkLetter} variants={letterVariants}>e</motion.span>
                    <motion.span className={styles.navLinkLetter} variants={letterVariants}>.</motion.span>
                </TransitionLink>
            </motion.li>
            <motion.li
                className={styles.listItem}
                variants={listItemVariants}
                whileHover={{ color: '#80ef80' }}
            >
                <TransitionLink href={'/about'} toggleMenu={toggleMenu}>
                    <motion.span className={styles.navLinkLetter} variants={letterVariants}>a</motion.span>
                    <motion.span className={styles.navLinkLetter} variants={letterVariants}>b</motion.span>
                    <motion.span className={styles.navLinkLetter} variants={letterVariants}>o</motion.span>
                    <motion.span className={styles.navLinkLetter} variants={letterVariants}>u</motion.span>
                    <motion.span className={styles.navLinkLetter} variants={letterVariants}>t</motion.span>
                    <motion.span className={styles.navLinkLetter} variants={letterVariants}>.</motion.span>
                </TransitionLink>
            </motion.li>
            <motion.li
                className={styles.listItem}
                variants={listItemVariants}
                whileHover={{ color: '#ef798a' }}
            >
                <TransitionLink href={'/projects'} toggleMenu={toggleMenu}>
                    <motion.span className={styles.navLinkLetter} variants={letterVariants}>p</motion.span>
                    <motion.span className={styles.navLinkLetter} variants={letterVariants}>r</motion.span>
                    <motion.span className={styles.navLinkLetter} variants={letterVariants}>o</motion.span>
                    <motion.span className={styles.navLinkLetter} variants={letterVariants}>j</motion.span>
                    <motion.span className={styles.navLinkLetter} variants={letterVariants}>e</motion.span>
                    <motion.span className={styles.navLinkLetter} variants={letterVariants}>c</motion.span>
                    <motion.span className={styles.navLinkLetter} variants={letterVariants}>t</motion.span>
                    <motion.span className={styles.navLinkLetter} variants={letterVariants}>s</motion.span>
                    <motion.span className={styles.navLinkLetter} variants={letterVariants}>.</motion.span>
                </TransitionLink>
            </motion.li>
            <motion.li
                className={styles.listItem}
                variants={listItemVariants}
                whileHover={{ color: '#ffc759' }}
            >
                <TransitionLink href={'/contact'} toggleMenu={toggleMenu}>
                    <motion.span className={styles.navLinkLetter} variants={letterVariants}>c</motion.span>
                    <motion.span className={styles.navLinkLetter} variants={letterVariants}>o</motion.span>
                    <motion.span className={styles.navLinkLetter} variants={letterVariants}>n</motion.span>
                    <motion.span className={styles.navLinkLetter} variants={letterVariants}>t</motion.span>
                    <motion.span className={styles.navLinkLetter} variants={letterVariants}>a</motion.span>
                    <motion.span className={styles.navLinkLetter} variants={letterVariants}>c</motion.span>
                    <motion.span className={styles.navLinkLetter} variants={letterVariants}>t</motion.span>
                    <motion.span className={styles.navLinkLetter} variants={letterVariants}>.</motion.span>
                </TransitionLink>
            </motion.li>
        </motion.ul>
    );
}

const listVariants = {
    open: {
        transition: {
        staggerChildren: 0.2, // each child starts 0.1s after the previous
        },
    },
    closed: {},
};

const listItemVariants = {
    open: {
        transition: {
        staggerChildren: 0.1,
        },
    },
    closed: {},
};

const letterVariants = {
    open: {
        x: 0,
        opacity: 1,
        transition: { type: 'spring', duration: 1.0 },
    },
    closed: {
        x: 1000,
        opacity: 0,
    },
};

// const itemVariants = {
//     open : {
//         y: 0,
//         opacity: 1,
//         visibility: 'visible',
//         transition: {
//             y: { stiffness: 1000, velocity: -100},
//         },
//     },
//     closed: {
//         y: 50,
//         opacity: 0,
//         visibility: 'hidden',
//         transition: {
//             y: { stiffness: 1000 }
//         }
//     }
// }
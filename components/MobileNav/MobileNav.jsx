'use client'

import { motion } from 'motion/react';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { usePathname, useRouter } from '@/i18n/routing';
import { useParams } from 'next/navigation';

import Hamburger from '../Hamburger/Hamburger';
import TransitionLink from '../utils/TransitionLink';

import styles from './MobileNav.module.css';

export default function MobileNav() {
    const [menuOpen, setMenuOpen] = useState(false);
    const t = useTranslations('Menu')
    const router = useRouter();
    const pathname = usePathname();
    const params = useParams();

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    }

    const localeChange = () => {
        const nextLocale = t('locale');
        router.replace(
            {pathname, params},
            {locale: nextLocale}
        );
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
                <NavItems toggleMenu={toggleMenu} localeChange={localeChange} t={t}/>
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
            duration: 2.0,
            type: "spring",
            stiffness: 400,
            damping: 40,
        },
    },
} 

const NavItems = ({ toggleMenu, localeChange, t }) => {
    return (
        <motion.ul className={styles.list} variants={listVariants}>
            
            <motion.li
                className={styles.listItem}
                variants={listItemVariants}
                whileHover={{ color: '#a374ff' }}
            >
                <TransitionLink href={'/'} toggleMenu={toggleMenu}>
                    {t('home').split('').map((char, i) => (
                        <motion.span key={i} className={styles.navLinkLetter} variants={letterVariants}>{char}</motion.span>
                    ))}
                    <motion.span className={styles.navLinkLetter} variants={letterVariants} style={{ color: 'var(--accentPurple)'}}>.</motion.span>
                </TransitionLink>
            </motion.li>
            <motion.li
                className={styles.listItem}
                variants={listItemVariants}
                whileHover={{ color: '#80ef80' }}
            >
                <TransitionLink href={'/about'} toggleMenu={toggleMenu}>
                    {t('about').split('').map((char, i) => (
                        <motion.span key={i} className={styles.navLinkLetter} variants={letterVariants}>{char === ' ' ? '\u00A0' : char}</motion.span>
                    ))}
                    <motion.span className={styles.navLinkLetter} variants={letterVariants} style={{ color: 'var(--accentGreen)'}}>.</motion.span>
                </TransitionLink>
            </motion.li>
            <motion.li
                className={styles.listItem}
                variants={listItemVariants}
                whileHover={{ color: '#ef798a' }}
            >
                <TransitionLink href={'/projects'} toggleMenu={toggleMenu}>
                    {t('projects').split('').map((char, i) => (
                        <motion.span key={i} className={styles.navLinkLetter} variants={letterVariants}>{char}</motion.span>
                    ))}
                    <motion.span className={styles.navLinkLetter} variants={letterVariants} style={{ color: 'var(--accentPink)'}}>.</motion.span>
                </TransitionLink>
            </motion.li>
            <motion.li
                className={styles.listItem}
                variants={listItemVariants}
                whileHover={{ color: '#ffc759' }}
            >
                <TransitionLink href={'/contact'} toggleMenu={toggleMenu}>
                    {t('contact').split('').map((char, i) => (
                        <motion.span key={i} className={styles.navLinkLetter} variants={letterVariants}>{char === ' ' ? '\u00A0' : char}</motion.span>
                    ))}
                    <motion.span className={styles.navLinkLetter} variants={letterVariants} style={{ color: 'var(--accentYellow)'}}>.</motion.span>
                </TransitionLink>
            </motion.li>
        </motion.ul>
    );
}

const listVariants = {
    open: {
        transition: {
        staggerChildren: 0.2,
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
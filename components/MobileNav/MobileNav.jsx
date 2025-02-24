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
                <NavItems toggleMenu={toggleMenu} localeChange={localeChange} />
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

const NavItems = ({ toggleMenu, localeChange }) => {
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
                    <motion.span className={styles.navLinkLetter} variants={letterVariants} style={{ color: 'var(--accentPurple)'}}>.</motion.span>
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
                    <motion.span className={styles.navLinkLetter} variants={letterVariants} style={{ color: 'var(--accentGreen)'}}>.</motion.span>
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
                    <motion.span className={styles.navLinkLetter} variants={letterVariants} style={{ color: 'var(--accentPink)'}}>.</motion.span>
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
                    <motion.span className={styles.navLinkLetter} variants={letterVariants} style={{ color: 'var(--accentYellow)'}}>.</motion.span>
                </TransitionLink>
            </motion.li>
            <motion.li
                className={styles.listItemLangSwitch}
                variants={listItemVariants}
                whileHover={{ color: '#ffc759' }}
            >
                <div toggleMenu={toggleMenu} onClick={localeChange}>
                    <motion.span className={styles.navLangLetter} variants={letterVariants}>i</motion.span>
                    <motion.span className={styles.navLangLetter} variants={letterVariants}>s</motion.span>
                    <motion.span className={styles.navLangLetter} variants={letterVariants}> </motion.span>
                    <motion.span className={styles.navLangSpacer} variants={letterVariants}>|</motion.span>
                    <motion.span className={styles.navLangLetter} variants={letterVariants}> </motion.span>
                    <motion.span className={styles.navLangLetter} variants={letterVariants}>e</motion.span>
                    <motion.span className={styles.navLangLetter} variants={letterVariants}>n</motion.span>
                </div>
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
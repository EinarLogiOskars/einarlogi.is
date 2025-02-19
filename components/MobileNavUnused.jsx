'use client'

import { motion } from "motion/react";
import { useState } from "react";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

import Hamburger from "./Hamburger/Hamburger";
import TransitionLink from './utils/TransitionLink'

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
        <div>
            <motion.nav
                initial={false}
                animate={menuOpen ? "open" : "closed"}
                style={nav}
            >
                <motion.div style={background} variants={sidebarVariants} />
            <div style={toggleContainer}>
                <Hamburger isOpen={menuOpen} onClick={toggleMenu} />
            </div>
            <NavItems t={t} toggleMenu={toggleMenu} localeChange={localeChange} />
            </motion.nav>
        </div>
    );
}

const sidebarVariants = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 50px 40px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2,
        },
    }),
    closed: {
        clipPath: "circle(30px at 260px 40px)",
        transition: {
            delay: 0.2,
            type: "spring",
            stiffness: 400,
            damping: 40,
        },
    },
}

const navVariants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 },
    }
}

const itemVariants = {
    open : {
        y: 0,
        opacity: 1,
        visibility: 'visible',
        transition: {
            y: { stiffness: 1000, velocity: -100 },
        },
    },
    closed: {
        y: 50,
        opacity: 0,
        visibility: 'hidden',
        transition: {
            y: { stiffness: 1000 }
        }
    }
}

const NavItems = ({ t, toggleMenu, localeChange }) => {
    return (
        <motion.ul style={list} variants={navVariants}>
            <motion.li
                style={listItem}
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
            ><TransitionLink toggleMenu={toggleMenu} style={listItemLink} href={'/'}>{t('home')}</TransitionLink></motion.li>
            <motion.li
                style={listItem}
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
            ><TransitionLink toggleMenu={toggleMenu} style={listItemLink} href={'/about'} onClick={toggleMenu}>{t('about')}</TransitionLink></motion.li>
            <motion.li
                style={listItem}
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
            ><TransitionLink toggleMenu={toggleMenu} style={listItemLink} href={'/projects'}>{t('projects')}</TransitionLink></motion.li>
            <motion.li
                style={listItem}
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
            ><TransitionLink toggleMenu={toggleMenu} style={listItemLink} href={'/contact'} onClick={toggleMenu}>{t('contact')}</TransitionLink></motion.li>
            <motion.li
                style={listItem}
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
            ><a style={languageSwitchLink} hrefLang={`/${t('locale')}`} onClick={localeChange}>{t('language')}</a></motion.li>
        </motion.ul>
    )
}

/**
 * ==============   Styles   ================
 */

const toggleContainer = {
    WebkitUserSelect: "none",
    MozUserSelect: "none",
    cursor: "pointer",
    position: "absolute",
    top: 24,
    right: 23,
    zIndex: 1001,
};

const nav = {
    width: '100%',
};

const background = {
    backgroundColor: 'var(--foreground)',
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    zIndex: 1000,
};

const list = {
    listStyle: 'none',
    position: 'absolute',
    right: 20,
    top: 80,
    color: 'black',
    padding: 25,
    margin: 0,
    zIndex: 1001,
    width: '300px',
};

const listItem = {
    paddingLeft: '1rem',
    marginBottom: '1rem',
};

const listItemLink = {
    display: 'block',
    width: '100%',
    color: 'var(--background)',
    textDecoration: 'none',
    fontSize: '1.2rem',
    padding: '0.5rem 0',
}

const languageSwitchLink = {
    display: 'block',
    width: '100%',
    color: 'var(--background)',
    textDecoration: 'none',
    fontSize: '1.2rem',
    padding: '0.5rem 0',
    cursor: 'pointer'
}
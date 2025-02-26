'use client'

import { useTranslations } from "next-intl";
import { useRouter, usePathname } from '@/i18n/routing';
import { useParams } from "next/navigation";
import { motion } from 'motion/react';

export default function LocaleSwitcher() {

    const t = useTranslations('Menu')
    const router = useRouter();
    const pathname = usePathname();
    const params = useParams();

    const localeChange = () => {
        const nextLocale = t('locale');
        router.replace(
            {pathname, params},
            {locale: nextLocale}
        );
    }

    return (
        <motion.div
            style={style}
            whileHover={{ borderColor: 'var(--accentPurple)' }}
            onClick={localeChange}
        >
            <motion.p
                style={text}
                whileHover={{ color: 'var(--accentPurple' }}
            >is | en</motion.p>
        </motion.div>
    );
}

/*
*   ------- Styles ------
*/

const style = {
    border: '5px solid white',
    borderRadius: '500px',
    marginRight: '5rem',
    height: '58px',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
} 

const text = {
    padding: '0 1rem 0 1rem',
    fontSize: '1.5rem',
}
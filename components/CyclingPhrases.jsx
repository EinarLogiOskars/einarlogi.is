'use client'

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslations } from 'next-intl';

export default function CyclingPhrases() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const t = useTranslations('Phrases');
    const count = t('count');
    const keys = Array.from({ length: count }, (_, i) => `phrase${i}`);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % 4);
        }, 3000)
        return () => clearInterval(interval);
    }, []);

    return(
        <div style={{ position: 'relative', height: '2.5rem', overflow: 'hidden' }}>
            <AnimatePresence mode='wait'>
                <motion.p
                    key={keys[currentIndex]}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    style={{ margin: 0, position: 'absolute', width: '100%', textAlign: 'center' }}
                >
                    {t(`${keys[currentIndex]}`)}
                </motion.p>
            </AnimatePresence>
        </div>
    );
}
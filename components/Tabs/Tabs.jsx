'use client'

import { AnimatePresence, motion } from 'motion/react';

import styles from './Tabs.module.css';
import { useState } from 'react';

export default function Tabs() {
    const [activeTab, setActiveTab] = useState(1);

    return (
        <div className={styles.tabWrapper}>

            <div className={styles.tabButtonWrapper}>
                <motion.div
                    className={styles.tabButton}
                    onClick={() => setActiveTab(1)}
                    animate={{
                        backgroundColor:
                            activeTab === 1 ? "#eee" : "#eee0",
                    }}
                >
                    <div><h3>Contact form</h3></div>
                    {activeTab === 1 && <motion.div layoutId='line' className={styles.line}/>}
                </motion.div>
                <motion.div
                    className={styles.tabButton}
                    onClick={() => setActiveTab(2)}
                    animate={{
                        backgroundColor:
                            activeTab === 2 ? "#eee" : "#eee0",
                    }}
                >
                    <div><h3>Contact info</h3></div>
                    {activeTab === 2 && <motion.div layoutId='line' className={styles.line}/>}
                </motion.div>
            </div>

            <div className={styles.tabContentWrapper}>
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={`tab${activeTab}`}
                        initial={{
                            y: 10,
                            opacity: 0,
                        }}
                        animate={{
                            y: 0,
                            opacity: 1,
                        }}
                        exit={{
                            y: 10,
                            opacity: 0,
                        }}
                        className={styles.tab}
                    >
                        {activeTab === 1 ? <Tab1 /> : <Tab2 />}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}

const Tab1 = () => {
    return (
        <div className={styles.tab1}>
            <h3>Tab 1!</h3>
        </div>
    );
}

const Tab2 = () => {
    return (
        <div className={styles.tab2}>
            <h3>Tab 2!</h3>
        </div>
    );
}
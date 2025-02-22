'use client'

import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';

import ContactForm from '../ContactForm/ContactForm';

import styles from './Tabs.module.css';

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
                            activeTab === 1 ? "#3b3b3f" : "#1d1d1f",
                    }}
                >
                    <div><h3>My info</h3></div>
                    {activeTab === 1 && <motion.div layoutId='line' className={styles.line}/>}
                </motion.div>
                <motion.div
                    className={styles.tabButton}
                    onClick={() => setActiveTab(2)}
                    animate={{
                        backgroundColor:
                            activeTab === 2 ? "#3b3b3f" : "#1d1d1f",
                    }}
                >
                    <div><h3>Message me</h3></div>
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
                        {activeTab === 1 && <Tab1 />}
                        {activeTab === 2 && <Tab2 />}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}

const Tab1 = () => {
    return (
        <div className={styles.tab1}>
            <div><h1>Email:</h1><h3>contact@einarlogi.is</h3></div>
            <div><h1>Phone:</h1><h3>+354 770-7327</h3></div>
            <div className={styles.socialsWrapper}>
                <h3>Check me out on:</h3>
                <div className={styles.socials}>
                    <a href="https://www.linkedin.com/in/einarlogioskars" target="_blank" rel="noopener noreferrer">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.285c-.966 0-1.5-.641-1.5-1.44 0-.82.553-1.44 1.54-1.44.987 0 1.5.62 1.52 1.44 0 .799-.533 1.44-1.56 1.44zm13.5 11.285h-3v-5.604c0-1.335-.475-2.247-1.662-2.247-.907 0-1.448.609-1.686 1.197-.087.211-.109.506-.109.803v5.851h-3s.04-9.492 0-10.473h3v1.486c.396-.613 1.104-1.486 2.687-1.486 1.963 0 3.379 1.284 3.379 4.043v6.43z"/>
                        </svg>
                    </a>

                    <a href="https://github.com/einarlogioskars" target="_blank" rel="noopener noreferrer">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M12 0c-6.627 0-12 5.373-12 12 0 5.303 3.438 9.8 8.207 11.385.6.111.793-.261.793-.577v-2.169c-3.338.725-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.091-.745.083-.729.083-.729 1.205.084 1.838 1.239 1.838 1.239 1.07 1.834 2.809 1.304 3.495.997.108-.775.419-1.304.763-1.604-2.665-.304-5.466-1.332-5.466-5.927 0-1.31.469-2.381 1.239-3.221-.124-.303-.537-1.523.117-3.176 0 0 1.008-.323 3.3 1.23.96-.267 1.987-.4 3.007-.404 1.019.004 2.047.137 3.007.404 2.291-1.553 3.297-1.23 3.297-1.23.656 1.653.243 2.873.12 3.176.772.84 1.238 1.911 1.238 3.221 0 4.608-2.805 5.619-5.478 5.917.431.371.817 1.103.817 2.222v3.293c0 .32.192.694.8.576 4.766-1.586 8.202-6.083 8.202-11.385 0-6.627-5.373-12-12-12z"/>
                        </svg>
                    </a>

                </div>
            </div>
        </div>
    );
}

const Tab2 = () => {
    return (
        <div className={styles.tab2}>
            <ContactForm />
        </div>
    );
}
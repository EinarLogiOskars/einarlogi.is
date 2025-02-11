'use client';

import Link from 'next/link';
import styles from './styles/not-found.module.css';

export default function NotFound() {
    return (
        <div className={styles.container}>
            <div className={styles.notFound}>
                <h1>404</h1>
                <p><span>|</span></p>
                <p>This page could not be found.</p>
            </div>
            <Link href="/">Go back home</Link>
        </div>
    );
}
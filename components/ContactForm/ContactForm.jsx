'use client';

import { useState } from 'react';

import styles from './ContactForm.module.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', favorite_color: '', message: '' });
    const [status, setStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        if (formData.favorite_color) return;

        const res = await fetch(`api/contact`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });

        const result = await res.json();
        if (res.ok) {
            setStatus('success');
            setFormData({ name: '', email: '', favorite_color: '', message: '' });
        } else {
            setStatus('error');
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.contactForm}>
            <input className={styles.input} type='text' name='name' placeholder='Your Name' value={formData.name} onChange={handleChange} required />
            <input className={styles.input} type='email' name='email' placeholder='Your Email' value={formData.email} onChange={handleChange} required />
            <input type='text' name='favorite_color' placeholder='Favorite Color' value={formData.favorite_color} onChange={handleChange} style={{ display: 'none' }} tabIndex='-1' autoComplete='off' />
            <textarea className={styles.message} name='message' placeholder='Your Message' value={formData.message} onChange={handleChange} required />
            <button className={styles.submitButton} type='submit' disabled={status === 'loading'}>Send Message</button>
            {status === 'success' && <p>Message sent successfully!</p>}
            {status === 'error' && <p>Something went wrong. Try again.</p>}
        </form>
    )
}

export default ContactForm;
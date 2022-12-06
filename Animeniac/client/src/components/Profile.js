import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Profile.module.css'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export const Profile = () => {
    return (
        <div className={styles.container}>
            <div className={styles.nav}>
                <Link to={'/'} className={styles.link}>Home</Link>
                <h1 className={styles.title}>Profile</h1>
            </div>
            <div className={styles.main}>
                <div className={styles.left}>
                    <div className={styles.avatar}>
                
                    </div>
                    <div className={styles.actions}>
                
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.status}>
                        <p>Status</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

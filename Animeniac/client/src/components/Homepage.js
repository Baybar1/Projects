import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import styles from './Homepage.module.css'


export const Homepage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.nav}>
            <h1>Animeniac</h1>
            <div className={styles.signIn}>
            <Link to = {'/signin'} className={styles.noLine}><Button variant = 'outlined'>Sign in</Button></Link>
            </div>
            </div>
            <div className={styles.actions}>
                <Link to = '/profile' className={styles.noLine}><p>Profile</p></Link>
                <Link to = '/animes' className={styles.noLine}><p>Animes</p></Link>
                <Link to = '/videos' className={styles.noLine}><p>Videos</p></Link>
            </div>
            <div className={styles.mainImg}>
                
            </div>
        </div>
    )
}

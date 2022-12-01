import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import styles from './Homepage.module.css'


export const Homepage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.nav}>
            <h1>Animeniac</h1>
            <Link to = {'/signin'}><Button variant = 'outlined'>Sign in</Button></Link>
            </div>
            <div className={styles.actions}>
                <Link to = '/profile'><p>Profile</p></Link>
                <Link to = '/animes'><p>Animes</p></Link>
                <Link to = '/videos'><p>Videos</p></Link>
            </div>
            <div>
                <img src = 'https://i0.wp.com/vgkami.com/wp-content/uploads/2022/03/VGKStrongestAnimeCharactersFeaturedImg.jpg?resize=1200%2C675&ssl=1'></img>
            </div>
        </div>
    )
}

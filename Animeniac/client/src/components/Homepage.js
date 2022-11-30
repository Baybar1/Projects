import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Homepage.module.css'

export const Homepage = () => {
    return (
        <div>
            <div className={styles.nav}>
            <h1>Animeniac</h1>
            <p>Sign in</p>
            </div>
            <div className={styles.actions}>
                <Link to = '/profile'><p>Profile</p></Link>
                <Link to = '/animes'><p>Animes</p></Link>
                <Link to = '/videos'><p>Videos</p></Link>
            </div>
            <div className={styles.mainImg}>
                <img src = 'https://wallpaperaccess.com/full/5707319.jpg' alt = 'Anime Wallpaper'></img>
            </div>
        </div>
    )
}

import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../modules/Homepage.module.css'

export const Homepage = () => {
    return (
        <div className={styles.home}>
            <h1>Welcome to your ChoreTracker</h1>
            <Link to ={'/display'} className={styles.link}><h2>Get Started</h2></Link>
        </div>
    )
}

import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styles from './Profile.module.css'


export const Profile = () => {

    const [user,setUser] = useState('')

    useEffect(() => {
        axios.get('http://localhost:8000/api/users')
        .then(response => {
            setUser(response.data)
        })
        .catch(error => console.log(error))
    },[])

    
    return (
        <div className={styles.container}>
            <div className={styles.nav}>
                <Link to={'/'} className={styles.link}>Home</Link>
                <h1 className={styles.title}>Profile</h1>
                {user.username}
            </div>
        </div>
    )
}

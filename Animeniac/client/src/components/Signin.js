import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import styles from './Signin.module.css'
import Paper from '@mui/material/Paper';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';
import ClearIcon from '@mui/icons-material/Clear';



export const Signin = () => {

    const [password,setPassword] = useState('')
    const [email,setEmail] = useState('')
    const [errors,setErrors] = useState([])
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/users/login', {
            email,
            password
        })
        .then(response => {
            console.log(response)
            navigate('/profile')
            alert('Successfully Logged in')
        })
        .catch(error => {
            console.log(error, "nope")
            const errorResponse = error.response.data.message;
                setErrors(errorResponse)
        })
    }


    return (
        <div className={styles.container}>
            <Paper elevation={3} className={styles.signFormat}>
                <form>
                    <Link to = {'/'} className={styles.linkHome}><ClearIcon /></Link>
                    {errors}
                <FormControl variant="outlined" style={styles.input}>
                    <InputLabel>Email</InputLabel>
                    <OutlinedInput type="email" value ={email} onChange={(e) =>setEmail(e.target.value)}/>
                </FormControl>
                <FormControl variant="outlined" style={styles.input}>
                    <InputLabel>Password</InputLabel>
                    <OutlinedInput type="password"  value ={password} onChange={(e) =>setPassword(e.target.value)}/>
                </FormControl>
                <Link to ={'/signin'} className={styles.noLine}><Button type="submit" variant="contained" color="primary" className={styles.signUp} onClick={handleLogin}>Sign In</Button></Link>
                <Link to ={'/register'} className={styles.noLine}><Button  variant="contained" color="primary" className={styles.signUp}>Register</Button></Link>
                </form>
            </Paper>
        </div>
    )
}

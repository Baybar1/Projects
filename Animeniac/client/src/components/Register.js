import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import styles from './Register.module.css'
import Paper from '@mui/material/Paper';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';
import ClearIcon from '@mui/icons-material/Clear';

export const Register = () => {

    const [username,setUsername] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errors,setErrors] = useState([])

    const navigate = useNavigate()

    const handleRegister = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/users/register', {
            username,
            email,
            password,
            confirmPassword
        })
        .then(response => {
            console.log(response)
            navigate('/signin')
            alert(`Welcome to the club ${username}!`)
        })
        .catch(error => {
            console.log(error, "nope")
            const errorResponse = error.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr)
        })
    }

    return (
        <div className={styles.container}>
            <Paper elevation={3} className={styles.signFormat}>
                <form>
                    <Link to = {'/signin'} className={styles.link}><ClearIcon /></Link>
                    {errors.map((error, index) => <p key = {index} >{error}</p>)}
                <FormControl variant="outlined" style={styles.input}>
                    <InputLabel>Username *</InputLabel>
                    <OutlinedInput type="text" value ={username} onChange={(e) =>setUsername(e.target.value)}/>
                </FormControl>
                <FormControl variant="outlined" style={styles.input}>
                    <InputLabel>Email *</InputLabel>
                    <OutlinedInput type="email" value ={email} onChange={(e) =>setEmail(e.target.value)}/>
                </FormControl>
                <FormControl variant="outlined" style={styles.input}>
                    <InputLabel>Password *</InputLabel>
                    <OutlinedInput type="string" value ={password} onChange={(e) =>setPassword(e.target.value)}/>
                </FormControl>
                <FormControl variant="outlined" style={styles.input}>
                    <InputLabel>Confirm Password *</InputLabel>
                    <OutlinedInput type="string" value = {confirmPassword} onChange = {(e) => setConfirmPassword(e.target.value)}/>
                </FormControl>
                <Link to ={'/profile'} className={styles.noLine}><Button type="submit" variant="contained" color="primary" className={styles.register} onClick={handleRegister}>Submit</Button></Link>
                </form>
            </Paper>
        </div>
    )
}

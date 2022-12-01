import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Signin.module.css'
import Paper from '@mui/material/Paper';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';
import ClearIcon from '@mui/icons-material/Clear';


export const Signin = () => {
    return (
        <div className={styles.container}>
            <Paper elevation={3} className={styles.signFormat}>
                <form>
                    <Link to = {'/'} className={styles.link}><ClearIcon /></Link>
                <FormControl variant="outlined" style={styles.input}>
                    <InputLabel>Username</InputLabel>
                    <OutlinedInput type="text"/>
                </FormControl>
                <FormControl variant="outlined" style={styles.input}>
                    <InputLabel>Password</InputLabel>
                    <OutlinedInput type="password"/>
                </FormControl>
                <Button type="submit" variant="contained" color="primary">Sign In</Button>
                <Button type="submit" variant="contained" color="primary">Register</Button>
                </form>
            </Paper>
        </div>
    )
}

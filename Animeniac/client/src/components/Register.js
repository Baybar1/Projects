import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Register.module.css'
import Paper from '@mui/material/Paper';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';
import ClearIcon from '@mui/icons-material/Clear';

export const Register = () => {
    return (
        <div className={styles.container}>
            <Paper elevation={3} className={styles.signFormat}>
                <form>
                    <Link to = {'/'} className={styles.link}><ClearIcon /></Link>
                <FormControl variant="outlined" style={styles.input}>
                    <InputLabel>Username *</InputLabel>
                    <OutlinedInput type="text"/>
                </FormControl>
                <FormControl variant="outlined" style={styles.input}>
                    <InputLabel>Email *</InputLabel>
                    <OutlinedInput type="email"/>
                </FormControl>
                <FormControl variant="outlined" style={styles.input}>
                    <InputLabel>Password *</InputLabel>
                    <OutlinedInput type="password"/>
                </FormControl>
                <FormControl variant="outlined" style={styles.input}>
                    <InputLabel>Confirm Password *</InputLabel>
                    <OutlinedInput type="password"/>
                </FormControl>
                <Link to ={'/profile'} className={styles.noLine}><Button type="submit" variant="contained" color="primary" className={styles.register}>Submit</Button></Link>
                </form>
            </Paper>
        </div>
    )
}

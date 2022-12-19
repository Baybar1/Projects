import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../App';
import styles from '../modules/AddChore.module.css'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';



export const AddChore = () => {

    const {chore,setChore,newChoreList,choreItem,setChoreItem,setChoreName,setChoreTitle,setChoreDate,setChoreTime,choreName} = useContext(AppContext);
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        newChoreList(choreItem);
        setChore([...chore,choreItem])
        setChoreName([...choreName,choreItem])
        navigate('/display')
    }

    return (
        <div>
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="md">
                    <Box sx={{ height: '100vh' }}>
                        <div className={styles.addform}>
                        <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 1,
                        width: '100%',
                        height: '70%',
                    },
                }}
                className={styles.box}>
                <Paper elevation={3} className={styles.paper}>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <input type='text' placeholder='Name'  className={styles.input} onChange={(e) => {setChoreName(e.target.value)}}/>
                        <input type='textarea' placeholder='Chore' className={styles.input} onChange={(e) => {setChoreTitle(e.target.value)}}/>
                        <input type='date'  className={styles.input} onChange={(e) => {setChoreDate(e.target.value)}}/>
                        <input type='time'  className={styles.input} onChange={(e) => {setChoreTime(e.target.value)}}/>
                        <Link to ={'/display'}><input type='button' className={styles.submit} value='Cancel'/></Link>
                        <input type='submit' className={styles.submit}/>
                    </form>
                </Paper>
            </Box>
                        </div>
                        <Box sx={{ width: '100%' }}>
                        
                    </Box>
                    </Box>
                    
                </Container>
            </React.Fragment>

            
        </div>
    )
}

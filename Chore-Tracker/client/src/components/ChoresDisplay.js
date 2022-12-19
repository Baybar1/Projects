import React, {useState, useContext} from 'react'
import { AppContext } from '../App';
import { Link } from 'react-router-dom';
import styles from '../modules/ChoresDisplay.module.css'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';


export const ChoresDisplay = () => {

    const {chore,setChore,newChoreList,choreItem,setChoreItem, choreName,choreDate,choreTime,choreTitle} = useContext(AppContext);

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    console.log(choreItem)

    return (
        <div>
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="md">
                    <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
                        <div className={styles.nav}>
                            <h1>Chores</h1>
                            <Link to ={'/add'} className={styles.link}><Button variant="outlined" startIcon={<AddIcon/>} className={styles.button}>New Chore</Button></Link>
                        </div>
                        
                        {
                            chore.map((chore,index) => {
                                return(
                                    <p key = {index} className={styles.chores}>{choreName},{choreTitle},{choreDate},{choreTime}</p>
                                )
                            })
                        }
                    </Box>
                    
                </Container>
            </React.Fragment>

        </div>
    )
}

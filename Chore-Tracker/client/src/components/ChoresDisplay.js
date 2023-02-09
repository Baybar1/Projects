import React, {useState, useContext, useEffect} from 'react'
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
import Checkbox from '@mui/material/Checkbox';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import styledEngine from '@mui/styled-engine';


export const ChoresDisplay = () => {

    const [chore, setChore] = useState([])
    const [checked, setChecked] = useState([]);

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/getChores')
        .then(response => {
            console.log(response.data)
            setChore(response.data)
        })
        .catch(error => {
            console.log(error)
        })
    },[])

    const removeChore = choreId => {
        setChore(chore.filter(chore => chore._id != choreId))
    }

    const deleteChore = (choreId) => {
        axios.delete('http://127.0.0.1:8000/api/chore/' + choreId)
        .then(res => {
            console.log(res)
            removeChore(choreId)
        })
        .catch((err) => console.log(err))
    }

    return (
        <div className={styles.background}>
            <div className={styles.nav}>
                <h1>Chores</h1>
                <Link to ={'/add'} className={styles.link}><Button variant="outlined" startIcon={<AddIcon/>} className={styles.button}>New Chore</Button></Link>
            </div>
            <div className={styles.choreList}>
            {
                chore.map((chore,index) => {
                    return(
                        <ul key = {index} className={styles.chores}>
                            <li><strong>Name :</strong> {chore.choreName}</li>
                            <li><strong>Chore :</strong> {chore.choreTitle}</li>
                            <li><strong>Day :</strong> {chore.choreDate}</li>
                            <li><strong>Time :</strong> {chore.choreTime}</li>
                            <div className={styles.actions}>
                                <Checkbox {...label} />
                                <Button onClick={(e) => deleteChore(chore._id)}><DeleteIcon className={styles.delete}/></Button>
                            </div>
                        </ul>
                            )
                            })
            }
            </div>
        </div>
    )
}

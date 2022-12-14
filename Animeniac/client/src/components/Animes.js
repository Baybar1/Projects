import React, { useState, useEffect } from 'react'
import styles from './Animes.module.css'
import ImageSlider, { Slide } from "react-auto-image-slider"
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Images from '../images.json'

export const Animes = () => {
    const [anime, setAnime] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/anime')
            .then(response => {
                console.log(response.data)
                setAnime(response.data)
            })
            .catch(error => console.log(error, 'couldnt get it'))
    }, [])

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return (
        <div>
            <div className={styles.nav}>
                <Link to={'/'} className={styles.link}> <ArrowBackIcon />Home</Link>
                <h1 className={styles.title}>Animes</h1>
            </div>
            <div className={styles.images}>
                
            </div>
            <div className={styles.boxes}>
                {
                    anime.map((anime, index) => {
                        return (
                            <div key={index}>
                                <Box sx={{ flexGrow: 1 }}>
                                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                                        {Array.from(Array(1)).map((_, index) => (
                                            <Grid item xs={4} sm={8} md={12} key={index}>
                                                <Item className={styles.tags}>{anime.anime}</Item>
                                                <Link to={`/animes/${anime._id}`} className={styles.comment}><Button variant='contained'>Comments</Button></Link>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </Box>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

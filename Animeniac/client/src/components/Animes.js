import React, { useState, useEffect } from 'react'
import styles from './Animes.module.css'
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import axios from 'axios'
import { Link } from 'react-router-dom';

export const Animes = () => {
    const [anime, setAnime] = useState([])

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
                <Link to ={'/'} className={styles.link}>Home</Link>
                <h1 className={styles.title}>Animes</h1>
            </div>
            <div className={styles.boxes}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {Array.from(Array(1)).map((_, index) => (
                            <Grid item xs={2} sm={4} md={4} key={index}>
                                <div className={styles.image1}></div>
                                <Item className={styles.tags}>Naruto</Item>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {Array.from(Array(1)).map((_, index) => (
                            <Grid item xs={2} sm={4} md={4} key={index}>
                                <div className={styles.image2}></div>
                                <Item className={styles.tags}>One Piece</Item>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {Array.from(Array(1)).map((_, index) => (
                            <Grid item xs={2} sm={4} md={4} key={index}>
                                <div className={styles.image3}></div>
                                <Item className={styles.tags}>Bleach</Item>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {Array.from(Array(1)).map((_, index) => (
                            <Grid item xs={2} sm={4} md={4} key={index}>
                                <div className={styles.image4}></div>
                                <Item className={styles.tags}>Attack on Titan</Item>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {Array.from(Array(1)).map((_, index) => (
                            <Grid item xs={2} sm={4} md={4} key={index}>
                                <div className={styles.image5}></div>
                                <Item className={styles.tags}>Chainsaw Man</Item>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {Array.from(Array(1)).map((_, index) => (
                            <Grid item xs={2} sm={4} md={4} key={index}>
                                <div className={styles.image6}></div>
                                <Item className={styles.tags}>Black Clover</Item>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </div>
        </div>
    )
}

import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import styles from './Homepage.module.css'
import ImageSlider, { Slide } from "react-auto-image-slider"




export const Homepage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.nav}>
            <h1>Animeniac</h1>
            <div className={styles.signIn}>
            <Link to = {'/signin'} className={styles.noLine}><Button variant = 'outlined'>Sign in</Button></Link>
            </div>
            </div>
            <div className={styles.actions}>
                <Link to = '/profile' className={styles.noLine}><p>Profile</p></Link>
                <Link to = '/animes' className={styles.noLine}><p>Animes</p></Link>
                <Link to = '/videos' className={styles.noLine}><p>Videos</p></Link>
            </div>
            <div >
            <h2>A page for you to talk about the animes you love</h2>
            <ImageSlider effectDelay={500} autoPlayDelay={2000} >
                    <Slide >
                        <img  alt="img1" src="https://m.media-amazon.com/images/M/MV5BZGFiMWFhNDAtMzUyZS00NmQ2LTljNDYtMmZjNTc5MDUxMzViXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg" />
                    </Slide>
                    <Slide>
                        <img alt="img2" src="https://samdrewtakeson.com/wp-content/uploads/2022/11/Bleach-Thousand-Year-Blood-War-Episode-9-Release-Date.jpg" />
                    </Slide>
                    <Slide>
                        <img alt="img3" src="https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781974709939/chainsaw-man-vol-1-9781974709939_hr.jpg" />
                    </Slide>
                    <Slide>
                        <img alt="img4" src="https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/9daa2f17d7ad2727d72fdeaae6e232de.jpeg" />
                    </Slide>
                    <Slide>
                        <img alt="img5" src="https://m.media-amazon.com/images/M/MV5BODcwNWE3OTMtMDc3MS00NDFjLWE1OTAtNDU3NjgxODMxY2UyXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg" />
                    </Slide>
                </ImageSlider>
            </div>
        </div>
    )
}

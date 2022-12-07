import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Videos.module.css'

export const Videos = () => {

    const narutoVideos = [<iframe width="560" height="315" src="https://www.youtube.com/embed/Llr2dcd-VBo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>, <iframe width="560" height="315" src="https://www.youtube.com/embed/2RjYvsc4oBg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,<iframe width="560" height="315" src="https://www.youtube.com/embed/9VCjQ8Q7Av8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>]

    const bleachVideos = [<iframe width="560" height="315" src="https://www.youtube.com/embed/P5M_b1dnOFg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>, <iframe width="560" height="315" src="https://www.youtube.com/embed/-BJmZUgQfsg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>, <iframe width="560" height="315" src="https://www.youtube.com/embed/5giU6aO7_ZQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>]

    const onePieceVideos = [<iframe width="560" height="315" src="https://www.youtube.com/embed/EPMl9HJ7hb4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>, <iframe width="560" height="315" src="https://www.youtube.com/embed/sh3TQYzI6qA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>, <iframe width="560" height="315" src="https://www.youtube.com/embed/wz1H3jxl_tA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>]

    const aotVideos = [<iframe width="560" height="315" src="https://www.youtube.com/embed/ceQ4nhyuX2k" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>, <iframe width="560" height="315" src="https://www.youtube.com/embed/hyEbggGnT0U" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>, <iframe width="560" height="315" src="https://www.youtube.com/embed/QMf_Z-Fl7_w" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>]

    const [video,setVideo] = useState(narutoVideos)

    const handleVideo = (e) => {
        if (e === 'Naruto') {
            setVideo(narutoVideos)
        } else if (e === 'Bleach') {
            setVideo(bleachVideos)
        } else if (e === 'One Piece') {
            setVideo(onePieceVideos)
        } else if (e === 'Attack on Titan') {
            setVideo(aotVideos)
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.nav}>
                <Link to ={'/'} className={styles.link}>Home</Link>
                <h1 className={styles.title}>Videos</h1>
            </div>
            <div className={styles.weeklyVideo}>
                <h2>Video of the Week</h2>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/wLCJe67Uodk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <div className={styles.videos}>
                <select className={styles.select} onChange={(e) => {handleVideo(e.target.value)}}>
                    <option>Naruto</option>
                    <option>Bleach</option>
                    <option>One Piece</option>
                    <option>Attack on Titan</option>
                </select>
                <div className={styles.videoSelection}>
                {
                    video.map((video,index) => {
                        return(
                            <p key = {index}>{video}</p>
                        )
                    })
                }
                </div>
            </div>
        </div>
    )
}

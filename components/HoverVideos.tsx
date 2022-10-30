import type { NextPage } from 'next';
import HoverVideoPlayer from 'react-hover-video-player';
import styles from './/HoverVideos.module.scss';
import profilePic from '../src/profilePic.png';
import Image from 'next/image';


const HoverVideos: NextPage = () => {
  return (
    <main className={styles.HoverVideos}>
      <div className={styles.profilePic}><Image width={200} height={200} src={profilePic} /></div>
      <HoverVideoPlayer
        style={{
          width: '50%',
          height: '50%',
          left: '0rem',
        }}
        videoSrc="/designerVideo.webm"
        pausedOverlay={
          <img
            src="/wallpaperComplete.webp"
            alt=""
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        }
        loadingOverlay={
          <div className="loading-overlay">
            <div className="loading-spinner" />
          </div>
        }
      />
      <HoverVideoPlayer
        style={{
          width: '50%',
          height: '50%',
          right: '0rem',

        }}
        videoSrc="/coderVideo.webm"
        pausedOverlay={
          <img
            src="/wallpaperComplete2.webp"
            alt=""
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              position: 'absolute'
            }}
          />
        }
        loadingOverlay={
          <div className="loading-overlay">
            <div className="loading-spinner" />
          </div>
        }
      />

      <div className={styles.mainBox}></div>
    </main>
  )
}




export default HoverVideos
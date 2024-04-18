import Artist from "../components/artist";
import BottomGroup from "../components/bottom-group";
import TopGroup from "../components/top-group";
import recom from "../recom.js";
import styles from "./home-screen-dark.module.css";
import createList from "./createList.js"

const HomeScreenDark = () => {

  return (

    <div className={styles.homeScreenDark}>

      <main className={styles.topGroupParent}>

        
        <TopGroup />
        <section className={styles.frameWrapper}>
          <div className={styles.tracksContainerParent}>
            <div className={styles.tracksContainer}>
              <div className={styles.frameParent}>

              

                <div className={styles.artistTitleParent}>
                  
                  <h2 className={styles.artistTitle}>
                    Your Musical Gallery: Discover Artists You'll Love
                  </h2>


                  <div className={styles.artist1Parent}>
                    <Artist
                      artistImage="/artist-image@2x.png"
                      artistName="Lil Baby"
                    />
                    <Artist
                      artistImage="/artist-image-1@2x.png"
                      artistName="21 Savage"
                    />
                    <Artist
                      artistImage="/artist-image-2@2x.png"
                      artistName="Drake"
                    />
                    <Artist
                      artistImage="/artist-image-3@2x.png"
                      artistName="Metro Boomin"
                    />
                  </div>
                </div>

               

                

                <div className={styles.tracksTitleParent}>
                  <h2 className={styles.tracksTitle}>
                    Tune In to Your Mood: Personalized Tracks Tailored to You
                  </h2>

                  <div className={styles.track1Parent}> {createList(recom, 3)}</div>
                  <div className={styles.track1Parent}>{createList(recom.slice(3),3)}</div>
                  <div className={styles.track1Parent}>{createList(recom.slice(6),3)} </div>
                </div>

                
              </div>
            </div>
            <div className={styles.clickVariants}>
              <div className={styles.rectangleLayer} />
              <img
                className={styles.albumCoverIcon}
                loading="lazy"
                alt=""
                src="/album-cover-11@2x.png"
              />
              <div className={styles.titleAndArtistWrapper}>
                <div className={styles.titleAndArtistContainer}>
                  <p
                    className={styles.dripTooHard}
                  >{`Drip Too Hard (Lil Baby & Gunna)`}</p>
                  <p className={styles.title2}>Lil Baby, Gunna</p>
                </div>
              </div>
              <div className={styles.details}>
                <p className={styles.released12}>
                  Released : 12 September 2018
                </p>
                <p className={styles.genreTrap}>Genre : Trap</p>
                <p className={styles.length225}>Length : 2:25</p>
                <p className={styles.spotifyUrl}>{`Spotify URL: `}</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <BottomGroup />
    </div>
  );
};

export default HomeScreenDark; 
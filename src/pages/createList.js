import React from "react";
import Track from "../components/track";
import {Link} from "react-router-dom"
import styles from "../components/track.module.css"

function truncateString(str, num) {
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num) + "...";
  }

function createList(recom, sliceSize) {
    return recom.slice(0, sliceSize).map((item) => (
      <Track
        key={item.id} // Use the index as the key for mapping
        albumCover={item.Image}
        dripTooHardLilB={
            <Link to={item.Link} className={styles.link}>{truncateString(item.Track,16)}</Link> 
          }
        lilBabyGunna={item.Artist}
        propWidth="276px"
      />
    ));
  }
  
  export default createList;
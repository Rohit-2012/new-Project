import styles from '../CSS/rightComponent.module.css'
import { FcClock } from "react-icons/fc";
export function RightComponent() {
    return(
        <div className={styles.rightBox}>
          <div className={styles.card1}>
            <h6>
                Time Management
            </h6>
            <span style={{fontSize:12}}>Description</span>
            <div>
                <img src="https://r-graph-gallery.com/209-the-options-of-barplot_files/figure-html/thecode2-2.png" alt="graph" />
            </div>
          </div>
          <div className={styles.card2}><h3>
            Feed Instagram #1
            </h3>
            <button>+ Invite</button></div>
          <div className={styles.card3}>
          <FcClock style={{fontSize: 20}}/><h6>Time Tracking</h6>
          </div>
        </div>
    )
    
}
import styles from '../CSS/horizontal-Scroller.module.css'
export function Profiles(props) {
    
    return(
    <div className={styles.card}>
        <img src = {props.User.image} style={{width:'100px', height:'100px'}}/>
        <span className={styles.name}>{props.User.name}</span>
        <span className={styles.designation}>{props.User.designation}</span>
        <span className={styles.exp}>{props.User.experience}</span>
    </div>
    )
}
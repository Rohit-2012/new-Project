import styles from '../CSS/leftComponent.module.css'
import { AiOutlinePlayCircle } from "react-icons/ai";
export function LeftComponent() {
    return(
        <div className={styles.leftBox}>
            <span>TOTALLY FREE</span>
         <h1>|Let's bring your team together in Gulathi Enterprises</h1>
         <p>We help you to manage all of your Work and daily task in office</p>
            
            <div className={styles.buttonBox}>
                <button className={styles.btn1}>Get Started</button>
                <span className={styles.spn1}><AiOutlinePlayCircle style={{fontSize: 30,margin: 5}}/>How to use</span>
            </div>
         
        </div>
    )
    
}
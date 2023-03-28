import Navbar  from './Navbar';
import {Link} from 'react-router-dom'
import styles from '../CSS/Login.module.css'

export default function Login(){
    return(
        <div className={styles.mainBox}>
            <Navbar/>
            <div className={styles.outerBox}>
            <div className={styles.innerBox}>
                <img src="https://sites.rutgers.edu/acal51/wp-content/uploads/sites/291/2017/12/3859882-6269102771-Bruce.jpg" alt="Profile pic" />
                <div className={styles.textBox}>
                <input type="text" placeholder='Username'/>
                <input type="password" placeholder='Password'/>
                <div className={styles.bottom}>
                    <div>
                <p>Don't have account?</p>
            <Link to={'/Register'} style={{fontWeight:'bold'}}>Register Here</Link>
                    </div>
            <button>Login</button>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}
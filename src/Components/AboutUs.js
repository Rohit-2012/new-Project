import Navbar  from './Navbar';
import styles from '../CSS/Aboutus.module.css'

export default function AboutUs(){
    return(
        <div className={styles.mainContainer}>
            <Navbar/>
            <div className={styles.content}>
                <h1>About Us</h1>
                <div className={styles.mainBox}>
                <div className={styles.imageBox}>
                    <img src="https://upload.wikimedia.org/wikipedia/en/1/19/Bruce_Wayne_%28The_Dark_Knight_Trilogy%29.jpg" alt="Bruce Wayne" style={{height: '18rem', width: '12rem'}} />
                    <p>Age: 34 </p>
                    <p>Location: Gotham </p>
                </div>
                <div className={styles.textBox}>
                    <h3>Bruce Wayne</h3>
                    <p>A rich playboy and philanthropist who swore to fight crime after witnessing his parents' brutal murder. He has served as a member of various teams, including the Justice League, the Justice Society of America and the Outsiders. Batman is also the founder and leader of various teams, including the Batman Family, Batmen of All Nations and Batman Incorporated. He also goes by numerous nicknames, including "The Dark Knight", "the Caped Crusader", "World's Greatest Detective" and the "Defender of Gotham".</p>
                    <div className={styles.cardContainer}>
                        <div className={styles.card}>
                            <h4>What are your skills?</h4>
                            <ul>
                            <li>Master of 127 Martial Arts</li>
                                <li>Professional Detective</li>
                                <li>Professional Ninja</li>
                            </ul>
                        </div>
                        <div className={styles.card}>
                            <h4>What are your hobbies?</h4>
                            <ul>
                                <li>Sports</li>
                                <li>Spelunking</li>
                                <li>Falconry</li>
                            </ul>
                        </div>
                        <div className={styles.card}>
                            <h4>What are you learning?</h4>
                            <ul>
                                <li>Aerobatics</li>
                                <li>Hacking</li>
                                <li>Parkouring</li>
                            </ul>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
import styles from "../styles/sidebar.module.scss";
import { motion } from 'framer-motion';
import { menuSlide } from '../app/anim';

export default function index() {
    return(
        <motion.div variants={menuSlide} initial="initial" animate="enter" exit="exit" className={styles.menu}>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <div className={styles.header}>
                        <p>Contact</p>
                        {/* Contact form here */}
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
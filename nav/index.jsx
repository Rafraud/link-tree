import styles from "../styles/sidebar.module.scss";
import { motion } from "framer-motion";
import { menuSlide } from "../app/anim";
import { ContactForm } from "../app/form";

export default function index() {
  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.menu}
    >
      <div className={styles.body}>
        <p>Contact</p>
        <ContactForm />
        <div className={styles.nav}>
          <div className={styles.header}>{/* Contact form here */}</div>
        </div>
      </div>
    </motion.div>
  );
}

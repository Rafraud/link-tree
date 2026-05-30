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
        <ContactForm />
    </motion.div>
  );
}

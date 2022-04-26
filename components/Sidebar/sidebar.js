import Link from 'next/link'
import styles from './sidebar.module.scss'
import { AnimatePresence, motion } from 'framer-motion'

export default function Sidebar() {
  return (
    <motion.nav
    key="sidebar"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: .2, delay: .1 }}
    className={styles.nav}>
      <h2 className={styles.sub_heading}>All stores</h2>
      <input className={styles.input} placeholder="Search..." />
      <Link href="/">
      <a>About</a>
      </Link>
      <Link href="/">
        <a>About</a>
      </Link>
      <Link href="/">
        <a>Contact</a>
      </Link>
    </motion.nav>
  )
}
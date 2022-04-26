import React from 'react'
import styles from './hero.module.scss'
import { AnimatePresence, motion } from 'framer-motion'

export default function Hero() {
  return (
    <div className={styles.hero_wrapper}>
        <motion.h1
          key="h1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: .2, delay: .1 }}
         className={styles.title}>Find the best<br/>
        <motion.span
         key="span"
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0, y: -20 }}
         transition={{ duration: .2, delay: .2 }}
        className={styles.span}>burgers in town</motion.span></motion.h1>
        <motion.input
          key="input"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: .2, delay: .2 }}
         className={styles.input} placeholder="Search..." />

    </div>
  )
}

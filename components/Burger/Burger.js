
import Link from 'next/link'
import Image from 'next/image'
import styles from './burger.module.scss'
import { AnimatePresence, motion } from 'framer-motion'







export default function Burger({ burger }) {
  
  return (
   
      <motion.li 
      key={burger.id}
      initial={{ opacity: 1, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: .4, delay: .1 }}
      className={styles.card}>
        <Link href="/burger/[id]" as={`/burger/${burger.id}`} passHref>
          <a className={styles.card}>
            <div>
              <Image
                src={burger.image}
                width={100}
                height={100}
               
              />
            </div>
            <h3>{burger.name}</h3>
            <div className={styles.card_info}>
              <p>{burger.rating} <span>|</span> </p><p>{burger.type}  <span></span> </p>
            </div>
            <p>{burger.mass}</p>
         
            <h3>R{burger.price}</h3>
          </a>
        </Link>
      </motion.li>
  )
}

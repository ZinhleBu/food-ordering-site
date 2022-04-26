import { useState, useEffect, useReducer, Fragment } from 'react';

import { useRouter } from 'next/router'
import useSWR from 'swr'
import Image from 'next/image'
import Layout from '../../components/Layout/layout'
import styles from './details.module.scss'
import { AnimatePresence, motion } from 'framer-motion'

const fetcher = async (url) => {
  const res = await fetch(url)
  const data = await res.json()

  if (res.status !== 200) {
    throw new Error(data.message)
  }
  return data
}
export default function Burger() {

  const [count, setCount] = useState('0');
  console.log(count)

  const [newPrice, setNewPrice] = useState('');
  console.log(newPrice)


  const { query } = useRouter()
  const { data, error } = useSWR(
    () => query.id && `/api/burgers/${query.id}`,
    fetcher
  )

  if (error) return <div>{error.message}</div>
  if (!data) return <div>Loading...</div>

  return (
    <>
      <AnimatePresence
        exitBeforeEnter={true}
        >
        <div className={styles.details_wrapper}>
          <div className={styles.details_image}>
            <motion.div
              key="image"
              initial={{ opacity: 0, x: -20 }}
              animate={{ ease: "easeInOut", opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ ease: "easeOut", duration: .2, delay: .1 }}
            >
              <Image
                src={data.image}
                alt="extra-beef-burger"
                width={300}
                height={270}

              />
            </motion.div>
          </div>
          <div className={styles.details_content}>
            <div className={styles.details_content_wrapper}>
              <motion.h1
                key="title"
                initial={{ opacity: 0, y: -20 }}
                animate={{ ease: "easeInOut", opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ ease: "easeOut", duration: .2, delay: .1 }}
              >{data.name}</motion.h1>
              <motion.p
                key="ingredients"
                initial={{ opacity: 0, y: -20 }}
                animate={{ ease: "easeInOut", opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ ease: "easeOut", duration: .2, delay: .2 }}
              >{data.ingredients}</motion.p>
              <motion.h3
                key="description_title"
                initial={{ opacity: 0, y: -20 }}
                animate={{ ease: "easeInOut", opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ ease: "easeOut", duration: .2, delay: .3 }}
              >Description</motion.h3>
              <motion.p
                key="description"
                initial={{ opacity: 0, y: -20 }}
                animate={{ ease: "easeInOut", opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ ease: "easeOut", duration: .2, delay: .4 }}
              >{data.description}</motion.p>
              <motion.div
                key="price"
                initial={{ opacity: 0, y: -20 }}
                animate={{ ease: "easeInOut", opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ ease: "easeOut", duration: .2, delay: .5 }}
              >
                <p>Add {count} more items.</p>
                <motion.button onClick={() => [setNewPrice(+newPrice + +data.price), setCount(+count + +1)]}>Add more</motion.button>
                <button disabled={newPrice < 1} onClick={() => [setNewPrice(+newPrice - +data.price), setCount(+count - +1)]}>Remove</button>
                <h1>Total: R{Math.round((+data.price + +newPrice) * 100) / 100}</h1>
                <button>Add to cart</button>
              </motion.div>
            </div>
          </div>
        </div>
      </AnimatePresence>

    </>
  )
}

// Burger.getLayout = function getLayout(page) {
//   return (
//     <Layout>
//       {page}
//     </Layout>
//   )
// }


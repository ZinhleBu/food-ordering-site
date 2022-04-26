import useSWR from 'swr'
import Burger from '../components/Burger/Burger'
import Category from '../components/Category/Category'

import Hero from '../components/Hero/Hero'
import Layout from '../components/Layout/layout'
import Sidebar from '../components/Sidebar/sidebar'
import banner from '../public/images/banner.jpg'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Index() {
  const { data, error } = useSWR('/api/burgers', fetcher)

  if (error) return <div>Failed to load</div>

  if (!data) return <motion.div 
  key="loading"
  initial={{ opacity: 0}}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0}}
  transition={{ duration: .2, delay: .2 }}
  className="container_loading">Loading...</motion.div>


  return (
    <>
      
        <Hero />
        {/* <div className="container">
        <div className="content">

          <ul className="container_categories_top">
            {data.map((c, i) => (
              <Category key={i} category={c} />
            ))}
          </ul>
        </div>
      </div> */}
        <div className="container">
          <Sidebar />
          <div className="content">
            <motion.h1 
             key="title_main"
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
             transition={{ duration: .2, delay: .1 }}
            className="subtitle">Enjoy The Best Burgers Around The World</motion.h1>
            <motion.p
             key="p1"
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
             transition={{ duration: .2, delay: .1 }}
            className="sub_info">Great vegan menu</motion.p>
            <motion.div 
            key="image"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: .2, delay: .1 }}
            className="banner">
              <Image src={banner} height={1000} width={1200} alt="" />
            </motion.div>
            <motion.h1 
            key="title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: .2, delay: .1 }}
            className="subtitle">Burgers</motion.h1>
            <motion.p
             key="p"
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
             transition={{ duration: .2, delay: .1 }}
            className="sub_info">Most popular</motion.p>
            <motion.ul 
             key="ul"
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
             transition={{ duration: .2, delay: .1 }}
            className="container_categories">
              {data.map((b, i) => (
                <Burger key={i} burger={b} />
              ))}
            </motion.ul>
          </div>
        </div>

    </>
  )
}

Index.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
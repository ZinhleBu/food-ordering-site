import '../styles/global.scss'
import { AnimatePresence } from 'framer-motion'
export default function MyApp({ Component, pageProps, router }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(
    <AnimatePresence 
    exitBeforeEnter={true}
    >
      <Component {...pageProps}  key={router.route} />
    </AnimatePresence>
  )
}
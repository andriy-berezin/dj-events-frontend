import Head from 'next/head'
import styles from '../styles/Layout.module.css'
import Header from './header'
import Footer from './footer'

const Layout = ({ title, description, keywords, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>

      <Header />
      <div className={styles.container}>{children}</div>
      <Footer />
    </>
  )
}

Layout.defaultProps = {
  title: 'DJ Events | Find the hottest parties',
  description: 'Find the latest DJ and other events',
  keywords: 'music, dj, edm'
}

export default Layout

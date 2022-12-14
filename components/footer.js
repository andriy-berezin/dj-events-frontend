import Link from 'next/link'
import styles from '../styles/footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p> Copyright &copy; DJ Events</p>
      <Link href='/about'>About this project</Link>
    </footer>
  )
}

export default Footer

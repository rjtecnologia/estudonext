import styles from '@/components/header/header.module.css'
import Link from 'next/link'

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>Meu Site</h1>
      <br />
      <Link href="/">Home</Link>
      <br />
      <Link href="/contato">Contato</Link>
      <br />
      <Link href="/dashboard">Dashborad</Link>
      <br />
      <hr />
    </header>
  )
}

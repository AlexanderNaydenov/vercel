import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>The Tech Leader Podcast by Alex Naydenov</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Alex Naydenov
        </h1>

        <p className={styles.description}>
          <a href="https://graphcms.com>GraphCMS"</a> Sales Director | <a href="https://paperhive.org">PaperHive</a> and <a href="https://oib.bg">United Ideas</a> Co-Founder  
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Blog</h3>
            <p>Management articles, ebooks and political commentaries.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Algorithms - the Tech Leader's Podcast</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

import type { NextPage } from 'next';
import Head from 'next/head';

import Counter from '../features/counter/Counter';
import styles from '../styles/Home.module.css';

const classes = {};
const data = [
  { title: 'Featured Projects', link: 'dsdas' },
  { title: 'Websites', link: 'dsdas' },
  { title: 'Games', link: 'dsdas' },
  { title: 'Art', link: 'dsdas' },
  { title: 'Offline & Other', link: 'dsdas' },
  { title: 'Contact', link: 'dsdas' },
  { title: 'Config & Español', link: 'dsdas' },
];

const IndexPage: NextPage = () => {
  return (
    <>
      <section id="app">
        <section className={classes['content-container']}></section>
        <section className={classes['thumb-container']}>
          <ul className={classes['thumb-list']} style={{ right: '-300px' }}></ul>
        </section>
        <nav className={classes['nav-container']}>
          <canvas
            className={classes['nav-canvas']}
            // style="top: 0px; left: 0px;"
            width="130"
            height="26"
          ></canvas>
          <a
            href="javascript:;"
            className={classes['nav-btn-container curl-sprite']}
            // style="top: -60px; left: -30px;"
          >
            Menu
          </a>
          <ul
            className={classes['nav-items-container']}
            // style="display: block;"
          >
            {data.map((item) => (
              <li
                className={classes['nav-item-container']}
                key={item.title}
                // style="opacity: 1; display: list-item; margin-left: 39.5547px; visibility: inherit; width: 134px;"
              >
                <div className={classes['nav-item']}>
                  <span className={classes['nav-connector']}></span>
                  <a href={item.link} className={classes['nav-item-span']}>
                    {item.title}
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </nav>
        <section className={classes['breadcrumbs']}></section>
      </section>
      ------------------------------------------------------------
      <div className={styles.container}>
        <Head>
          <title>Redux Toolkit test</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <header className={styles.header}>
          {/* <img src="/logo.svg" className={styles.logo} alt="logo" /> */}
          <Counter />
          <p>
            Update <code>src/App.tsx</code> and save to reload.
          </p>
          <span>
            <span>Learn </span>
            <a
              className={styles.link}
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React
            </a>
            <span>, </span>
            <a
              className={styles.link}
              href="https://redux.js.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Redux
            </a>
            <span>, </span>
            <a
              className={styles.link}
              href="https://redux-toolkit.js.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Redux Toolkit
            </a>
            ,<span> and </span>
            <a
              className={styles.link}
              href="https://react-redux.js.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React Redux
            </a>
          </span>
        </header>
      </div>
    </>
  );
};

export default IndexPage;

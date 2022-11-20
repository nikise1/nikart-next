import type { NextPage } from 'next';
import Head from 'next/head';
import useSWR from 'swr';

import Counter from '../features/counter/Counter';
import styles from '../styles/Home.module.css';

const classes = {};
// const data = [
//   { title: 'Featured Projects', link: 'dsdas' },
//   { title: 'Websites', link: 'dsdas' },
//   { title: 'Games', link: 'dsdas' },
//   { title: 'Art', link: 'dsdas' },
//   { title: 'Offline & Other', link: 'dsdas' },
//   { title: 'Contact', link: 'dsdas' },
//   { title: 'Config & Español', link: 'dsdas' },
// ];

//Write a fetcher function to wrap the native fetch function and return the result of a call to url in json format
const fetcher = (url) => fetch(url).then((res) => res.json());

const IndexPage: NextPage = () => {
  //Set up SWR to run the fetcher function when calling "/api/staticdata"
  //There are 3 possible states: (1) loading when data is null (2) ready when the data is returned (3) error when there was an error fetching the data
  const { data, error } = useSWR('/api/staticdata', fetcher);

  //Handle the error state
  if (error) return <div>Failed to load</div>;
  //Handle the loading state
  if (!data) return <div>Loading...</div>;
  //Handle the ready state and display the result contained in the data object mapped to the structure of the json file

  let dataObj;
  try {
    dataObj = JSON.parse(data);
    console.log('dataObj', dataObj);
  } catch (e) {
    console.log('errpr', e);
  }

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
            // href="javascript:;"
            className={classes['nav-btn-container curl-sprite']}
            // style="top: -60px; left: -30px;"
          >
            Menu length: {dataObj?.menu && dataObj.menu.length}
          </a>
          <ul
            className={classes['nav-items-container']}
            // style="display: block;"
          >
            {dataObj?.menu &&
              dataObj.menu.map((item) => (
                <li
                  className={classes['nav-item-container']}
                  key={item.id}
                  // style="opacity: 1; display: list-item; margin-left: 39.5547px; visibility: inherit; width: 134px;"
                >
                  <div className={classes['nav-item']}>
                    <span className={classes['nav-connector']}></span>
                    <a
                      // href={item.link}
                      className={classes['nav-item-span']}
                    >
                      {item.title.en}:
                      {item.menu &&
                        item.menu.map((subItem) => <div key={subItem.id}>{subItem.title.en}</div>)}
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

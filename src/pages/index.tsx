import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import Card from '../components/Card';
import PatternForm from '../components/PatternForm';
import BarChart from '../components/BarChart';
import SearchInput from '../components/SearchInput';
import { GlobalStateProvider } from '../context/state';

const Home: NextPage = () => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const years = [2021, 2022, 2023, 2024, 2025].map((year: number, i: number) => {
    return <option key={i}>{year}</option>;
  });
  const monthOptions = months.map((month: string, i: number) => {
    return <option key={i}>{month}</option>;
  });

  return (
    <GlobalStateProvider>
      <div className={styles.container}>
        <Head>
          <title>Track habits.</title>
          <meta name="description" content="An app to track habits." />
        </Head>
        <main className={styles.main}>
          <h1 className={styles.app_title}> Habit Track</h1>
          {/* <BarChart /> */}
          <div style={{ display: 'flex' }}>
            <select className="form-select" aria-label="Default select example">
              {monthOptions}
            </select>
            <input
              style={{ width: '300px' }}
              type="date"
              id="start"
              name="trip-start"
              value="2018-07-22"
              min="2018-01-01"
              max="2018-12-31"
            ></input>
          </div>

          <div style={{ overflowY: 'scroll', height: '400px' }}>
            <Card />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <SearchInput addon="🔎" placeholder="Search loggers" />
            <PatternForm />
          </div>
        </main>

        <footer className={styles.footer}></footer>
      </div>
    </GlobalStateProvider>
  );
};

export default Home;

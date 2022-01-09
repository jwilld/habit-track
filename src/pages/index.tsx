import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import Card from '../components/Card';
import PatternForm from '../components/PatternForm';
import BarChart from '../components/BarChart';
import { GlobalStateProvider } from '../context/state';

const Home: NextPage = () => {
  return (
    <GlobalStateProvider>
      <div className={styles.container}>
        <Head>
          <title>Track habits.</title>
          <meta name="description" content="An app to track habits." />
        </Head>
        <main className={styles.main}>
          <h1 className={styles.title}> Habit Track</h1>
          <PatternForm />
          <Card />
          <BarChart />
        </main>

        <footer className={styles.footer}></footer>
      </div>
    </GlobalStateProvider>
  );
};

export default Home;

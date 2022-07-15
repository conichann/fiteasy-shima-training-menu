import type { AppProps } from 'next/app';
import { mainTheme } from '../styles/consts.css';
import '../styles/global.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <main className={mainTheme}>
      <Component {...pageProps} />
    </main>
  );
};

export default MyApp;

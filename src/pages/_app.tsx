import type { AppProps } from 'next/app';
import AppContextProvider from '@/storage/context/AppContextProvider';
import LoadingLayer from '@/components/common/LoadingLayer';
import '../styles/globals.scss';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <AppContextProvider >
      <Component {...pageProps} />
      <LoadingLayer />
    </AppContextProvider>
  );
};

export default App;

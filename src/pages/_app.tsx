import type { AppProps } from 'next/app';
import AppContextProvider from '@/storage/context/AppContextProvider';
import '../styles/globals.scss';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <AppContextProvider >
      <Component {...pageProps} />
    </AppContextProvider>
  );
};

export default App;

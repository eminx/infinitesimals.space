import { ThemeProvider } from 'styled-components';

import theme from '../theme.js';
import '../styles/globals.css';
import Layout from '../Layout.js';

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};
export default MyApp;

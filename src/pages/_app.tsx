import 'tailwindcss/tailwind.css';
import '../globalStyles.scss';

import type {AppProps} from 'next/app';
import Script from 'next/script';
import {memo, useMemo} from 'react';

const MyApp = memo(({Component, pageProps}: AppProps): JSX.Element => {
  const scriptContent = useMemo(() => ({
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-T0JTWH2MYJ');
    `
  }), []);

  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-T0JTWH2MYJ"
        strategy="afterInteractive"
      />
      <Script
        dangerouslySetInnerHTML={scriptContent}
        id="google-analytics"
        strategy="afterInteractive"
      />
      <Component {...pageProps} />
    </>
  );
});

export default MyApp;
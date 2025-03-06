import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  // Theme Handler
                  const savedTheme = localStorage.getItem('darkMode');
                  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  const theme = savedTheme ? (savedTheme === 'true' ? 'dark' : 'light') : systemTheme;
                  document.documentElement.setAttribute('data-theme', theme);
                  
                  // Color Handler
                  const savedColor = localStorage.getItem('selectedColor');
                  if(savedColor) {
                    const color = JSON.parse(savedColor);
                    document.documentElement.style.setProperty('--primary-color', color.value);
                    const rgb = [
                      parseInt(color.value.slice(1,3), 
                      parseInt(color.value.slice(3,5)), 
                      parseInt(color.value.slice(5,7))
                    ].join(',');
                    document.documentElement.style.setProperty('--primary-color-rgb', rgb);
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
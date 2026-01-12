import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';

export default class Testerika extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="shortcut icon" href="/img/favicon.png" type="image/png" />
          <link rel="manifest" href="/manifest.json" />
          
        </Head>

        <body>
        {/* <script dangerouslySetInnerHTML={{
                    __html: `
                        document.addEventListener('contextmenu', (e) => e.preventDefault());
                        document.addEventListener('keydown', (e) => {
                            if (e.key === 'F12' || 
                                (e.ctrlKey && e.shiftKey && e.key === 'I') || 
                                (e.ctrlKey && e.key === 'u')) {
                                e.preventDefault();
                            }
                        });
                        setInterval(() => {
                            const devtools = window.outerWidth - window.innerWidth > 100 || 
                                             window.outerHeight - window.innerHeight > 100;
                            if (devtools) {
                                alert('DevTools is open. Please close it to continue.');
                                window.location.reload();
                            }
                        }, 1000);
                    `
                }} /> */}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// ======================================================================

Testerika.getInitialProps = async (ctx: DocumentContext) => {
  const originalRenderPage = ctx.renderPage;

  // Run the React rendering logic synchronously
  ctx.renderPage = () =>
    originalRenderPage({
      // Useful for wrapping the whole react tree
      enhanceApp: (App) => App,
      // Useful for wrapping in a per-page basis
      enhanceComponent: (Component) => Component
    });

  // Run the parent `getInitialProps`, it now includes the custom `renderPage`
  const initialProps = await Document.getInitialProps(ctx);

  return { ...initialProps };
};

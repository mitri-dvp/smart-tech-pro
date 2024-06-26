import Document, { Html, Head, Main, NextScript, DocumentContext  } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext ) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Titillium+Web:wght@200;300;400;500;600;700&display=swap" rel="stylesheet" /> 
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument

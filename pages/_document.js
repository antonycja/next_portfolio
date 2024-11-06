import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    {/* Meta Tags */}
                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta name="description" content="My portfolio website" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
                    <link rel="preconnect" href="https://code.iconify.design" />



                    {/* Meta Tags */}
                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta name="description" content="My portfolio website" />

                    
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    {/* JS Deliver (for Bootstrap and Iconify) */}
                    <script
                        defer
                        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
                        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
                        crossOrigin="anonymous"
                    ></script>

                    <script defer src="https://code.iconify.design/2/2.1.2/iconify.min.js"></script>

                    {/* <script
                        async
                        src="https://code.iconify.design/2/2.1.2/iconify.min.js"
                    ></script> */}
                </body>
            </Html>
        );
    }
}

export default MyDocument;

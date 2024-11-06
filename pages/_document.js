import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    {/* Meta Tags */}
                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta name="description" content="My portfolio website" />

                    {/* Google Fonts */}
                    <link 
                        rel="stylesheet" 
                        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" 
                    />
                    <link 
                        rel="stylesheet" 
                        href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap" 
                    />

                    {/* Font Awesome */}
                    <link 
                        rel="stylesheet" 
                        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" 
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    {/* JS Deliver (for Bootstrap and Iconify) */}
                    <script
                        async
                        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
                        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
                        crossOrigin="anonymous"
                    ></script>
                    <script 
                        async
                        src="https://code.iconify.design/2/2.1.2/iconify.min.js"
                    ></script>
                </body>
            </Html>
        );
    }
}

export default MyDocument;

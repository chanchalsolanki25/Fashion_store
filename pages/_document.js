import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                {/* <link rel="icon" href="/favicon.ico" /> */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

                {/* google font link */}
                <link href="https://fonts.googleapis.com/css2?family=Kaushan+Script&family=Lobster+Two&display=swap" rel="stylesheet" />

                {/* font awesome link */}
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css" />

            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
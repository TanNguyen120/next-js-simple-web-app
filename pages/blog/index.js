import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../../components/layout';

export default function blogIndex() {
    return (
        <Layout>
            <Head>
                <title>Blog number 1</title>
                <link rel="icon" href="/img/blink-fox-full-art.jpg" />
                {/* component Script cua next js dung de load cac script bên ngoài trang web */}

            </Head>
            <h1>
                take it slowly and you will find it easy
            </h1>
            <Script
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy="lazyOnload"
                onLoad={() =>
                    console.log(`script loaded correctly, window.FB has been populated`)
                }
            />
            <Link href='/'>
                <a> Back to home </a>
            </Link>
        </Layout>
    )
}


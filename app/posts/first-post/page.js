import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../../components/layout';



export default function Page() {
    return (
        <Layout>
            <Head>
                <title> First Blog </title>
            </Head>
            <h1>First Post</h1>
            <h2>
                <Link href="/">Back to home</Link>
            </h2>
        </Layout>
    );
}
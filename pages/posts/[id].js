import Head from "next/head";
import Layout from "../../components/layout";

import { getPostData } from '../../lib/posts';
import Date from "../../components/date";

import utilStyles from '../../styles/utils.module.css';

export default function Post({ postData }) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <div className={utilStyles.lightText}>
                    <Date dateString={postData.date} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </Layout>
    );
}

export async function getServerSideProps({ query }) {
    const postData = await getPostData(query.id);
    return {
        props: {
            postData
        },
    };
}
import { getPostData } from '../../../lib/posts';
import Date from "../../../components/date";

import utilStyles from '../../../styles/utils.module.css';
import { SignedIn, SignedOut } from '@clerk/nextjs';

export default async function Page({ params }) {
    const postData = await getPostData(params.slug);

    return (
        <article>
            <SignedIn> Hello user </SignedIn>
            <SignedOut> oh noo, you should sign in!!! </SignedOut>
            <h1 className={utilStyles.headingXl}>{postData.title}</h1>
            <div className={utilStyles.lightText}>
                <Date dateString={postData.date} />
            </div>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
    );
}
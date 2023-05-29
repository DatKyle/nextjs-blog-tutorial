import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';

import utilStyles from '../styles/utils.module.css';

import { getSortedPostsData } from '../lib/posts'

import Date from '../components/date';
import { SignIn, SignedIn, SignedOut } from '@clerk/nextjs';

export async function getAllPosts() {
  const allPostsData = getSortedPostsData();
  return { allPostsData }
}

export default async function Home() {
  const allPostsData = (await getAllPosts()).allPostsData;

  console.log(allPostsData);

  return (
    <>
      <SignedIn>
        <section className={utilStyles.headingMd}>
          <p>I'm Kyle</p>
          <p>
            (This is a sample website - you’ll be building a site like this on{' '}
            <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
          </p>
        </section>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>{title}</Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        </section>
      </SignedIn>
      <SignedOut>
        <SignIn />
      </SignedOut>
    </>
  );
}

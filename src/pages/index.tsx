import type { ReactNode } from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

const recentPosts = [
  {
    title:
      "SOLVED: ReferenceError: Request is not defined When Running Next.js",
    to: "/blog/solved-reference-error-request-not-defined-nextjs",
    date: "Jan 30, 2024",
  },
  {
    title: "How To Write a File to AWS S3 Using Pure Node.js",
    to: "/blog/how-to-write-file-aws-s3-using-pure-nodejs",
    date: "Jan 29, 2024",
  },
  {
    title: "How To Trigger Gitlab Pipeline Using API",
    to: "/blog/how-to-trigger-gitlab-pipeline-using-api",
    date: "Sep 21, 2023",
  },
  {
    title: "Delete Old Lambda Versions Using Serverless Package",
    to: "/blog/delete-old-lambda-versions-using-serverless-package",
    date: "Sep 18, 2023",
  },
  {
    title: "Get Latest and Oldest AWS Lambda Version Numbers Using CLI",
    to: "/blog/get-latest-and-oldest-aws-lambda-version-numbers-using-cli",
    date: "Sep 16, 2023",
  },
  {
    title: "SOLVED: Gitlab Downstream Project Could Not be Found",
    to: "/blog/solved-gitlab-downstream-project-could-not-be-found",
    date: "Sep 06, 2023",
  },
  {
    title: "SOLVED: 431 Status Code With Request Header Fields Too Large",
    to: "/blog/solved-431-status-code-with-request-header-fields-too-large",
    date: "Jul 08, 2023",
  },
  {
    title:
      "SOLVED: AWS Lambda CodeStorageExceededException: Code storage limit exceeded",
    to: "/blog/solved-aws-lambda-codestorageexceededexception-code-storage-limit-exceeded",
    date: "Jul 07, 2023",
  },
  {
    title:
      "Take Different Builds For Dev And Production Environment Using Webpack",
    to: "/blog/take-different-builds-for-dev-and-production-environment-using-webpack",
    date: "Mar 05, 2023",
  },
  {
    title: "Styled Components Resolution in Package.json File",
    to: "/blog/styled-components-resolution-package-json-file",
    date: "Mar 04, 2023",
  },
];

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.title}
      description="Essays and notes on JavaScript, React, and the web."
    >
      <main className={`container ${styles.page}`}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <span className={styles.badge}>Headless Commerce</span>
            <Heading as="h1" className={styles.heroTitle}>
              Building Modern Commerce with Headless Shopify
            </Heading>
            <p className={styles.heroSubtitle}>
              A comprehensive guide to creating fast, flexible e-commerce
              experiences using Shopify's Storefront API, Next.js, and modern
              web technologies. Learn how to build custom storefronts that
              combine Shopify's powerful backend with cutting-edge frontend
              frameworks.
            </p>
            <div className={styles.heroActions}>
              <Link
                className="button button--primary button--lg"
                to="/docs/intro"
              >
                Get Started
              </Link>
              <Link
                className="button button--secondary button--lg"
                to="https://github.com/jobyjoseph/headless-shopify"
              >
                View on GitHub
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.blogList}>
            <div className={styles.sectionHeader}>
              <Heading as="h2">Recent Blog Posts</Heading>
              <Link to="/blog">View all posts</Link>
            </div>
            {recentPosts.map((post) => (
              <article key={post.to} className={styles.blogItem}>
                <Link to={post.to} className={styles.blogLink}>
                  <span className={styles.blogDate}>{post.date}</span>
                  <span className={styles.blogTitle}>{post.title}</span>
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}

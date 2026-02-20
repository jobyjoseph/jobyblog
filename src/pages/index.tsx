import type { ReactNode } from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

const recentPosts = [
  {
    title: "How To Write a File to AWS S3 Using Pure Node.js",
    to: "/blog/how-to-write-file-aws-s3-using-pure-nodejs",
    date: "Jan 29, 2024",
  },
  {
    title:
      "SOLVED: ReferenceError: Request is not defined When Running Next.js",
    to: "/blog/solved-reference-error-request-not-defined-nextjs",
    date: "Jan 30, 2024",
  },
  {
    title: "useEffect() React Hook",
    to: "/blog/useeffect-react-hook",
    date: "Apr 10, 2022",
  },
  {
    title: "useState() React Hook",
    to: "/blog/usestate-react-hook",
    date: "Apr 07, 2022",
  },
  {
    title: "How To Use ESLint With Prettier And React",
    to: "/blog/how-to-use-eslint-with-prettier-and-react",
    date: "Apr 01, 2022",
  },
  {
    title: "How To Use Prettier In React Project",
    to: "/blog/how-to-use-prettier-in-react-project",
    date: "Mar 31, 2022",
  },
  {
    title: "Insert More Than One Child Component Using React.createElement()",
    to: "/blog/insert-more-than-one-child-component-react-createelement",
    date: "Mar 28, 2022",
  },
  {
    title: "How To Easily Write HTML5 Boilerplate Code In Visual Studio Code",
    to: "/blog/html-boilerplate-code-visual-studio-code",
    date: "Mar 27, 2022",
  },
  {
    title: "How To Clear Browser Cache When Webpack Bundle Is Updated",
    to: "/blog/clear-browser-cache-when-webpack-bundle-updated",
    date: "Mar 23, 2022",
  },
  {
    title: "Code Splitting Using Webpack And Import Function",
    to: "/blog/code-splitting-webpack-import-function",
    date: "Mar 21, 2022",
  },
  {
    title: "Hot Reloading Using Webpack Dev Server",
    to: "/blog/hot-reloading-using-webpack-dev-server",
    date: "Mar 19, 2022",
  },
  {
    title: "Understanding Source Maps In Webpack",
    to: "/blog/understanding-source-maps-in-webpack",
    date: "Mar 16, 2022",
  },
  {
    title: "Clean Distribution Folder In Each Webpack Build",
    to: "/blog/clean-distribution-folder-in-each-webpack-build",
    date: "Mar 15, 2022",
  },
  {
    title: "Mode Option In Webpack Configuration",
    to: "/blog/webpack-mode-config",
    date: "Mar 12, 2022",
  },
  {
    title: "Plugins In Webpack And HTML Webpack Plugin",
    to: "/blog/webpack-plugins",
    date: "Mar 11, 2022",
  },
  {
    title: "Understanding Loaders In Webpack",
    to: "/blog/webpack-loaders",
    date: "Mar 09, 2022",
  },
  {
    title: "Output Option In Webpack Configuration",
    to: "/blog/webpack-output-config",
    date: "Mar 08, 2022",
  },
  {
    title: "Entry Option In Webpack Configuration",
    to: "/blog/webpack-entry-config",
    date: "Mar 07, 2022",
  },
  {
    title: "Webpack Configuration File",
    to: "/blog/webpack-config-file",
    date: "Mar 06, 2022",
  },
  {
    title: "Introduction to Webpack",
    to: "/blog/webpack-introduction",
    date: "Mar 05, 2022",
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

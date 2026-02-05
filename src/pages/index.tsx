import type { ReactNode } from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

const featuredPosts = [
  {
    title: "Create React Starter App using React 16, Webpack 4 and Babel 7",
    to: "/blog/create-react-starter-webpack-babel",
    date: "Feb 18, 2020",
  },
  {
    title: "Spread Operator in JavaScript",
    to: "/blog/spread-operator-in-javascript",
    date: "Feb 10, 2020",
  },
  {
    title: "Destructuring in JavaScript",
    to: "/blog/destructuring-in-javascript",
    date: "Feb 06, 2020",
  },
  {
    title: "Prototypes in JavaScript",
    to: "/blog/prototypes-in-javascript",
    date: "Feb 05, 2020",
  },
  {
    title: "Arithmetic Operators in JavaScript",
    to: "/blog/arithmetic-operators-in-javascript",
    date: "Nov 20, 2020",
  },
  {
    title: "Callbacks in JavaScript",
    to: "/blog/callbacks-in-javascript",
    date: "Nov 24, 2019",
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
            <span className={styles.badge}>New posts added</span>
            <Heading as="h1" className={styles.heroTitle}>
              A developer journal for building fast, elegant web experiences.
            </Heading>
            <p className={styles.heroSubtitle}>
              Joby.blog is a personal collection of modern JavaScript notes,
              React build guides, and practical tooling tips—kept short and
              intentional.
            </p>
            <div className={styles.heroActions}>
              <Link className="button button--primary button--lg" to="/blog">
                Explore the blog
              </Link>
              <Link
                className="button button--secondary button--lg"
                to="/blog/authors/jobyjoseph"
              >
                Meet the author
              </Link>
            </div>
            <div className={styles.heroMeta}>
              <div>
                <span className={styles.metaLabel}>Topics</span>
                <p className={styles.metaValue}>JS, React, Tooling</p>
              </div>
              <div>
                <span className={styles.metaLabel}>Updated</span>
                <p className={styles.metaValue}>Weekly batches</p>
              </div>
              <div>
                <span className={styles.metaLabel}>Focus</span>
                <p className={styles.metaValue}>Clear, practical writing</p>
              </div>
            </div>
          </div>
          <div className={styles.heroPanel}>
            <div className={styles.glow} />
            <div className={styles.panelHeader}>
              <img
                className={styles.avatar}
                src="/img/avatar.png"
                alt="Joby Joseph"
              />
              <div>
                <p className={styles.panelTitle}>Joby Joseph</p>
                <p className={styles.panelSubtitle}>
                  Headless Commerce • Next.js • Shopify{" "}
                </p>
              </div>
            </div>
            <div className={styles.panelBody}>
              <p className={styles.panelCopy}>
                I'm a software developer and writer that likes to write code and
                build things. Currently I'm fascinated by Headless commerce,
                Next.js and Shopify.
              </p>
              <div className={styles.panelLinks}>
                <Link to="https://github.com/jobyjoseph">GitHub</Link>
                <Link to="https://www.linkedin.com/in/reachjoby/">
                  LinkedIn
                </Link>
              </div>
            </div>
            <div className={styles.codeBlock}>
              <span className={styles.codeLine}>const blog = "Joby.blog";</span>
              <span className={styles.codeLine}>// Fast reads, real fixes</span>
              <span className={styles.codeLine}>export default blog;</span>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <Heading as="h2">Latest posts</Heading>
            <Link to="/blog">View all</Link>
          </div>
          <div className={styles.postGrid}>
            {featuredPosts.map((post) => (
              <article key={post.to} className={styles.postCard}>
                <p className={styles.postDate}>{post.date}</p>
                <Heading as="h3" className={styles.postTitle}>
                  <Link to={post.to}>{post.title}</Link>
                </Heading>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.sectionAlt}>
          <div className={styles.sectionContent}>
            <Heading as="h2">Built for busy builders</Heading>
            <p className={styles.sectionText}>
              Everything is written to scan quickly: short paragraphs, runnable
              snippets, and clear next steps. If it doesn’t help you ship, it
              doesn’t stay.
            </p>
            <div className={styles.topicGrid}>
              <div className={styles.topicCard}>
                <Heading as="h3">JavaScript notes</Heading>
                <p>Core language insights without the noise.</p>
              </div>
              <div className={styles.topicCard}>
                <Heading as="h3">Modern tooling</Heading>
                <p>Webpack, Babel, and build strategies explained.</p>
              </div>
              <div className={styles.topicCard}>
                <Heading as="h3">React workflow</Heading>
                <p>Starter patterns and reliable setup guides.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.cta}>
            <div>
              <Heading as="h2">Browse the archive</Heading>
              <p className={styles.sectionText}>
                Jump straight to every post in one clean list. Updated whenever
                a new article ships.
              </p>
            </div>
            <Link className="button button--primary" to="/blog">
              Go to blog
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}

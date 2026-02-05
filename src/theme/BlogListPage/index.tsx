import React from "react";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import styles from "./styles.module.css";

type BlogListPageProps = {
  metadata: {
    blogTitle: string;
    blogDescription: string;
  };
  items: Array<{
    content: {
      metadata: {
        permalink: string;
        title: string;
        date: string;
        formattedDate?: string;
      };
    };
  }>;
};

export default function BlogListPage(props: BlogListPageProps) {
  const { metadata, items } = props;

  return (
    <Layout title={metadata.blogTitle} description={metadata.blogDescription}>
      <main className="container margin-vert--lg">
        <header className={styles.header}>
          <h1 className={styles.title}>{metadata.blogTitle}</h1>
        </header>
        <ul className={styles.list}>
          {items.map(({ content }) => {
            const { metadata: post } = content;
            const dateLabel =
              post.formattedDate ??
              new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "2-digit",
              });

            return (
              <li key={post.permalink} className={styles.item}>
                <Link className={styles.link} to={post.permalink}>
                  {post.title}
                </Link>
                <span className={styles.date}>{dateLabel}</span>
              </li>
            );
          })}
        </ul>
      </main>
    </Layout>
  );
}

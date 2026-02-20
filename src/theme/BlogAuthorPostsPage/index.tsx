import React from "react";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import styles from "./styles.module.css";

type BlogAuthorPostsPageProps = {
  author: {
    name: string;
    imageURL?: string;
    page?: {
      permalink: string;
    };
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

export default function BlogAuthorPostsPage(props: BlogAuthorPostsPageProps) {
  const { author, items } = props;
  const title = `Posts by ${author.name}`;

  const groupedByYear = items.reduce<
    Record<
      string,
      BlogAuthorPostsPageProps["items"][0]["content"]["metadata"][]
    >
  >((acc, { content }) => {
    const { metadata: post } = content;
    const year = new Date(post.date).getFullYear().toString();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(post);
    return acc;
  }, {});

  const years = Object.keys(groupedByYear).sort(
    (a, b) => Number(b) - Number(a),
  );

  return (
    <Layout title={title} description={title}>
      <main className="container margin-vert--lg">
        <header className={styles.header}>
          <h1 className={styles.title}>Posts by {author.name}</h1>
        </header>
        <div className={styles.groupList}>
          {years.map((year) => (
            <section key={year} className={styles.yearGroup}>
              <div className={styles.yearHeader}>
                <h2 className={styles.yearTitle}>{year}</h2>
                <span className={styles.yearCount}>
                  {groupedByYear[year].length} posts
                </span>
              </div>
              <ul className={styles.yearList}>
                {groupedByYear[year].map((post) => {
                  const dateLabel =
                    post.formattedDate ??
                    new Date(post.date).toLocaleDateString("en-US", {
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
            </section>
          ))}
        </div>
      </main>
    </Layout>
  );
}

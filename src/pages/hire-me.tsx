import type { ReactNode } from "react";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import Link from "@docusaurus/Link";

import styles from "./hire-me.module.css";

export default function HireMe(): ReactNode {
  return (
    <Layout
      title="Hire Me"
      description="Experienced Full Stack Developer specializing in Headless Commerce, Shopify, React, and Node.js"
    >
      <main className={`container ${styles.hireMePage}`}>
        <section className={styles.hero}>
          <Heading as="h1" className={styles.title}>
            Let's Build Something Amazing Together
          </Heading>
          <p className={styles.subtitle}>
            Full Stack Developer | Headless Commerce Specialist | Shopify Expert
          </p>
        </section>

        <section className={styles.section}>
          <Heading as="h2">About Me</Heading>
          <p className={styles.description}>
            I'm Joby Joseph, a seasoned Full Stack Developer with extensive
            experience in building modern, scalable web applications. My passion
            lies in creating high-performance e-commerce solutions using
            cutting-edge technologies.
          </p>
          <p className={styles.description}>
            With deep expertise in headless commerce architectures, I help
            businesses unlock the full potential of their online stores by
            decoupling frontend experiences from backend systems, resulting in
            faster, more flexible, and highly customizable storefronts.
          </p>
        </section>

        <section className={styles.section}>
          <Heading as="h2">Specializations</Heading>

          <div className={styles.specialization}>
            <Heading as="h3" className={styles.specializationTitle}>
              Headless Shopify Development
            </Heading>
            <p className={styles.specializationDesc}>
              Expert in building custom storefronts using Shopify's Storefront
              API, combining the power of Shopify's backend with modern frontend
              frameworks like Next.js and React. I create blazing-fast,
              SEO-optimized commerce experiences that convert.
            </p>
            <ul className={styles.skillsList}>
              <li>Custom Shopify storefronts with Next.js</li>
              <li>Storefront API integration</li>
              <li>GraphQL query optimization</li>
              <li>Authentication & customer account management</li>
              <li>Cart & checkout customization</li>
              <li>Performance optimization & Core Web Vitals</li>
            </ul>
          </div>

          <div className={styles.specialization}>
            <Heading as="h3" className={styles.specializationTitle}>
              Modern Frontend Development
            </Heading>
            <p className={styles.specializationDesc}>
              Proficient in building responsive, accessible, and performant user
              interfaces using the latest frontend technologies and best
              practices.
            </p>
            <ul className={styles.skillsList}>
              <li>React, Next.js, TypeScript</li>
              <li>Tailwind CSS, CSS-in-JS</li>
              <li>State management (Redux, Zustand, React Context)</li>
              <li>Server-Side Rendering & Static Site Generation</li>
              <li>Progressive Web Apps (PWA)</li>
            </ul>
          </div>

          <div className={styles.specialization}>
            <Heading as="h3" className={styles.specializationTitle}>
              Backend & API Development
            </Heading>
            <p className={styles.specializationDesc}>
              Experienced in building robust, scalable backend systems and
              RESTful/GraphQL APIs that power modern applications.
            </p>
            <ul className={styles.skillsList}>
              <li>Node.js, Express, NestJS</li>
              <li>GraphQL & REST API design</li>
              <li>Database design (PostgreSQL, MongoDB, MySQL)</li>
              <li>Authentication & authorization (JWT, OAuth, Better Auth)</li>
              <li>Microservices architecture</li>
            </ul>
          </div>
        </section>

        <section className={styles.section}>
          <Heading as="h2">Why Work With Me?</Heading>
          <div className={styles.benefitsGrid}>
            <div className={styles.benefit}>
              <Heading as="h3" className={styles.benefitTitle}>
                Performance First
              </Heading>
              <p>
                I build lightning-fast applications optimized for Core Web
                Vitals, ensuring excellent user experience and SEO rankings.
              </p>
            </div>
            <div className={styles.benefit}>
              <Heading as="h3" className={styles.benefitTitle}>
                Business Focused
              </Heading>
              <p>
                I understand that technology serves business goals. Every
                technical decision is made with your ROI and user experience in
                mind.
              </p>
            </div>
            <div className={styles.benefit}>
              <Heading as="h3" className={styles.benefitTitle}>
                Full Stack Expertise
              </Heading>
              <p>
                From database design to pixel-perfect UI, I handle every layer
                of the stack with confidence and best practices.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <Heading as="h2">Recent Projects & Writing</Heading>
          <p className={styles.description}>
            Check out my recent work on building headless commerce solutions:
          </p>
          <div className={styles.projectsGrid}>
            <div className={styles.project}>
              <Heading as="h3" className={styles.projectTitle}>
                Headless Shopify Starter
              </Heading>
              <p>
                Open-source Next.js starter for building custom Shopify
                storefronts with authentication, cart management, and optimized
                performance.
              </p>
              <Link
                href="https://github.com/jobyjoseph/headless-shopify"
                className={styles.projectLink}
              >
                View on GitHub →
              </Link>
            </div>
            <div className={styles.project}>
              <Heading as="h3" className={styles.projectTitle}>
                Technical Blog
              </Heading>
              <p>
                I regularly write about headless commerce, Shopify development,
                React, and modern web technologies.
              </p>
              <Link href="/blog" className={styles.projectLink}>
                Read my articles →
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <Heading as="h2">Let's Discuss Your Project</Heading>
          <p className={styles.ctaDescription}>
            Looking to build a headless Shopify storefront or modernize your
            e-commerce platform? I'd love to hear about your project and explore
            how we can work together.
          </p>
          <div className={styles.contactButtons}>
            <a
              href="mailto:reachjoby@gmail.com"
              className="button button--primary button--lg"
            >
              Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/reachjoby/"
              target="_blank"
              rel="noopener noreferrer"
              className="button button--secondary button--lg"
            >
              Connect on LinkedIn
            </a>
            <a
              href="https://github.com/jobyjoseph"
              target="_blank"
              rel="noopener noreferrer"
              className="button button--secondary button--lg"
            >
              View GitHub Profile
            </a>
          </div>
        </section>
      </main>
    </Layout>
  );
}

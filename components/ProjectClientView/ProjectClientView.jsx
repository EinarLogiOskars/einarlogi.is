'use client';

import { PortableText } from '@portabletext/react';
import { urlFor } from '@/sanity/imageUrl';

import Link from 'next/link';
import styles from './ProjectClientView.module.css';

export default function ProjectClientView({ project, locale }) {
  return (
    <article className={styles.container}>
      <Link href={`/${locale}/projects`} className={styles.backButton}>
        ← Back to projects
      </Link>

      <section className={styles.header}>
        <div className={styles.meta}>
          <span>Project</span>
          <span className={styles.metaDivider}>·</span>
          <span>{new Date(project.publishedAt).getFullYear()}</span>
        </div>

        <div className={styles.heroImageWrapper}>
          {project.cardImage && (
            <img
              src={urlFor(project.cardImage).width(300).height(300).url()}
              alt={`${project.title.en} preview`}
              className={styles.heroImage}
            />
          )}
        </div>

        <h1 className={styles.heroTitle}>
          {project.title[locale] || project.title.en}
        </h1>
      </section>

      <section className={styles.introLayout}>
        <div className={styles.leftColumn}>
          <p className={styles.description}>{project.description[locale]}</p>

          {project.techStack?.length > 0 && (
            <ul className={styles.techList}>
              {project.techStack.map((tech) => (
                <li key={tech} className={styles.techItem}>{tech}</li>
              ))}
            </ul>
          )}
        </div>

      </section>

    {project.detailedDescription?.[locale] && (
        <section className={styles.fullWidthText}>
            <div className={styles.rightColumn}>
                {project.mainImage && (
                    <img
                    src={urlFor(project.mainImage).url()}
                    alt="Main visual"
                    className={styles.sideImage}
                    />
                )}
                {project.secondImage && (
                    <img
                    src={urlFor(project.secondImage).url()}
                    alt="Secondary visual"
                    className={styles.sideImage}
                    />
                )}
            </div>
            <div className={styles.richText}>
                <PortableText value={project.detailedDescription[locale]} />
            </div>
        </section>
    )}

      <section className={styles.footer}>
        <h2 className={styles.footerTitle}>
          {project.title[locale] || project.title.en}
        </h2>
        <div className={styles.links}>
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              Live Site
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          )}
        </div>
      </section>
    </article>
  );
}

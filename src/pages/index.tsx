import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const logo = (siteConfig.themeConfig as any)?.navbar?.logo;
  
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className="hero__title">
          {logo && (
            <img 
              src={logo.src} 
              alt={logo.alt} 
              style={{ height: '60px', marginBottom: '1rem' }}
            />
          )}
        </div>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/mcp-kit-python/docs">
            mcp-kit-python User Guide 📚
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/mcp-kit-python/docs/examples">
            mcp-kit-python Examples ⚡️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): React.JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Documentation`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        {/* Add your main content here */}
      </main>
    </Layout>
  );
}
import type {ReactNode} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import LandingPage from '@site/src/components/landing/LandingPage';

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <div>
      <p>Welcome to Agentiqs.ai</p>
      The landing page is in a different project. You're not supposed to serve this page.<br/>
      <a href="/docs">Go to the documentation</a><br/>
      <a href="/blog">Go to the blog</a><br/>
    </div>
  );
}

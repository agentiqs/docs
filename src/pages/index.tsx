import type {ReactNode} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import LandingPage from '@site/src/components/landing/LandingPage';

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <p>Welcome to Agentiqs.ai</p>
  );
}

import React, {type ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {translate} from '@docusaurus/Translate';
import IconHome from '@theme/Icon/Home';

import styles from './styles.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function HomeBreadcrumbItem(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  const homeHref = siteConfig.themeConfig?.homeUrl as string || useBaseUrl('/');

  return (
    <li className="breadcrumbs__item">
      <Link
        aria-label={translate({
          id: 'theme.docs.breadcrumbs.home',
          message: 'Home page',
          description: 'The ARIA label for the home page in the breadcrumbs',
        })}
        className="breadcrumbs__link"
        href={homeHref}
        target='_self'>
        <IconHome className={styles.breadcrumbHomeIcon} />
      </Link>
    </li>
  );
}

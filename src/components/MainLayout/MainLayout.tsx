import React from 'react';
import Head from 'next/head';
import { dcnb } from 'cnbuilder';
import { Container } from '../Container';
import { Heading } from '../Typography';
import * as styles from './MainLayout.styles';

export type MainLayoutProps = {
  title: string;
  headTitle?: string;
  bgColor?: styles.BgColorType;
  contentWidth?: keyof typeof styles.contentWidth;
  children: React.ReactNode;
};

export const MainLayout = ({
  title,
  headTitle,
  bgColor = 'white',
  contentWidth = 'default',
  children,
  ...rest
}: MainLayoutProps & React.HTMLAttributes<HTMLElement>) => (
  <main {...rest} className={styles.root({ bgColor })}>
    <Head>
      <title>{headTitle || title}</title>
    </Head>
    <header>
      <Container id="main-content">
        <Container width="full" className={dcnb(styles.contentWidth[contentWidth], styles.wrapper)}>
          <Heading as="h1" size={4}>
            {title}
          </Heading>
        </Container>
      </Container>
    </header>
    <Container className={styles.contentWrapper}>
      <Container width="full" className={dcnb(styles.contentWidth[contentWidth], styles.wrapper)}>
        {children}
      </Container>
    </Container>
  </main>
);

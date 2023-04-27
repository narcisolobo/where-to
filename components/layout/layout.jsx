import { Fragment } from 'react';
import Appbar from './appbar';
import { links } from '@/data/links';
import Head from 'next/head';
import Container from 'react-bootstrap/Container';

function Layout({ children }) {
  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Next Events</title>
      </Head>
      <Appbar brand={'Next Events'} links={links} />
      <Container>{children}</Container>
    </Fragment>
  );
}

export default Layout;

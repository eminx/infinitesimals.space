import React, { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const routes = [
  {
    value: '/',
    label: 'Home',
  },
  {
    value: '/bio',
    label: 'Bio',
  },
  {
    value: '/contact',
    label: 'Contact',
  },
];

function Layout({ children }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Head>
        <title>Emin Durak | Infinitesimals Space | Research Projects </title>
      </Head>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          paddingTop: 12,
        }}
      >
        {routes.map((route) => (
          <div key={route.label} style={{ padding: 12 }}>
            <Link href={route.value}>{route.label}</Link>
          </div>
        ))}
      </div>
      <div
        style={{
          maxWidth: 480,
          margin: '0 auto',
          padding: '0 24px',
          marginBottom: 48,
        }}
      >
        {children}
      </div>
    </>
  );
}

export default Layout;

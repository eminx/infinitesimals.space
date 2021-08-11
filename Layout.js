import React, { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const menu = [
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
      <nav
        style={{
          display: 'flex',
          justifyContent: 'center',
          paddingTop: 12,
        }}
      >
        {menu.map((item) => (
          <div key={item.label} style={{ padding: 12 }}>
            <Link href={item.value}>{item.label}</Link>
          </div>
        ))}
      </nav>
      <main
        style={{
          maxWidth: 480,
          margin: '0 auto',
          padding: '0 24px',
          marginBottom: 48,
        }}
      >
        {children}
      </main>
    </>
  );
}

export default Layout;

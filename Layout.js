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
      <nav className="navbar">
        {menu.map((item) => (
          <div key={item.label} className="navbar-item">
            <Link href={item.value}>{item.label}</Link>
          </div>
        ))}
      </nav>
      <main>{children}</main>
    </>
  );
}

export default Layout;

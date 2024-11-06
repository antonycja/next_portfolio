"use client"
import '@/styles/global.css';  // Global CSS import
import { useEffect } from 'react';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Perform actions if needed
  }, [router]);

  return <Component {...pageProps} />;
}

export default MyApp;

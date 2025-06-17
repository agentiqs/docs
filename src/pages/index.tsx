import React, { useEffect } from 'react';
import type { ReactElement } from 'react';

export default function Home(): ReactElement {
  useEffect(() => {
    // Redirect to external URL immediately
    window.location.href = 'https://agentiqs.ai';
  }, []);

  // Return a simple loading message while redirecting
  return <div>Redirecting to agentiqs.ai landing...</div>;
}
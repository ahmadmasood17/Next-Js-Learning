"use client";

import { useState, useEffect } from 'react';

const DELAY = 5000;

const DummyUser = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, DELAY);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isVisible ? (
        <div style={{ padding: '15px', border: '1px solid black' }}>
          <h3>Dummy User Profile</h3>
          <p>This user is now visible.</p>
        </div>
      ) : (
        <p>Loading user in {DELAY / 1000} seconds...</p>
      )}
    </div>
  );
};

const Page = () => {
  return (
    <div>
      <p>This is the main content.</p>
      <DummyUser />
    </div>
  );
};

export default Page;
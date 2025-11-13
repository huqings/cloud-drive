import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('@/pages/home'));
const Jobs = lazy(() => import('@/pages/jobs'));
const Team = lazy(() => import('@/pages/team'));

const LoadingFallback = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);

export default function Main() {
    return (
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="team" element={<Team />} />
          <Route path="earn/*" element={<div id="container"></div>} />
          <Route path="staking/*" element={<div id="container"></div>} />
          <Route path="*" element={<></>} />
        </Routes>
      </Suspense>
    );
}
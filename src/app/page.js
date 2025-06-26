'use client';

import { useState } from 'react';
import HomeContainer from '@/components/HomeContainer';
import Hero from '@/components/Hero';

export default function Home() {
  const [search, setSearch] = useState('');

  return (
    <div>
      <Hero search={search} setSearch={setSearch} />
      <h1 className="font-bold text-3xl mt-15 ml-6">Popular</h1>
      <HomeContainer search={search} />
    </div>
  );
}

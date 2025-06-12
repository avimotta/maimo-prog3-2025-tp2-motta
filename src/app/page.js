import HomeContainer from '@/components/HomeContainer';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <div>
    <Hero/>
    <h1 className="font-bold text-3xl mt-15 ml-6">Popular</h1>
    <HomeContainer/>
    </div>
  );
}

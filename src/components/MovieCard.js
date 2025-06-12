'use client';

import Image from 'next/image';
import Link from 'next/link';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original';

export default function MovieCard({ movie }) {
  return (
    <Link href={`/movie/${movie.id}`}>
  <div className="bg-[#6a5af9] text-white border-black border-2 rounded-2xl shadow transition transform duration-200 cursor-pointer pb-2 flex flex-col h-[425px]">
    <Image
      src={`${IMAGE_BASE_URL}${movie.poster_path}`}
      alt={movie.title}
      width={500} 
      height={750} 
      className="rounded-t-lg h-[360px] object-cover"
    />
    <div className="p-2 flex-grow">
      <h3 className="text-sm font-semibold line-clamp-2">{movie.title}</h3>
    </div>
  </div>
</Link>

  );
}
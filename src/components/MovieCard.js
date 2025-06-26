'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useAppContext } from '@/contexts/AppContext';
import { Heart } from 'lucide-react';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original';

export default function MovieCard({ movie }) {
  const { favorites, handleAddToFavorites, handleRemoveFromFavorites } = useAppContext();

  const isFavorite = favorites.some((fav) => fav.id === movie.id);

  const toggleFavorite = () => {
    if (isFavorite) {
      handleRemoveFromFavorites(movie.id);
    } else {
      handleAddToFavorites({
        title: movie.title,
        poster_path: movie.poster_path,
        id: movie.id
      });
    }
  };

  return (
    <div className="relative">
      <button
        onClick={toggleFavorite}
        className={`absolute top-2 right-2 z-10 p-1 rounded-full shadow-md transition-colors ${
          isFavorite ? "bg-pink-400 text-white" : "bg-white text-black"
        }`}
        title={isFavorite ? "Remove from favorites" : "Add to favorites"}
      >
        {isFavorite ? <Heart fill="white" className="w-5 h-5" /> : <Heart className="w-5 h-5" />}
      </button>

      <Link href={`/movie/${movie.id}`}>
        <div className="bg-[#6a5af9] text-white border-[#6a5af9] border-7 rounded-2xl shadow transition transform duration-200 cursor-pointer pb-2 flex flex-col h-[425px]">
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
    </div>
  );
}

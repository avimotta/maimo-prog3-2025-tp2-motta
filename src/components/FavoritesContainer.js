'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useAppContext } from "@/contexts/AppContext";

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original';

const FavoritesContainer = () => {
  const { favorites, handleRemoveFromFavorites } = useAppContext();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">My Favorites</h1>

      {favorites && favorites.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {favorites.map((movie) => (
            <div key={movie.id} className="relative">
              <button 
                onClick={() => handleRemoveFromFavorites(movie.id)}
                className="absolute top-2 right-2 z-10 bg-[#6a5af9] hover:bg-pink-400 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold transition-colors shadow-lg"
                title="Remove from favorites"
              >
                ×
              </button>
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
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-xl text-white mb-4">No favorites yet</p>
          <p className="text-white">Start adding movies to your favorites!</p>
        </div>
      )}
    </div>
  );
};

export default FavoritesContainer;

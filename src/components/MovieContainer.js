import Image from 'next/image';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original';

export default function MovieContainer({ movie }) {
  return (
    <div className="p-4 text-white">
      <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
      <Image
        src={`${IMAGE_BASE_URL}${movie.backdrop_path}`}
        alt={movie.title}
        width={1000}
        height={600}
        className="rounded mb-4"
      />
      <p className="mb-4">{movie.overview}</p>
      <p className="text-sm">Release date: {movie.release_date}</p>
    </div>
  );
}
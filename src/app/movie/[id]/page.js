'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Loading from '@/components/Loading'
import axios from "axios"
import Link from 'next/link'
import Image from 'next/image'
import { Star } from 'lucide-react';

const Movie = () => {
    const params = useParams()
    const id = params.id

    const [movie, setMovie] = useState(null)
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getData = async () => {
            setLoading(true)
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
                    params: {
                        api_key: '8d155a452063365b70d7e38e2609b662'
                    }
                })
                setMovie(response.data)
                setLoading(false)
            } catch (error) {
                console.log('MI ERROR FUE', error)
                setError(true)
                setLoading(false)
            }
        }

        if (id) {
            getData()
        }
    }, [id])

    if (loading) return <Loading />
    if (error) return <div className="text-white text-center mt-20">Error al cargar la película</div>
    if (!movie) return <div className="text-white text-center mt-20">No se encontró la película</div>

    return (
        <div className="relative w-full min-h-screen text-white">
            <div className="absolute inset-0 -z-10">
                <Image
                    src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                    alt="Fondo"
                    fill
                    className="object-cover brightness-[0.3]"
                    priority
                />
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8 px-6 py-12 md:px-20 md:py-24 bg-black/10 rounded-lg max-w-7xl mx-auto">
                <div className="w-64 border-4 border-[#6a5af9] rounded-xl overflow-hidden">
                    <Image
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                        width={500}
                        height={750}
                        className="object-cover w-full h-auto"
                        priority
                    />  
                </div>

                <div className="text-left max-w-xl">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">{movie.title}</h1>
                    <p className="text-lg mb-2">
                        <strong>Release date:</strong> {movie.release_date}
                    </p>
                    <p className="text-lg mb-2">
                        <strong>Runtime:</strong> {movie.runtime} min
                    </p>
                    <p className="text-lg mb-4">
                        <strong>Description:</strong> {movie.overview}
                    </p>
                    <p className="text-lg mb-4">
                        <strong>Rating:</strong>{' '}
                        <span className="inline-flex items-center gap-1">
                        <Star fill="white" className="w-5 h-5" />
                        {movie.vote_average}
                        </span>
                    </p>

                    <Link
                        href="/"
                        className="inline-block mt-4 bg-pink-500 text-black font-bold px-5 py-2 rounded-full hover:bg-pink-400"
                    >
                        Back
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Movie

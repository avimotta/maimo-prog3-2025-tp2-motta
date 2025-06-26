'use client';

import { useAppContext } from '@/contexts/AppContext';
import Link from "next/link";
import { Heart, User, Bell } from 'lucide-react';
import Image from 'next/image';

const Navbar = () => {
  const {favoritesQty} = useAppContext();
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center px-6 sm:px-12 py-4 mb-6 bg-gradient-to-r from-pink-400 to-purple-400 border-2 border-black rounded-3xl shadow-md mx-4 mt-4">
      <div className="flex flex-wrap gap-6 font-semibold text-white text-sm sm:text-base">
        <Image 
          src="/corazon.webp" 
          alt="Logo" 
          width={32} 
          height={32} 
          className="rounded-full cursor-pointer"
        />
        <div className="hover:text-black cursor-pointer">Movies</div>
        <div className="hover:text-black cursor-pointer">Series</div>
        <div className="hover:text-black cursor-pointer">People</div>
        <div className="hover:text-black cursor-pointer">More</div>
      </div>
      <nav className="mt-4 sm:mt-0">
        <ul className="flex gap-4 font-semibold text-white text-sm sm:text-base">
          <li className="hover:text-black cursor-pointer"><Bell className="w-5 h-5" /></li>
          <li>
            <Link href="/favorites" className="hover:text-black cursor-pointer flex items-center gap-1">
              <Heart fill="white" className="w-5 h-5" />
              {favoritesQty()}
            </Link>
          </li>
          <li className="hover:text-black cursor-pointer"><User className="w-5 h-5" /></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
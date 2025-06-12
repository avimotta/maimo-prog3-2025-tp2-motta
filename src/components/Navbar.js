const Navbar = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center px-6 sm:px-12 py-4 mb-6 bg-gradient-to-r from-pink-400 to-purple-400 border-2 border-black rounded-3xl shadow-md mx-4 mt-4">
      <div className="flex flex-wrap gap-6 font-semibold text-white text-sm sm:text-base">
        <div className="hover:text-black cursor-pointer">L</div>
        <div className="hover:text-black cursor-pointer">Movies</div>
        <div className="hover:text-black cursor-pointer">Series</div>
        <div className="hover:text-black cursor-pointer">People</div>
        <div className="hover:text-black cursor-pointer">More</div>
      </div>

      <nav className="mt-4 sm:mt-0">
        <ul className="flex gap-4 font-semibold text-white text-sm sm:text-base">
          <li className="hover:text-black cursor-pointer">🔔</li>
          <li className="hover:text-black cursor-pointer">➕</li>
          <li className="hover:text-black cursor-pointer">👤</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

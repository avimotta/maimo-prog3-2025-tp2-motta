const Hero = () => {
  return (
    <section className="bg-[#6a5af9] p-6 sm:p-10 rounded-2xl border-2 border-black mt-10 mx-4 sm:mx-6">
      <div className="flex flex-col gap-4">
        <h1 className="text-white text-xl sm:text-3xl font-bold">Search for anything...</h1>
        <input
          type="text"
          placeholder="Maybe a movie, series, person...?"
          className="rounded-full py-3 px-5 outline-none w-full border-2 border-black bg-white text-black placeholder-gray-500"
        />
      </div>
    </section>
  );
};

export default Hero;

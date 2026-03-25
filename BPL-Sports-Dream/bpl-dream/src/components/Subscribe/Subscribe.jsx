const Subscribe = () => {
  return (
    <div className="max-w-6xl mx-auto -mb-24 relative z-10 px-4 mt-20">
      <div className="p-[2px] rounded-2xl bg-gradient-to-r from-white/40 via-white/20 to-white/40 backdrop-blur-md">
  <div className="bg-white/80 rounded-2xl p-8 text-center">
    
    <h2 className="text-xl md:text-2xl font-bold mb-2">
      Subscribe to our Newsletter
    </h2>
    <p className="text-gray-600 mb-6">
      Get the latest updates and news right in your inbox!
    </p>

    <div className="flex flex-col md:flex-row justify-center items-center gap-3">
      <input
        type="email"
        placeholder="Enter your email"
        className="px-4 py-2 rounded-lg border border-gray-300 w-full md:w-80"
      />
      <button className="btn bg-gradient-to-r from-[#f9d17d] to-[#fb9c87] px-6 py-2 rounded-lg font-semibold">
        Subscribe
      </button>
    </div>

  </div>
</div>
</div>
  );
};

export default Subscribe;
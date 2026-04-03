const Banner = () => {
  return (
    <section className="hero min-h-[80vh] bg-base-100 px-6">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10">
        <img
          src="https://i.ibb.co/6RggY5f/dashboard.png"
          alt="Digital Tools"
          className="max-w-sm rounded-2xl shadow-2xl"
        />

        <div>
          <h1 className="text-5xl font-bold leading-tight">
            Buy Premium Digital Tools For Your Business
          </h1>

          <p className="py-6 text-gray-500 max-w-xl">
            Discover powerful templates, design resources, resume builders,
            UI kits, and productivity tools to grow your personal brand and business.
          </p>

          <div className="flex gap-4 flex-wrap">
            <button className="btn btn-primary">Explore Products</button>
            <button className="btn btn-outline">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
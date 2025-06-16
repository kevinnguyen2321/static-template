export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/hero.jpg')",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        {/* Welcome Text */}
        <h2 className="text-lg md:text-xl lg:text-2xl font-normal tracking-wider mb-8 uppercase font-serif">
          Welcome to ROOTS & CO.
        </h2>

        {/* Decorative Line */}
        <div className="flex items-center justify-center mb-12">
          <div className="h-px bg-white w-16"></div>
          <div className="mx-4">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
          <div className="h-px bg-white w-16"></div>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-tight mb-16 font-serif">
          <span className="block">Serving delicious</span>
          <span className="block">local food</span>
        </h1>

        {/* CTA Button */}
        <button className="inline-block px-8 py-4 md:px-12 md:py-5 border-2 border-white bg-transparent text-white text-lg md:text-xl font-medium tracking-wide hover:bg-white hover:text-black transition-all duration-300 ease-in-out transform hover:scale-105">
          Find a Table
        </button>
      </div>
    </section>
  );
}

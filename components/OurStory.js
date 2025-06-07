import Image from 'next/image';
import Link from 'next/link';

export default function OurStory() {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8">
              Our story
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              Here at Local Gourmet, our daily goal is to create, serve and
              enjoy fine food. We love fresh food, flavorful food, food that's
              in season, and food that's distinct. Every morning before opening
              the Local Gourmet kitchen, we stock our shelves with market fresh
              ingredients, so that the food we serve you is as fresh and
              flavorful as can be. We welcome you to our restaurant, and wish
              you a hearty appetite.
            </p>

            <Link href="/about">
              <button className="border-2 border-gray-900 bg-transparent text-gray-900 px-8 py-3 text-lg font-medium hover:bg-gray-900 hover:text-white transition-colors duration-300">
                Read More
              </button>
            </Link>
          </div>

          {/* Circular Food Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 sm:w-96 sm:h-96 rounded-full overflow-hidden shadow-2xl relative">
                <Image
                  src="/salad.jpg"
                  alt="Fresh salad with greens, pomegranate, and cheese"
                  fill
                  className="object-cover object-[center_70%] scale-100"
                  sizes="(max-width: 640px) 320px, 384px"
                  priority
                />
              </div>
              {/* Optional shadow effect */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-64 h-8 bg-gray-300 rounded-full opacity-30 blur-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Menu = () => {
  const router = useRouter();
  const handleMealClick = (mealType) => {
    // Navigate to the specific menu page
    router.push(`/menu/${mealType.toLowerCase()}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-serif text-gray-900 mb-4">Menu</h1>
          <div className="w-24 h-0.5 bg-gray-900 mx-auto mb-2"></div>
          <div className="w-16 h-0.5 bg-gray-900 mx-auto mb-2"></div>
          <div className="w-8 h-0.5 bg-gray-900 mx-auto"></div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Breakfast */}
          <div
            className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
            onClick={() => handleMealClick('Breakfast')}
          >
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <div className="aspect-square bg-white flex items-center justify-center">
                <div className="w-full h-full bg-white rounded-lg flex items-center justify-center relative overflow-hidden">
                  {/* Breakfast Image */}
                  <Image
                    src="/breakfast.jpg"
                    alt="Breakfast Menu"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-95 backdrop-blur-sm p-6">
                <h2 className="text-2xl font-serif text-gray-900 group-hover:text-orange-600 transition-colors">
                  Breakfast
                </h2>
              </div>
            </div>
          </div>

          {/* Lunch */}
          <div
            className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
            onClick={() => handleMealClick('Lunch')}
          >
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <div className="aspect-square bg-white flex items-center justify-center">
                <div className="w-full h-full bg-white rounded-lg flex items-center justify-center relative overflow-hidden">
                  {/* Lunch Image */}
                  <Image
                    src="/lunch.jpg"
                    alt="Lunch Menu"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-95 backdrop-blur-sm p-6">
                <h2 className="text-2xl font-serif text-gray-900 group-hover:text-red-600 transition-colors">
                  Lunch
                </h2>
              </div>
            </div>
          </div>

          {/* Dinner */}
          <div
            className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
            onClick={() => handleMealClick('Dinner')}
          >
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <div className="aspect-square bg-white flex items-center justify-center">
                <div className="w-full h-full bg-white rounded-lg flex items-center justify-center relative overflow-hidden">
                  {/* Dinner Image */}
                  <Image
                    src="/dinner.jpg"
                    alt="Dinner Menu"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-95 backdrop-blur-sm p-6">
                <h2 className="text-2xl font-serif text-gray-900 group-hover:text-gray-700 transition-colors">
                  Dinner
                </h2>
              </div>
            </div>
          </div>

          {/* Drinks */}
          <div
            className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
            onClick={() => handleMealClick('Drinks')}
          >
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <div className="aspect-square bg-white flex items-center justify-center">
                <div className="w-full h-full bg-white rounded-lg flex items-center justify-center relative overflow-hidden">
                  {/* Drinks Image */}
                  <Image
                    src="/drinks.jpg"
                    alt="Drinks Menu"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgo KCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-95 backdrop-blur-sm p-6">
                <h2 className="text-2xl font-serif text-gray-900 group-hover:text-orange-600 transition-colors">
                  Drinks
                </h2>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-12 text-gray-600">
          <p className="text-sm">Click on any category to view our full menu</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;

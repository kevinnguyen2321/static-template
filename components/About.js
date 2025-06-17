// 'use client';
// import Image from 'next/image';
// import { useState } from 'react';
// import {
//   ChevronLeft,
//   ChevronRight,
//   Utensils,
//   Leaf,
//   CheckCircle,
//   Wine,
// } from 'lucide-react';

// export default function About() {
//   const [currentTestimonial, setCurrentTestimonial] = useState(0);

//   const testimonials = [
//     {
//       text: 'Local Gourmet is one of the finest restaurants this side of the Hudson. The ingredients are fresh, the presentation is impeccable and the atmosphere is unrivaled. A perfect restaurant for any gathering.',
//       author: 'Janice Lamaron',
//     },
//     {
//       text: 'An exceptional dining experience with authentic flavors and outstanding service. The attention to detail in every dish is remarkable.',
//       author: 'Michael Chen',
//     },
//     {
//       text: 'The best farm-to-table restaurant in the area. Every meal feels like a celebration of local ingredients and culinary craftsmanship.',
//       author: 'Sarah Williams',
//     },
//   ];

//   const nextTestimonial = () => {
//     setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
//   };

//   const prevTestimonial = () => {
//     setCurrentTestimonial(
//       (prev) => (prev - 1 + testimonials.length) % testimonials.length
//     );
//   };

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Hero Section with Restaurant Image */}
//       <section
//         className="relative h-64 md:h-80 lg:h-96 xl:h-[28rem] bg-cover bg-center"
//         style={{ backgroundImage: 'url(/restaurant.jpg)' }}
//       ></section>

//       {/* About Content Section */}
//       <section className="py-16 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-3xl mx-auto text-center">
//           <h2 className="text-4xl font-bold text-gray-900 mb-8 font-serif">
//             About
//           </h2>
//           <div className="w-24 h-1 bg-gray-900 mx-auto mb-12"></div>

//           <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
//             <p>
//               We founded Local Gourmet out of a deep love for real food, for
//               food that is fresh, healthy, and authentic. We only use real
//               ingredients here at Local Gourmet. Farm fresh eggs, organic
//               tomatoes, fresh water fish, and free-range beef. We strive to make
//               each and every dish a wholesome expression of our love for food,
//               life, and living.
//             </p>

//             <p>
//               The Local Gourmet was born in 1989 as a tiny cafe at the corner of
//               Main Street and 25th Avenue. Over the past two decades, our tiny
//               cafe has blossomed into a thriving restaurant, with indoor and
//               outdoor seating, room for families, parties and even crowds. (Yes,
//               we do catering...just ask us!)
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* First Story Section */}
//       <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
//         <div className="max-w-4xl mx-auto">
//           <p className="text-lg text-gray-700 leading-relaxed text-center">
//             We founded Local Gourmet out of a deep love for real food, for food
//             that is fresh, healthy, and authentic. We only use real ingredients
//             here at Local Gourmet. Farm fresh eggs, organic tomatoes, fresh
//             water fish, and free-range beef. We strive to make each and every
//             dish a wholesome expression of our love for food, life, and living.
//           </p>
//         </div>
//       </section>

//       {/* History Section */}
//       <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
//         <div className="max-w-4xl mx-auto">
//           <p className="text-lg text-gray-700 leading-relaxed text-center">
//             The Local Gourmet was born in 1989 as a tiny cafe at the corner of
//             Main Street and 25th Avenue. Over the past two decades, our tiny
//             cafe has blossomed into a thriving restaurant, with indoor and
//             outdoor seating, room for families, parties and even crowds. (Yes,
//             we do catering...just ask us!)
//           </p>
//         </div>
//       </section>

//       {/* Local Gourmet Section with Chef Image */}
//       <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             {/* Text Content */}
//             <div className="space-y-6">
//               <h2 className="text-3xl font-bold text-gray-900 mb-6 font-serif">
//                 Local Gourmet
//               </h2>

//               <p className="text-lg text-gray-700 leading-relaxed">
//                 All of the ingredients we use here at Local Gourmet are just
//                 that: local. We stock our restaurant kitchen in much the same
//                 way that we stock our home kitchen, with daily deliveries of
//                 fresh ingredients that we select ourselves, at market each
//                 morning.
//               </p>

//               <p className="text-lg text-gray-700 leading-relaxed">
//                 In addition to our menu items, we also offer daily specials
//                 inspired by seasonal ingredients, the weather and how we are
//                 feeling. We are always on the lookout for new sources of ideas
//                 and inspiration, so when we travel the world (which we admit, we
//                 do often) we bring back our favorite flavors and culinary
//                 discoveries.
//               </p>
//             </div>

//             {/* Chef Image */}
//             <div className="-mx-4 sm:-mx-6 lg:mx-0 lg:flex lg:justify-end">
//               <div className="w-full lg:max-w-md">
//                 <Image
//                   src="/chef.jpg"
//                   alt="Chef preparing food in the kitchen"
//                   width={400}
//                   height={500}
//                   className="w-full h-auto object-cover grayscale lg:rounded-lg"
//                   priority
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features Section with Background Image */}
//       <section
//         className="relative py-20 bg-cover bg-center"
//         style={{ backgroundImage: 'url(/kitchen-background.jpg)' }}
//       >
//         <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {/* Local Ingredients */}
//             <div className="text-center text-white">
//               <div className="w-20 h-20 rounded-full border-2 border-white flex items-center justify-center mx-auto mb-4">
//                 <Utensils className="w-8 h-8" />
//               </div>
//               <h3 className="text-lg font-semibold mb-2">LOCAL INGREDIENTS</h3>
//             </div>

//             {/* Vegan Friendly */}
//             <div className="text-center text-white">
//               <div className="w-20 h-20 rounded-full border-2 border-white flex items-center justify-center mx-auto mb-4">
//                 <Leaf className="w-8 h-8" />
//               </div>
//               <h3 className="text-lg font-semibold mb-2">VEGAN FRIENDLY</h3>
//             </div>

//             {/* High Quality */}
//             <div className="text-center text-white">
//               <div className="w-20 h-20 rounded-full border-2 border-white flex items-center justify-center mx-auto mb-4">
//                 <CheckCircle className="w-8 h-8" />
//               </div>
//               <h3 className="text-lg font-semibold mb-2">HIGH QUALITY</h3>
//             </div>

//             {/* House Cocktails */}
//             <div className="text-center text-white">
//               <div className="w-20 h-20 rounded-full border-2 border-white flex items-center justify-center mx-auto mb-4">
//                 <Wine className="w-8 h-8" />
//               </div>
//               <h3 className="text-lg font-semibold mb-2">HOUSE COCKTAILS</h3>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
//         <div className="max-w-4xl mx-auto">
//           <div className="text-center">
//             {/* Quote Icon */}
//             <div className="text-6xl text-gray-400 mb-8">"</div>

//             {/* Testimonial Content */}
//             <div className="relative">
//               <blockquote className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-8 min-h-[200px] flex items-center justify-center">
//                 <p className="text-center max-w-3xl">
//                   "{testimonials[currentTestimonial].text}"
//                 </p>
//               </blockquote>

//               <cite className="text-lg font-semibold text-gray-900 not-italic">
//                 {testimonials[currentTestimonial].author}
//               </cite>

//               {/* Navigation Arrows */}
//               <div className="flex justify-center items-center mt-8 space-x-4">
//                 <button
//                   onClick={prevTestimonial}
//                   className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
//                   aria-label="Previous testimonial"
//                 >
//                   <ChevronLeft className="w-8 h-8" />
//                 </button>

//                 {/* Dots Indicator */}
//                 <div className="flex space-x-2">
//                   {testimonials.map((_, index) => (
//                     <button
//                       key={index}
//                       onClick={() => setCurrentTestimonial(index)}
//                       className={`w-3 h-3 rounded-full transition-colors ${
//                         index === currentTestimonial
//                           ? 'bg-gray-800'
//                           : 'bg-gray-300'
//                       }`}
//                       aria-label={`Go to testimonial ${index + 1}`}
//                     />
//                   ))}
//                 </div>

//                 <button
//                   onClick={nextTestimonial}
//                   className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
//                   aria-label="Next testimonial"
//                 >
//                   <ChevronRight className="w-8 h-8" />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

'use client';
import Image from 'next/image';
import { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Utensils,
  Leaf,
  CheckCircle,
  Wine,
} from 'lucide-react';

export default function About() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      text: 'Local Gourmet is one of the finest restaurants this side of the Hudson. The ingredients are fresh, the presentation is impeccable and the atmosphere is unrivaled. A perfect restaurant for any gathering.',
      author: 'Janice Lamaron',
    },
    {
      text: 'An exceptional dining experience with authentic flavors and outstanding service. The attention to detail in every dish is remarkable.',
      author: 'Michael Chen',
    },
    {
      text: 'The best farm-to-table restaurant in the area. Every meal feels like a celebration of local ingredients and culinary craftsmanship.',
      author: 'Sarah Williams',
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Restaurant Image */}
      <section
        className="relative h-64 md:h-80 lg:h-96 xl:h-[28rem] bg-cover bg-center"
        style={{ backgroundImage: 'url(/restaurant.jpg)' }}
      ></section>

      {/* About Content Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 font-serif">
            About
          </h2>
          <div className="w-24 h-1 bg-gray-900 mx-auto mb-12"></div>

          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              We founded Local Gourmet out of a deep love for real food, for
              food that is fresh, healthy, and authentic. We only use real
              ingredients here at Local Gourmet. Farm fresh eggs, organic
              tomatoes, fresh water fish, and free-range beef. We strive to make
              each and every dish a wholesome expression of our love for food,
              life, and living.
            </p>

            <p>
              The Local Gourmet was born in 1989 as a tiny cafe at the corner of
              Main Street and 25th Avenue. Over the past two decades, our tiny
              cafe has blossomed into a thriving restaurant, with indoor and
              outdoor seating, room for families, parties and even crowds. (Yes,
              we do catering...just ask us!)
            </p>
          </div>
        </div>
      </section>

      {/* First Story Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            We founded Local Gourmet out of a deep love for real food, for food
            that is fresh, healthy, and authentic. We only use real ingredients
            here at Local Gourmet. Farm fresh eggs, organic tomatoes, fresh
            water fish, and free-range beef. We strive to make each and every
            dish a wholesome expression of our love for food, life, and living.
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            The Local Gourmet was born in 1989 as a tiny cafe at the corner of
            Main Street and 25th Avenue. Over the past two decades, our tiny
            cafe has blossomed into a thriving restaurant, with indoor and
            outdoor seating, room for families, parties and even crowds. (Yes,
            we do catering...just ask us!)
          </p>
        </div>
      </section>

      {/* Local Gourmet Section with Chef Image */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 font-serif">
                Local Gourmet
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed">
                All of the ingredients we use here at Local Gourmet are just
                that: local. We stock our restaurant kitchen in much the same
                way that we stock our home kitchen, with daily deliveries of
                fresh ingredients that we select ourselves, at market each
                morning.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                In addition to our menu items, we also offer daily specials
                inspired by seasonal ingredients, the weather and how we are
                feeling. We are always on the lookout for new sources of ideas
                and inspiration, so when we travel the world (which we admit, we
                do often) we bring back our favorite flavors and culinary
                discoveries.
              </p>
            </div>

            {/* Chef Image */}
            <div className="-mx-4 sm:-mx-6 lg:mx-0 lg:flex lg:justify-end">
              <div className="w-full lg:max-w-md">
                <Image
                  src="/chef.jpg"
                  alt="Chef preparing food in the kitchen"
                  width={400}
                  height={500}
                  className="w-full h-auto object-cover grayscale lg:rounded-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with Background Image */}
      <section
        className="relative py-20 bg-cover bg-center"
        style={{ backgroundImage: 'url(/kitchen-background.jpg)' }}
      >
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Local Ingredients */}
            <div className="text-center text-white">
              <div className="w-20 h-20 rounded-full border-2 border-white flex items-center justify-center mx-auto mb-4">
                <Utensils className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">LOCAL INGREDIENTS</h3>
            </div>

            {/* Vegan Friendly */}
            <div className="text-center text-white">
              <div className="w-20 h-20 rounded-full border-2 border-white flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">VEGAN FRIENDLY</h3>
            </div>

            {/* High Quality */}
            <div className="text-center text-white">
              <div className="w-20 h-20 rounded-full border-2 border-white flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">HIGH QUALITY</h3>
            </div>

            {/* House Cocktails */}
            <div className="text-center text-white">
              <div className="w-20 h-20 rounded-full border-2 border-white flex items-center justify-center mx-auto mb-4">
                <Wine className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">HOUSE COCKTAILS</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            {/* Quote Icon */}
            <div className="text-6xl text-gray-400 mb-8">&ldquo;</div>

            {/* Testimonial Content */}
            <div className="relative">
              <blockquote className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-8 min-h-[200px] flex items-center justify-center">
                <p className="text-center max-w-3xl">
                  &ldquo;{testimonials[currentTestimonial].text}&rdquo;
                </p>
              </blockquote>

              <cite className="text-lg font-semibold text-gray-900 not-italic">
                {testimonials[currentTestimonial].author}
              </cite>

              {/* Navigation Arrows */}
              <div className="flex justify-center items-center mt-8 space-x-4">
                <button
                  onClick={prevTestimonial}
                  className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>

                {/* Dots Indicator */}
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentTestimonial
                          ? 'bg-gray-800'
                          : 'bg-gray-300'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextTestimonial}
                  className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-8 h-8" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

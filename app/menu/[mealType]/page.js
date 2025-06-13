'use client';
import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';

const MenuDetails = () => {
  const params = useParams();
  const router = useRouter();
  const mealType = params.mealType;

  // State to track which sections are expanded
  const [expandedSections, setExpandedSections] = useState({});

  // Auto-expand the section based on URL parameter
  useEffect(() => {
    if (mealType) {
      const targetMeal = mealType.toLowerCase();
      setExpandedSections((prev) => ({
        ...prev,
        [targetMeal]: true,
      }));

      // Scroll to the section after a short delay
      setTimeout(() => {
        const element = document.getElementById(targetMeal);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [mealType]);

  // Toggle section expansion
  const toggleSection = (sectionName) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionName]: !prev[sectionName],
    }));
  };

  // Menu data organized by meal type
  const menuData = {
    breakfast: {
      title: 'Breakfast Menu',
      sections: [
        {
          name: 'Main',
          items: [
            {
              name: 'Traditional Breakfast',
              description:
                'Two eggs any style, bacon, country ham or turkey sausage, breakfast potatoes.',
              price: '$15.50',
              image: '/traditional.jpg',
            },
            {
              name: 'Build Your Own Omelet',
              description:
                'Three-egg omelet filled with cheese, smoked salmon, mushroom, tomatoes and spinach.',
              price: '$15.50',
              image: '/omelet.jpg',
            },
            {
              name: 'Brioche French Toast',
              description:
                'Served with forest berry compote, maple syrup & whipped cream.',
              price: '$13.50',
              image: '/french-toast.jpg',
            },
            {
              name: 'Cornmeal Lemon Pancakes',
              description: 'Served with maple syrup.',
              price: '$13.50',
              image: '/pancakes.jpg',
            },
          ],
        },
      ],
    },
    lunch: {
      title: 'Lunch Menu',
      sections: [
        {
          name: 'Appetizers & Snacks',
          items: [
            {
              name: 'Artisan Cheese Board',
              description:
                'Selection of local cheeses with crackers, nuts, and seasonal fruit.',
              price: '$18.00',
              image: '/cheese.jpg',
            },
            {
              name: 'Crispy Calamari',
              description:
                'Fresh squid rings with marinara sauce and lemon aioli.',
              price: '$14.00',
              image: '/calamari.jpg',
            },
          ],
        },
        {
          name: 'Main',
          items: [
            {
              name: 'Grilled Salmon',
              description:
                'Atlantic salmon with roasted vegetables and herb butter.',
              price: '$26.00',
              image: '/salmon.jpg',
            },
            {
              name: 'Chicken Caesar Salad',
              description:
                'Grilled chicken breast over romaine with parmesan and croutons.',
              price: '$16.00',
              image: '/chicken-caesar.jpg',
            },
            {
              name: 'Fish & Chips',
              description:
                'Beer-battered cod with crispy fries and mushy peas.',
              price: '$19.00',
              image: '/fish-chips.jpg',
            },
          ],
        },
      ],
    },
    dinner: {
      title: 'Dinner Menu',
      sections: [
        {
          name: 'Appetizers',
          items: [
            {
              name: 'Oysters Rockefeller',
              description:
                'Fresh oysters with spinach, herbs, and hollandaise.',
              price: '$16.00',
              image: '/oysters.jpg',
            },
            {
              name: 'Beef Tartare',
              description:
                'Hand-cut beef with capers, shallots, and quail egg.',
              price: '$18.00',
              image: '/beef-tarture.jpg',
            },
          ],
        },
        {
          name: 'Main Course',
          items: [
            {
              name: 'Dry-Aged Ribeye',
              description:
                '16oz prime ribeye with roasted potatoes and seasonal vegetables.',
              price: '$48.00',
              image: '/ribeye.jpg',
            },
            {
              name: 'Pan-Seared Duck Breast',
              description:
                'Five-spice duck with cherry gastrique and wild rice.',
              price: '$34.00',
              image: '/duck.jpg',
            },
            {
              name: 'Lobster Thermidor',
              description: 'Fresh lobster with cognac cream sauce and herbs.',
              price: '$42.00',
              image: '/lobster.jpg',
            },
          ],
        },
      ],
    },
    drinks: {
      title: 'Drinks',
      sections: [
        {
          name: 'Cold Drinks',
          items: [
            {
              name: 'Sparkling Mineral Water',
              description: null,
              price: '$4.00',
            },
            {
              name: 'Apple Carrot Ginger Tonic',
              description: null,
              price: '$4.00',
            },
            {
              name: 'Freshly Pressed Apple Soda',
              description: null,
              price: '$5.00',
            },
            {
              name: 'Ginger Tulsi Tea',
              description: null,
              price: '$5.00',
            },
          ],
        },
        {
          name: 'Hot Drinks',
          items: [
            {
              name: 'Espresso',
              description: null,
              price: '$3.50',
            },
            {
              name: 'Cappuccino',
              description: null,
              price: '$4.50',
            },
            {
              name: 'French Press Coffee',
              description: 'Single origin beans, freshly ground.',
              price: '$5.00',
            },
            {
              name: 'Chai Latte',
              description: 'House-made chai blend with steamed milk.',
              price: '$4.50',
            },
          ],
        },
      ],
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <button
            onClick={() => router.push('/menu')}
            className="text-blue-600 hover:underline mb-4 block"
          >
            ← Back to Menu
          </button>
          <h1 className="text-4xl font-serif text-gray-900 mb-4">Menu</h1>
          <div className="w-24 h-0.5 bg-gray-900 mx-auto mb-2"></div>
          <div className="w-16 h-0.5 bg-gray-900 mx-auto mb-2"></div>
          <div className="w-8 h-0.5 bg-gray-900 mx-auto mb-8"></div>

          <div className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            <p className="mb-2">
              In addition to the items below, we offer daily specials made with
              fresh seasonal ingredients.
            </p>
            <p>Be sure to ask your server about our daily specials.</p>
          </div>
        </div>

        {/* All Menu Sections */}
        <div className="space-y-1">
          {Object.entries(menuData).map(([mealKey, mealData], mealIndex) => (
            <div key={mealKey} id={mealKey} className="scroll-mt-24">
              {/* Meal Title */}
              <div
                className={`py-8 ${
                  mealIndex === 0
                    ? 'bg-white'
                    : mealIndex === 1
                    ? 'bg-gray-100'
                    : mealIndex === 2
                    ? 'bg-white'
                    : 'bg-gray-100'
                }`}
              >
                <div className="text-center">
                  <h2 className="text-3xl font-serif text-gray-900">
                    {mealData.title}
                  </h2>
                </div>
              </div>

              {/* Meal Sections */}
              <div
                className={`${
                  mealIndex === 0
                    ? 'bg-white'
                    : mealIndex === 1
                    ? 'bg-gray-100'
                    : mealIndex === 2
                    ? 'bg-white'
                    : 'bg-gray-100'
                }`}
              >
                {mealData.sections.map((section, sectionIndex) => (
                  <div
                    key={`${mealKey}-${sectionIndex}`}
                    className="border-b border-gray-200 last:border-b-0"
                  >
                    {/* Section Header */}
                    <button
                      onClick={() =>
                        toggleSection(`${mealKey}-${section.name}`)
                      }
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-200 transition-colors"
                    >
                      <h3 className="text-xl font-medium text-gray-700">
                        {section.name}
                      </h3>
                      <svg
                        className={`w-5 h-5 text-gray-500 transition-transform ${
                          expandedSections[`${mealKey}-${section.name}`]
                            ? 'rotate-180'
                            : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {/* Section Items */}
                    {expandedSections[`${mealKey}-${section.name}`] && (
                      <div className="px-6 pb-6">
                        <div className="space-y-6">
                          {section.items.map((item, itemIndex) => (
                            <div
                              key={itemIndex}
                              className="flex items-start space-x-4 py-4 border-b border-dotted border-gray-300 last:border-b-0"
                            >
                              {/* Item Image (only for non-drinks) */}
                              {mealKey !== 'drinks' && (
                                <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded-full overflow-hidden">
                                  <div
                                    className="w-full h-full bg-cover bg-center"
                                    style={{
                                      backgroundImage: `url(${item.image})`,
                                    }}
                                  ></div>
                                </div>
                              )}

                              {/* Item Details */}
                              <div className="flex-1">
                                <div className="flex justify-between items-start mb-2">
                                  <h4 className="text-lg font-medium text-gray-900">
                                    {item.name}
                                  </h4>
                                  <span className="text-lg font-medium text-gray-900 ml-4">
                                    {item.price}
                                  </span>
                                </div>
                                {item.description && (
                                  <p className="text-gray-600 text-sm leading-relaxed">
                                    {item.description}
                                  </p>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuDetails;

import Image from 'next/image';

export default function OpeningHours() {
  const hours = [
    { day: 'Sunday', time: '11:00 am - 9:00 pm' },
    { day: 'Mon - Thu', time: '11:00 am - 10:00 pm' },
    { day: 'Friday', time: '11:00 am - 11:00 pm' },
    { day: 'Saturday', time: '5:00 pm - 11:00 pm' },
  ];

  return (
    <div
      id="hours"
      className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden"
    >
      {/* Hero Image Section */}
      <div className="relative h-64 w-full">
        <Image
          src="/opening.jpg"
          alt="Fresh salad preparation with vegetables"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Opening Hours Content */}
      <div className="p-8">
        <h1 className="text-4xl md:text-5xl font-serif text-center text-gray-800 mb-8">
          Opening Hours
        </h1>

        <div className="space-y-4 mb-8">
          {hours.map((schedule, index) => (
            <div key={index} className="flex justify-between items-center py-2">
              <span className="text-lg text-gray-700 font-medium">
                {schedule.day}
              </span>
              <span className="text-lg text-gray-700">{schedule.time}</span>
            </div>
          ))}
        </div>

        {/* Find Us Button */}
        <div className="text-center">
          <button className="border-2 border-gray-800 px-12 py-3 text-lg font-medium text-gray-800 hover:bg-gray-800 hover:text-white transition-colors duration-200">
            Find Us
          </button>
        </div>
      </div>
    </div>
  );
}

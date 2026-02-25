import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import roomDeluxe from "@/assets/room-deluxe.jpg";
import roomExecutive from "@/assets/room-executive.jpg";
import roomPresidential from "@/assets/room-presidential.jpg";

const rooms = [
  {
    name: "Deluxe Room",
    price: "₹8,500",
    description:
      "Spacious elegance with premium amenities, marble bath, and city views.",
    image: roomDeluxe,
  },
  {
    name: "Executive Suite",
    price: "₹15,000",
    description:
      "A lavish retreat with separate living area and panoramic views.",
    image: roomExecutive,
  },
  {
    name: "Presidential Suite",
    price: "₹35,000",
    description:
      "The pinnacle of luxury — private dining and royal opulence.",
    image: roomPresidential,
  },
];

const FeaturedRooms = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12"
          }`}
        >
          <p className="uppercase tracking-[0.4em] text-blue-400 mb-4">
            Accommodations
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Luxurious{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Rooms & Suites
            </span>
          </h2>

          <div className="w-16 h-1 bg-blue-500 mx-auto mb-6 rounded-full" />

          <p className="text-gray-400 max-w-2xl mx-auto">
            Each room is a sanctuary designed for discerning travelers who expect nothing but the finest.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {rooms.map((room, index) => (
            <div
              key={room.name}
              className={`bg-white/5 border border-blue-500/20 rounded-xl overflow-hidden transition-all duration-700 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-16"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Image */}
              <div className="h-64 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-semibold text-white">
                    {room.name}
                  </h3>
                  <span className="text-blue-400 text-lg">
                    {room.price}
                  </span>
                </div>

                <p className="text-sm text-gray-400 mb-1">per night</p>

                <p className="text-sm text-gray-300 mt-3 leading-relaxed">
                  {room.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div
          className={`text-center mt-16 transition-all duration-1000 ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12"
          }`}
        >
          <Link
            to="/rooms"
            className="inline-block px-10 py-3 border border-blue-500 text-blue-400 uppercase tracking-widest text-sm rounded-md hover:bg-blue-600 hover:text-white transition-all duration-300"
          >
            View All Rooms
          </Link>
        </div>

      </div>
    </section>
  );
};

export default FeaturedRooms;
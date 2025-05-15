import React, { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const NewArrivals = () => {
  const scrollRef = useRef(null);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);

  const newArrivals = [
    {
      _id: "1",
      name: "Stylish jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=1",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "2",
      name: "Stylish jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=2",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "3",
      name: "Stylish jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=3",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "4",
      name: "Stylish jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=4",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "5",
      name: "Stylish jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=5",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "6",
      name: "Stylish jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=6",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "7",
      name: "Stylish jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=7",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "8",
      name: "Stylish jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=8",
          altText: "Stylish Jacket",
        },
      ],
    },
  ];

  const scroll = (direction) => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    const scrollAmount = container.clientWidth * 0.8; // Scroll 80% of container width

    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const updateScrollButtons = () => {
    const container = scrollRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;
    const isAtStart = scrollLeft <= 0;
    const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 1; // -1 to account for rounding errors

    setCanScrollLeft(!isAtStart);
    setCanScrollRight(!isAtEnd);
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    // Initial check
    updateScrollButtons();

    // Add event listeners
    container.addEventListener("scroll", updateScrollButtons);
    window.addEventListener("resize", updateScrollButtons);

    // Cleanup
    return () => {
      container.removeEventListener("scroll", updateScrollButtons);
      window.removeEventListener("resize", updateScrollButtons);
    };
  }, []);

  return (
    <section className="relative py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Explore New Arrivals</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover the latest styles straight off the runway, freshly added to
            keep your wardrobe on the cutting edge of fashion.
          </p>
        </div>

        <div className="relative group">
          {/* Desktop Scroll Buttons */}
          <div className="hidden sm:block">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg hover:bg-gray-100 transition-all transform -translate-x-6
                                ${
                                  canScrollLeft
                                    ? "opacity-100 cursor-pointer"
                                    : "opacity-0 cursor-default"
                                } group-hover:opacity-100`}
              aria-label="Scroll left"
            >
              <FiChevronLeft className="text-2xl text-gray-700" />
            </button>

            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg hover:bg-gray-100 transition-all transform translate-x-6
                                ${
                                  canScrollRight
                                    ? "opacity-100 cursor-pointer"
                                    : "opacity-0 cursor-default"
                                } group-hover:opacity-100`}
              aria-label="Scroll right"
            >
              <FiChevronRight className="text-2xl text-gray-700" />
            </button>
          </div>

          {/* Mobile Scroll Buttons */}
          <div className="sm:hidden flex justify-center space-x-4 mt-4 mb-6">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md border border-gray-200 transition-opacity
                                ${
                                  canScrollLeft
                                    ? "opacity-100 hover:bg-gray-50"
                                    : "opacity-30 cursor-not-allowed"
                                }`}
              aria-label="Scroll left"
            >
              <FiChevronLeft className="text-xl" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md border border-gray-200 transition-opacity
                                ${
                                  canScrollRight
                                    ? "opacity-100 hover:bg-gray-50"
                                    : "opacity-30 cursor-not-allowed"
                                }`}
              aria-label="Scroll right"
            >
              <FiChevronRight className="text-xl" />
            </button>
          </div>

          {/* Scrollable Content */}
          <div
            ref={scrollRef}
            className="overflow-x-auto flex space-x-6 py-2 px-1 hide-scrollbar"
            style={{ scrollbarWidth: "none" }}
          >
            {newArrivals.map((product) => (
              <div
                key={product._id}
                className="flex-shrink-0 w-64 sm:w-72 md:w-80 relative transition-transform hover:scale-[1.02]"
              >
                <div className="relative rounded-lg overflow-hidden aspect-square">
                  <img
                    src={
                      product.images[0]?.url ||
                      "https://via.placeholder.com/300x300?text=No+Image"
                    }
                    alt={product.images[0]?.altText || product.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <div className="text-white">
                      <h4 className="font-medium text-lg">{product.name}</h4>
                      <p className="mt-1 font-semibold">${product.price}</p>
                    </div>
                  </div>
                </div>
                <Link
                  to={`/product/${product._id}`}
                  className="absolute inset-0"
                  aria-label={`View ${product.name}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>
        {`
                    .hide-scrollbar::-webkit-scrollbar {
                        display: none;
                    }
                `}
      </style>
    </section>
  );
};

export default NewArrivals;

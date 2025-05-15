import React from 'react'
import { HiTruck, HiArrowPath, HiLockClosed, HiStar } from 'react-icons/hi2'

const FeaturesSection = () => {
  const features = [
    {
      icon: <HiTruck className="text-2xl" />,
      title: "Free Shipping",
      description: "On all orders over $100",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      icon: <HiArrowPath className="text-2xl" />,
      title: "Easy Returns",
      description: "30-day hassle-free policy",
      bgColor: "bg-green-50",
      iconColor: "text-green-600"
    },
    {
      icon: <HiLockClosed className="text-2xl" />,
      title: "Secure Payments",
      description: "256-bit encryption",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600"
    },
    {
      icon: <HiStar className="text-2xl" />,
      title: "Quality Guarantee",
      description: "Premium craftsmanship",
      bgColor: "bg-amber-50",
      iconColor: "text-amber-600"
    }
  ]

  return (
    <section className="py-16 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className={`${feature.bgColor} ${feature.iconColor} p-4 rounded-full mb-4 transition-all duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-sm md:text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Optional decorative divider */}
        <div className="mt-16 pt-8 border-t border-gray-100 text-center">
          <p className="text-gray-400 text-sm">
            Trusted by thousands of happy customers worldwide
          </p>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner';
import ProductGrid from './ProductGrid';

const selectedProduct = {
    name: "Stylish Jacket",
    price: 120,
    originalPrice: 150,
    description: "This is a stylish Jacket perfect for any occasion",
    brand: "FashionBrand",
    material: "Leather",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Red", "Black"],
    images: [
        {
            url: "https://picsum.photos/500/500?random=1",
            altText: "Front view of jacket"
        },
        {
            url: "https://picsum.photos/500/500?random=2",
            altText: "Side view of jacket"
        },
        {
            url: "https://picsum.photos/500/500?random=3",
            altText: "Back view of jacket"
        },
        {
            url: "https://picsum.photos/500/500?random=4",
            altText: "Detail view of jacket"
        },
    ]
}

const ProductDetails = () => {
    const [mainImage, setMainImage] = useState("");
    const [selectedSize, setSelectedSize] = useState("");
    const [selectedColor, setSelectedColor] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const [activeThumbnailIndex, setActiveThumbnailIndex] = useState(0);

    useEffect(() => {
        if (selectedProduct?.images?.length > 0) {
            setMainImage(selectedProduct.images[0].url);
        }
    }, []);

    const handleThumbnailClick = (imageUrl, index) => {
        setMainImage(imageUrl);
        setActiveThumbnailIndex(index);
    };

    const handleQuantityChange = (action) => {
        if (action === "plus") setQuantity((prev) => prev + 1);
        if (action === "minus" && quantity > 1) setQuantity((prev) => prev - 1);
    };

    const handleAddToCart = () => {
        if (!selectedSize || !selectedColor) {
            toast.error("Please select color and size before adding to cart", {
                duration: 1000,
            });
            return;
        }
        setIsButtonDisabled(true);

        setTimeout(() => {
            toast.success("Product added to cart!", {
                duration: 1000
            });
            setIsButtonDisabled(false);
        }, 500);
    };

    const similarProduct=[
        {
            _id:1,
            name:"Product 1",
            price:100,
            images:[{url:"https://picsum.photos/500/500?random=1"}]

        },
        {
            _id:2,
            name:"Product 2",
            price:100,
            images:[{url:"https://picsum.photos/500/500?random=2"}]

        },
        {
            _id:3,
            name:"Product 3",
            price:100,
            images:[{url:"https://picsum.photos/500/500?random=3"}]

        },
        {
            _id:4,
            name:"Product 4",
            price:100,
            images:[{url:"https://picsum.photos/500/500?random=4"}]

        },
       
    ]

    return (
        <div className='p-6'>
            <div className='max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-sm'>
                <div className='flex flex-col md:flex-row gap-8'>
                    {/* Left thumbnails (desktop) */}
                    <div className='hidden md:flex flex-col space-y-4'>
                        {selectedProduct.images.map((image, index) => (
                            <div 
                                key={index}
                                className={`relative w-20 h-20 rounded-lg cursor-pointer border-2 transition-all duration-200
                                    ${activeThumbnailIndex === index 
                                        ? "border-black scale-105 shadow-md" 
                                        : "border-gray-200 hover:border-gray-400 hover:scale-105"}`}
                                onClick={() => handleThumbnailClick(image.url, index)}
                            >
                                <img
                                    src={image.url}
                                    alt={image.altText || `thumbnail ${index}`}
                                    className='w-full h-full object-cover rounded-lg'
                                />
                                {activeThumbnailIndex === index && (
                                    <div className='absolute inset-0 bg-black bg-opacity-20 rounded-lg' />
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Main Image */}
                    <div className='md:w-1/2'>
                        <div className='mb-4 rounded-lg overflow-hidden'>
                            <img
                                src={mainImage}
                                alt="Main Product"
                                className='w-full h-auto object-cover rounded-lg transition-opacity duration-300'
                                loading='eager'
                            />
                        </div>

                        {/* Mobile thumbnails */}
                        <div className='md:hidden flex overflow-x-auto pb-2 space-x-3 -mx-2 px-2'>
                            {selectedProduct.images.map((image, index) => (
                                <div
                                    key={index}
                                    className={`flex-shrink-0 w-16 h-16 rounded-lg cursor-pointer border-2 transition-all
                                        ${activeThumbnailIndex === index 
                                            ? "border-black scale-105" 
                                            : "border-gray-200 hover:border-gray-400"}`}
                                    onClick={() => handleThumbnailClick(image.url, index)}
                                >
                                    <img
                                        src={image.url}
                                        alt={image.altText || `thumbnail ${index}`}
                                        className='w-full h-full object-cover rounded-lg'
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Product Info */}
                    <div className='md:w-1/2'>
                        <h1 className='text-2xl md:text-3xl font-semibold mb-2'>
                            {selectedProduct.name}
                        </h1>
                        
                        <div className='flex items-center gap-3 mb-4'>
                            {selectedProduct.originalPrice && (
                                <p className='text-lg text-gray-500 line-through'>
                                    ${selectedProduct.originalPrice}
                                </p>
                            )}
                            <p className='text-xl font-medium text-gray-900'>
                                ${selectedProduct.price}
                            </p>
                        </div>
                        
                        <p className='text-gray-600 mb-6'>
                            {selectedProduct.description}
                        </p>
                        
                        {/* Color selection */}
                        <div className='mb-6'>
                            <p className='text-gray-700 font-medium mb-2'>Color:</p>
                            <div className='flex gap-3'>
                                {selectedProduct.colors.map((color) => (
                                    <button
                                        key={color}
                                        onClick={() => setSelectedColor(color)}
                                        className={`w-10 h-10 rounded-full border-2 transition-all
                                            ${selectedColor === color 
                                                ? "border-black scale-110 shadow-md" 
                                                : "border-gray-200 hover:border-gray-400"}`}
                                        style={{ backgroundColor: color.toLowerCase() }}
                                        aria-label={`Select color ${color}`}
                                    />
                                ))}
                            </div>
                        </div>
                        
                        {/* Size selection */}
                        <div className='mb-6'>
                            <p className='text-gray-700 font-medium mb-2'>Size:</p>
                            <div className='flex flex-wrap gap-2'>
                                {selectedProduct.sizes.map((size) => (
                                    <button 
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`px-4 py-2 rounded border transition-all
                                            ${selectedSize === size 
                                                ? "bg-black text-white border-black" 
                                                : "bg-white text-gray-800 border-gray-300 hover:border-gray-500"}`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>
                        
                        {/* Quantity selector */}
                        <div className='mb-8'>
                            <p className='text-gray-700 font-medium mb-2'>Quantity:</p>
                            <div className='flex items-center gap-4'>
                                <button 
                                    onClick={() => handleQuantityChange("minus")}
                                    className='w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full text-lg hover:bg-gray-200 transition-colors'
                                    disabled={quantity <= 1}
                                >
                                    -
                                </button>
                                <span className='text-lg w-8 text-center'>{quantity}</span>
                                <button 
                                    onClick={() => handleQuantityChange("plus")}
                                    className='w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full text-lg hover:bg-gray-200 transition-colors'
                                >
                                    +
                                </button>
                            </div>
                        </div>
                        
                        {/* Add to cart button */}
                        <button
                            onClick={handleAddToCart}
                            disabled={isButtonDisabled}
                            className={`w-full py-3 px-6 rounded-lg font-medium transition-all
                                ${isButtonDisabled
                                    ? "bg-gray-400 cursor-not-allowed"
                                    : "bg-black text-white hover:bg-gray-800 shadow-md"}`}
                        >
                            {isButtonDisabled ? "Adding..." : "ADD TO CART"}
                        </button>
                        
                        {/* Product details */}
                        <div className='mt-10'>
                            <h3 className='text-xl font-bold mb-4'>Product Details</h3>
                            <div className='space-y-3 text-gray-600'>
                                <div className='flex'>
                                    <span className='w-24 font-medium text-gray-700'>Brand</span>
                                    <span>{selectedProduct.brand}</span>
                                </div>
                                <div className='flex'>
                                    <span className='w-24 font-medium text-gray-700'>Material</span>
                                    <span>{selectedProduct.material}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-20'>
                    <h2 className='text-2xl text-center font-medium mb-4'>
                        You May Also Like
                    </h2>
                    <ProductGrid products={similarProduct}/>

                </div>
        </div>
    );
};

export default ProductDetails;
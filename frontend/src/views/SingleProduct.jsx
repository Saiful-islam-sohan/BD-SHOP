import { useLocation } from "react-router-dom";
import PageNavigation from "../pages/PageNavigation";
import RatingStars from "../pages/RatingStars";

const SingleProduct = () => {
  const { state } = useLocation();
  const product = state?.product;

  if (!product) return <div>No product data available</div>;

  const { id, title, price, description, category, image, rating } = product;

  return (
    <div className="container px-4 py-8 mx-auto">
      {/* Page Navigation */}
      <PageNavigation title={title} />

      {/* Product Content */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Product Image */}
        <div className="flex items-center justify-center">
          <img
            src={image}
            alt={title}
            className="object-contain rounded-lg shadow-lg w-72 h-72 md:w-96 md:h-96"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-center space-y-4">
          {/* Title */}
          <h1 className="text-2xl font-bold text-gray-800 md:text-3xl">{title}</h1>

          
          {/* <div className="flex items-center space-x-2 text-yellow-500">
            <span className="text-lg font-medium">{rating.rate} ★</span>
            <span className="text-sm text-gray-500">({rating.count} reviews)</span>
          </div> */}
           <RatingStars rating={rating?.rate} />

          {/* Price */}
          <p className="text-xl font-semibold text-gray-900">${price.toFixed(2)}</p>

          {/* Description */}
          <p className="leading-relaxed text-gray-600">{description}</p>

          {/* Category */}
          <p className="text-sm text-gray-500 uppercase">Category: {category}</p>

          {/* Brand (Placeholder for now) */}
          <p className="text-sm text-gray-500 uppercase">Brand: {title}</p>

          {/* Add to Cart Button */}
          <button className="px-6 py-3 mt-4 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;

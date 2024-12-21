import { useLocation } from "react-router-dom";
import PageNavigation from "../pages/PageNavigation";
import RatingStars from "../pages/RatingStars";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../slice/CartCountSlice";

const SingleProduct = () => {
  const dispatch = useDispatch();

  //
  const cartCount = useSelector((state) => state.cartCount.value);

  const { state } = useLocation();
  const product = state?.product;

  if (!product) 
    return (
      <div>
        <p>No product data available</p>
        <a href="/" className="text-blue-600 hover:underline">Go back to homepage</a>
      </div>
    );

  const { title, price, description, category, image, rating } = product;
  const { rate = 0, count = 0 } = rating || {}; 
  const displayPrice = price ? price.toFixed(2) : "0.00";

  return (
    <div className="container px-4 py-8 mx-auto">
     
      <PageNavigation title={title} />

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      
        <div className="flex items-center justify-center">
          <img
            src={image}
            alt={title}
            className="object-contain rounded-lg shadow-lg w-72 h-72 md:w-96 md:h-96"
          />
        </div>

       
        <div className="flex flex-col justify-center space-y-4">
     
          <h1 className="text-2xl font-bold text-gray-800 md:text-3xl">{title}</h1>

      
          <div className="flex items-center space-x-2">
            <RatingStars rating={rate} />
            <span className="text-sm text-gray-500">({count} reviews)</span>
          </div>

         
          <p className="text-xl font-semibold text-gray-900">${displayPrice}</p>

       
          <p className="leading-relaxed text-gray-600">{description}</p>

          
          <p className="text-sm text-gray-500 uppercase">Category: {category}</p>
          <p className="text-sm text-gray-500 uppercase">Brand: {title}</p>

          
          <div className="flex items-center space-x-2">
            <button
              aria-label="Increase quantity"
              className="px-4 py-2 bg-gray-200 rounded"
              onClick={() => dispatch(increment())} 
            >
              +
            </button>
            <span className="text-lg font-semibold">{cartCount}</span> {/* Dynamic value */}
            <button
              aria-label="Decrease quantity"
              className="px-4 py-2 bg-gray-200 rounded"
              onClick={() => dispatch(decrement())} 
            >
              -
            </button>
          </div>

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

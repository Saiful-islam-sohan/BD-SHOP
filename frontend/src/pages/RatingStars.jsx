const RatingStars = ({ rating = 0 }) => {
    const rate = rating; 
    
  
    const maxStars = 5; 
  
    
    const safeRating = Math.max(0, Math.min(maxStars, rate)); 
    const filledStars = Math.floor(safeRating); 
    const halfStar = safeRating % 1 >= 0.5; 
    const emptyStars = maxStars - filledStars - (halfStar ? 1 : 0);
  
    return (
      <div className="flex items-center space-x-1">
        
        {Array.from({ length: filledStars }).map((_, index) => (
          <span key={`filled-${index}`} className="text-lg text-yellow-500">★</span>
        ))}
  
      
        {halfStar && <span className="text-lg text-yellow-500">⯨</span>}
  
       
        {Array.from({ length: emptyStars }).map((_, index) => (
          <span key={`empty-${index}`} className="text-lg text-gray-300">★</span>
        ))}
      </div>
    );
  };
  
  export default RatingStars;
  
  
import { Star } from 'lucide-react';

const RatingStars = ({ rating, size = 16 }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} size={size} fill="currentColor" className="text-yellow-400" />
      ))}
      {hasHalfStar && (
        <div className="relative" style={{ width: size, height: size }}>
          <Star size={size} fill="none" className="text-yellow-400" />
          <div 
            className="absolute top-0 left-0 overflow-hidden"
            style={{ width: '50%', height: size }}
          >
            <Star size={size} fill="currentColor" className="text-yellow-400" />
          </div>
        </div>
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <Star key={`empty-${i}`} size={size} fill="none" className="text-yellow-400" />
      ))}
    </div>
  );
};

export default RatingStars;
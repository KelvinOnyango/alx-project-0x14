import React from "react";

interface MovieCardProps {
  title: string;
  posterPath: string;
  releaseDate: string;
  rating: number;
  onClick?: () => void;
}

const MovieCard: React.FC<MovieCardProps> = ({
  title,
  posterPath,
  releaseDate,
  rating,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
    >
      <img src={posterPath} alt={title} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h3 className="font-bold text-lg mb-1 truncate">{title}</h3>
        <div className="flex justify-between items-center text-sm text-gray-600">
          <span>{new Date(releaseDate).getFullYear()}</span>
          <span className="flex items-center">⭐ {rating.toFixed(1)}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

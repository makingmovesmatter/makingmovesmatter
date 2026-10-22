'use client';

import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa6';

// Google profile avatar color palette
const AVATAR_COLORS = [
  '#5E35B1', // Purple (exact match to Rachelle Greene in screenshot)
  '#1E88E5', // Blue
  '#00897B', // Teal
  '#E53935', // Red
  '#D81B60', // Pink
  '#3949AB', // Indigo
  '#FB8C00', // Amber
  '#00ACC1', // Cyan
  '#43A047', // Green
];

function getAvatarColor(name = '') {
  if (!name) return AVATAR_COLORS[0];
  if (name.toLowerCase().includes('rachelle')) return '#5E35B1';
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % AVATAR_COLORS.length;
  return AVATAR_COLORS[index];
}

// Official 4-color Google 'G' Icon
export const GoogleGIcon = ({ className = 'w-6 h-6' }) => (
  <svg
    className={`${className} shrink-0`}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Google"
  >
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      fill="#EA4335"
    />
  </svg>
);

// Blue scalloped verified badge with crisp white checkmark
export const VerifiedBadge = ({ className = 'w-[18px] h-[18px]' }) => (
  <svg
    viewBox="0 0 24 24"
    className={`${className} shrink-0 inline-block align-middle`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Verified Review"
  >
    <path
      d="m23 12-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.69 3.1 5.5l.34 3.7L1 12l2.44 2.79-.34 3.7 3.61.82L8.6 22.5l3.4-1.47 3.4 1.46 1.89-3.19 3.61-.82-.34-3.69L23 12z"
      fill="#1A73E8"
    />
    <path
      d="M10.09 16.72l-3.8-3.81 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48-7.33 7.35z"
      fill="#FFFFFF"
    />
  </svg>
);

const GoogleReviewCard = ({
  review,
  author_name,
  time,
  rating = 5,
  text,
  avatar_url,
  avatar_color,
  isVerified = true,
  truncateLength = 135,
  className = '',
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Normalize data whether passed via review object or flat props
  const authorName = review?.author_name || review?.authorName || author_name || 'Verified Customer';
  const displayTime = review?.time || review?.date || time || 'Recently';
  const starRating = review?.rating !== undefined ? review?.rating : rating;
  const reviewText = review?.text || review?.comment || review?.content || text || '';
  const avatarImage = review?.avatar_url || review?.avatar || avatar_url;
  const initial = authorName.trim().charAt(0).toUpperCase() || 'U';
  const bgColor = review?.avatar_color || avatar_color || getAvatarColor(authorName);
  const showVerified = review?.isVerified !== undefined ? review.isVerified : isVerified;

  const isLong = reviewText.length > truncateLength;
  
  const getTruncatedText = (str, len) => {
    if (!str || str.length <= len) return str;
    const cut = str.slice(0, len);
    const lastSpace = cut.lastIndexOf(' ');
    const cleanCut = lastSpace > len * 0.7 ? cut.slice(0, lastSpace) : cut;
    return cleanCut.replace(/[,.\s]+$/, '') + '...';
  };

  const displayText = !isLong || isExpanded
    ? reviewText
    : getTruncatedText(reviewText, truncateLength);

  return (
    <div
      className={`bg-white rounded-2xl p-6 md:p-7 border border-[#E5E7EB]/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col justify-between h-full select-text ${className}`}
    >
      <div>
        {/* Top Header: Avatar + Name & Time (Left) | Google Logo (Right) */}
        <div className="flex items-start justify-between gap-3 mb-3.5">
          <div className="flex items-center gap-3.5 min-w-0">
            {/* Avatar */}
            {avatarImage ? (
              <img
                src={avatarImage}
                alt={authorName}
                className="w-12 h-12 rounded-full object-cover shrink-0"
              />
            ) : (
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl shrink-0 shadow-sm"
                style={{ backgroundColor: bgColor }}
              >
                {initial}
              </div>
            )}

            {/* Author Name & Relative Date */}
            <div className="min-w-0 flex flex-col">
              <h3 className="font-bold text-[#1E293B] text-[16px] md:text-[17px] leading-snug truncate">
                {authorName}
              </h3>
              <span className="text-[13px] md:text-[14px] text-gray-500 font-normal leading-tight mt-0.5">
                {displayTime}
              </span>
            </div>
          </div>

          {/* Google Logo */}
          <div className="shrink-0 pt-0.5">
            <GoogleGIcon className="w-6 h-6 md:w-7 md:h-7" />
          </div>
        </div>

        {/* Rating Stars & Blue Verified Badge Row */}
        <div className="flex items-center gap-1.5 mb-3.5">
          <div className="flex items-center gap-[2.5px] text-[#FBBC04]">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={`w-[17px] h-[17px] ${
                  i < starRating ? 'text-[#FBBC04] fill-current' : 'text-gray-200'
                }`}
              />
            ))}
          </div>
          {showVerified && (
            <div className="ml-1 flex items-center" title="Verified Google Review">
              <VerifiedBadge className="w-[18px] h-[18px]" />
            </div>
          )}
        </div>

        {/* Review Text */}
        <p className="text-[#334155] text-[15px] leading-[1.6] font-normal break-words">
          {displayText}
        </p>
      </div>

      {/* Read more / Read less button */}
      {isLong && (
        <div className="mt-3 pt-1">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              setIsExpanded(!isExpanded);
            }}
            className="text-[14px] text-gray-500 hover:text-gray-800 font-medium transition-colors cursor-pointer select-none focus:outline-none"
          >
            {isExpanded ? 'Read less' : 'Read more'}
          </button>
        </div>
      )}
    </div>
  );
};

export default GoogleReviewCard;

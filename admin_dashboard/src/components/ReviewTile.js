import React from 'react';

const ReviewTile = ({ review }) => {
  return (
    <div style={{ background: '#fff', padding: 12, marginBottom: 8, borderRadius: 8 }}>
      <strong>{review.user}</strong>: {review.comment} ({review.rating}/5)
    </div>
  );
};

export default ReviewTile;

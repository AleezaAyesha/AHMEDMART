import React from 'react';

const StatTile = ({ title, value }) => {
  return (
    <div style={{ background: '#fff', padding: 20, borderRadius: 12, flex: 1 }}>
      <h4>{title}</h4>
      <h2>{value}</h2>
    </div>
  );
};

export default StatTile;

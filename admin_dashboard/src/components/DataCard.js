import React from 'react';

const DataCard = ({ title }) => {
  return (
    <div style={{ background: '#fff', padding: 20, borderRadius: 12 }}>
      <h3>{title}</h3>
      <p>Data table or list goes here.</p>
    </div>
  );
};

export default DataCard;

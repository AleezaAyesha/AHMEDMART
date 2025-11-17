import React from 'react';

const ZoneSelector = ({ zones, selected, onChange }) => {
  return (
    <select value={selected} onChange={(e) => onChange(e.target.value)}>
      {zones.map((zone) => (
        <option key={zone.id} value={zone.id}>{zone.name}</option>
      ))}
    </select>
  );
};

export default ZoneSelector;

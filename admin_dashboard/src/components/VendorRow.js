import React from 'react';

const VendorRow = ({ vendor }) => {
  return (
    <tr>
      <td>{vendor.id}</td>
      <td>{vendor.name}</td>
      <td>{vendor.email}</td>
      <td>{vendor.zone}</td>
    </tr>
  );
};

export default VendorRow;

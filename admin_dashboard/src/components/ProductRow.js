import React from 'react';

const ProductRow = ({ product }) => {
  return (
    <tr>
      <td>{product.id}</td>
      <td>{product.name}</td>
      <td>${product.price.toFixed(2)}</td>
      <td>{product.vendor}</td>
    </tr>
  );
};

export default ProductRow;

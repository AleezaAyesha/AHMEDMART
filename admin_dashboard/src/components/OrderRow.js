import React from 'react';
import { formatCurrency, formatDate } from '../utils/formatters';

const OrderRow = ({ order }) => {
  return (
    <tr>
      <td>{order.id}</td>
      <td>{order.customer}</td>
      <td>{formatCurrency(order.amount)}</td>
      <td>{formatDate(order.date)}</td>
      <td>{order.status}</td>
    </tr>
  );
};

export default OrderRow;

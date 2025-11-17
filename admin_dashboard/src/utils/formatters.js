export const formatCurrency = (amount) => {
  return `$${amount.toFixed(2)}`;
};

export const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString() + " " + date.toLocaleTimeString();
};

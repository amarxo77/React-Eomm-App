export const formatPrice = (price) => {
  const userLocale = navigator.language;
  return new Intl.NumberFormat(userLocale, {
    style: 'currency',
    currency: 'INR',
  }).format(price / 100);
};

export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type]);
  if(type === 'colors') {
    unique = unique.flat();
  }
  return ['all', ...new Set(unique)];
};

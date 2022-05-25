export const elementMultiplier = (icon, multiplier) => {
  return [...Array(multiplier)].map((index) => <span key={index}>{icon}</span>);
};


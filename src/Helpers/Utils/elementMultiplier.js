export const elementMultiplier = (icon, multiplier) => {
  return [...Array(multiplier)].map((item, index) => (
    <span key={index}>{icon}</span>
  ));
};


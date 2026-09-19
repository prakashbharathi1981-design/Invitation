const isTouch = () =>
  typeof window !== 'undefined' &&
  ('ontouchstart' in window || navigator.maxTouchPoints > 0);

// Strips blur filter on mobile (GPU-heavy on Android)
export const noBlur = (initial) => {
  if (!isTouch()) return initial;
  const { filter, ...rest } = initial;
  return rest;
};

// Reliable whileInView viewport for Android
export const vp = { once: true, margin: '-60px' };

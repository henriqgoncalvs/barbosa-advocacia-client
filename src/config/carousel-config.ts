import breakpoints from '@styles/tokens/breakpoints';

export default {
  desktop: {
    breakpoint: { max: 4000, min: Number(breakpoints.lg) },
    items: 3,
  },
  tablet: {
    breakpoint: { max: Number(breakpoints.lg), min: Number(breakpoints.sm) },
    items: 2,
  },
  mobile: {
    breakpoint: { max: Number(breakpoints.sm), min: 0 },
    items: 1,
  },
};

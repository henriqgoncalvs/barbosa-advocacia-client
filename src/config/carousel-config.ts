import breakpoints from '@styles/tokens/breakpoints';

export default {
  desktop: {
    breakpoint: { max: 4000, min: Number(breakpoints.lg.slice(0, -2)) },
    items: 3,
  },
  tablet: {
    breakpoint: {
      max: Number(breakpoints.lg.slice(0, -2)),
      min: Number(breakpoints.sm.slice(0, -2)),
    },
    items: 2,
  },
  mobile: {
    breakpoint: { max: Number(breakpoints.sm.slice(0, -2)), min: 0 },
    items: 1,
  },
};

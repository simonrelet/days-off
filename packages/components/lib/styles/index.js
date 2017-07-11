import color from 'color';

function alpha(a) {
  return color().alpha(a).string();
}

export const depths = {
  level1: {
    boxShadow: [
      { y: 1, blur: 6, color: alpha(0.12) },
      { y: 1, blur: 4, color: alpha(0.12) },
    ],
  },

  level2: {
    boxShadow: [
      { y: 3, blur: 10, color: alpha(0.16) },
      { y: 3, blur: 10, color: alpha(0.23) },
    ],
  },

  level3: {
    boxShadow: [
      { y: 10, blur: 30, color: alpha(0.19) },
      { y: 6, blur: 10, color: alpha(0.23) },
    ],
  },

  level4: {
    boxShadow: [
      { y: 14, blur: 45, color: alpha(0.25) },
      { y: 10, blur: 18, color: alpha(0.22) },
    ],
  },

  level5: {
    boxShadow: [
      { y: 19, blur: 60, color: alpha(0.3) },
      { y: 15, blur: 20, color: alpha(0.22) },
    ],
  },
};

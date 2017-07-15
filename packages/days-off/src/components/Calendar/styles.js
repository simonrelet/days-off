import { colors } from '@marv/components/styles';

const tile = {
  alignItems: 'center',
  display: 'flex',
  fontSize: '1.4rem',
  justifyContent: 'center',
};

export const calendar = {
  calendar: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  month: {
    color: colors.grey.c600,
    fontSize: '1.8rem',
    textAlign: 'center',
    padding: '1rem',
  },
  grid: {
    display: 'grid',
    gridTemplate: 'repeat(7, 2.8rem) / repeat(14, 1.4rem)',
  },
};

export const weekDay = {
  weekDay: {
    ...tile,
    color: colors.grey.c500,
  },
};

export const day = {
  day: {
    ...tile,
    cursor: 'pointer',
    pointerEvents: 'none',
  },
  disabled: {
    cursor: 'initial',
    pointerEvents: 'initial',
    color: colors.grey.c500,
  },
  today: {
    fontWeight: 'bold',
    color: colors.blue.c500,
  },
};

export const halfDay = {
  halfDay: {
    ...tile,
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: colors.grey.c200,
    },
  },
  selected: {
    backgroundColor: colors.blue.c100,
    '&:hover': {
      backgroundColor: colors.blue.c200,
    },
  },
};

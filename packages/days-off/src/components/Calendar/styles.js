import { colors } from '@marv/components/styles';

const tile = {
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  userSelect: 'none',
  fontSize: '1.4rem',
};

const tileSize = 28;
const tileSizeREM = tileSize / 10;

const calendar = {
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
    gridTemplate: `repeat(7, ${tileSizeREM}rem) / repeat(7, ${tileSizeREM}rem)`,
  },
};

const weekDay = {
  weekDay: {
    ...tile,
    color: colors.grey.c500,
  },
};

const day = {
  day: {
    ...tile,
    cursor: 'pointer',
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

function getHalfDayColor(selected, hover) {
  if (selected) {
    return hover ? colors.blue.c200 : colors.blue.c100;
  }
  return hover ? colors.grey.c200 : 'transparent';
}

export default {
  tileSize,
  tileSizeREM,
  calendar,
  weekDay,
  day,
  getHalfDayColor,
};

import { colors } from '@marv/components/styles';

export const menuStyles = {
  menu: {
    display: 'flex',
    flexDirection: 'column',
    padding: '1rem',
  },
};

export const itemStyles = {
  item: {
    color: colors.grey.c600,
    '&:not(:first-child)': {
      marginTop: '3rem',
    },
  },
  title: {
    fontSize: '1.8rem',
    marginBottom: '1.2rem',
  },
  line: {
    fontSize: '1.4rem',
    display: 'flex',
    padding: ['.3rem', '.6rem'],
  },
  lineTotal: {
    borderTop: {
      width: '1px',
      style: 'solid',
      color: colors.grey.c400,
    },
    marginTop: '.3rem',
    paddingTop: '.6rem',
  },
  label: {
    marginRight: 'auto',
  },
  value: {
    color: colors.grey.c900,
  },
  valueRef: {
    marginLeft: '.5rem',
  },
};

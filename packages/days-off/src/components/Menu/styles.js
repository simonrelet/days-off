import { colors, transitionAll } from '@marv/components/styles';

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
    '&:hover $titleToolbar': {
      opacity: '1',
    },
  },
  title: {
    display: 'flex',
    fontSize: '1.8rem',
    marginBottom: '1.2rem',
  },
  titleToolbar: {
    opacity: '0',
    marginLeft: 'auto',
  },
  titleButton: {
    alignItems: 'center',
    backgroundColor: colors.grey.c300,
    border: 'none',
    borderRadius: '50%',
    cursor: 'pointer',
    color: colors.grey.c900,
    display: 'flex',
    fontSize: '1.2rem',
    height: '2rem',
    justifyContent: 'center',
    outline: 'none',
    transition: transitionAll,
    width: '2rem',
    '&:hover, &:focus': {
      backgroundColor: colors.red.a200,
      color: colors.white,
    },
  },
  icon: {
    height: '1.2rem',
    width: '1.2rem',
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

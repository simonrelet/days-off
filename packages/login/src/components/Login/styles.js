import { depths, colors, transitionAll } from '@marv/components/styles';

export default {
  login: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: '22rem',
  },
  input: {
    backgroundColor: colors.grey.c200,
    border: 'none',
    borderRadius: '.2rem',
    fontSize: 'inherit',
    marginBottom: '1rem',
    outline: 'none',
    padding: ['.6rem', '1rem'],
    textAlign: 'center',
    '&::placeholder': {
      color: colors.grey.c500,
    },
    '&:hover, &:focus': {
      backgroundColor: colors.grey.c300,
    },
  },
  button: {
    ...depths.level1,
    backgroundColor: '#2196f3',
    border: 'none',
    color: 'white',
    cursor: 'pointer',
    fontSize: 'inherit',
    outline: 'none',
    padding: ['.6rem', '1rem'],
    transition: transitionAll,
    '&:hover:not(:disabled), &:focus': {
      ...depths.level2,
      backgroundColor: '#1e88e5',
    },
    '&:disabled': {
      boxShadow: 'none',
      cursor: 'initial',
      opacity: 0.5,
    },
  },
};

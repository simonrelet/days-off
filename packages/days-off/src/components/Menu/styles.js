export const menuStyles = {
  menu: {
    backgroundColor: '#eee',
    display: 'flex',
    flexDirection: 'column',
    padding: '1rem',
  },
};

export const itemStyles = {
  item: {
    color: '#757575',
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
      color: '#c8c8c8',
    },
    marginTop: '.3rem',
    paddingTop: '.6rem',
  },
  label: {
    marginRight: 'auto',
  },
  value: {
    color: '#333',
  },
  valueRef: {
    color: '#9e9e9e',
    marginLeft: '.5rem',
  },
};

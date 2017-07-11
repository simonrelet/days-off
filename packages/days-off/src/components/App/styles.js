import { depths } from '@marv/components/styles';

const menuStyles = {
  alignItems: 'center',
  color: 'white',
  display: 'flex',
  flex: 'none',
  fontSize: '2rem',
  padding: ['1rem', '2rem'],
};

export default {
  app: {
    display: 'flex',
    height: '100%',
  },
  menu: {
    ...depths.level1,
    display: 'flex',
    flex: 'none',
    flexDirection: 'column',
    width: '25rem',
    zIndex: '1',
  },
  menuHeader: {
    ...menuStyles,
    backgroundColor: '#7cb342',
    justifyContent: 'center',
  },
  menuContent: {
    flex: '1',
  },
  menuFooter: {
    backgroundColor: '#eee',
    color: '#aaa',
    flex: 'none',
    fontSize: '1.2rem',
    padding: ['1rem', '1.6rem'],
    textAlign: 'center',
  },
  body: {
    display: 'flex',
    flex: '1',
    flexDirection: 'column',
  },
  bodyHeader: {
    ...menuStyles,
    backgroundColor: '#8bc34a',
    justifyContent: 'flex-end',
  },
  bodyContent: {
    flex: '1',
    overflow: 'auto',
  },
};

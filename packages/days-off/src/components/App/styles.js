import { depths, colors } from '@marv/components/styles';

const menuStyles = {
  alignItems: 'center',
  color: colors.white,
  display: 'flex',
  flex: 'none',
  fontSize: '2rem',
  padding: [0, '2rem'],
  height: '5rem',
};

export default {
  app: {
    display: 'flex',
    height: '100%',
  },
  menu: {
    ...depths.level1,
    backgroundColor: colors.grey.c100,
    display: 'flex',
    flex: 'none',
    flexDirection: 'column',
    width: '25rem',
    zIndex: '1',
  },
  menuHeader: {
    ...menuStyles,
    backgroundColor: colors.blue.c700,
    justifyContent: 'center',
  },
  menuContent: {
    flex: '1',
  },
  menuFooter: {
    color: colors.grey.c400,
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
    backgroundColor: colors.blue.c500,
    justifyContent: 'flex-end',
  },
  bodyContent: {
    flex: '1',
    overflow: 'auto',
  },
  icon: {
    height: '3rem',
    width: '3rem',
    marginRight: '1rem',
    fill: 'currentColor',
  },
};

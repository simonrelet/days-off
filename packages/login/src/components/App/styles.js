import { colors } from '@marv/components/styles';

export default {
  app: {
    backgroundColor: colors.grey.c100,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  content: {
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    overflow: 'auto',
  },
  footer: {
    color: colors.grey.c400,
    flex: 'none',
    fontSize: '1.2rem',
    padding: ['1rem', '1.6rem'],
    textAlign: 'center',
  },
  box: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '2.6rem',
  },
  icon: {
    height: '10rem',
    width: '10rem',
    marginBottom: '2.6rem',
  },
};

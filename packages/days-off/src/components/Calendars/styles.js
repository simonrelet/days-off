import { depths, colors, transitionAll } from '@marv/components/styles';

const headerButton = {
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  color: colors.grey.c900,
  flex: 'none',
  fontSize: 'inherit',
  outline: 'none',
  padding: ['1rem', '1rem'],
  transition: transitionAll,
  '&:hover': {
    backgroundColor: colors.grey.c300,
  },
};

export default {
  calendars: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  header: {
    ...depths.level1,
    alignItems: 'baseline',
    backgroundColor: colors.grey.c100,
    color: colors.grey.c600,
    display: 'flex',
    flex: 'none',
  },
  content: {
    display: 'flex',
    flex: 1,
    flexWrap: 'wrap',
    overflow: 'auto',
  },
  button: headerButton,
  todayButton: {
    ...headerButton,
    marginLeft: 'auto',
  },
  date: {
    margin: [0, '.5rem'],
  },
  calendar: {
    margin: '2rem',
  },
};

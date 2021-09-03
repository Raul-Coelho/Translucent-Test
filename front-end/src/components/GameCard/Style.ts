import { createStyles, makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    minWidth: 275,
    maxWidth: 345,
    height: 275,
    maxHeight: 300,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 10,
    backgroundColor: '#342E37',
    color: '#FAFFFD',
  },
  pos: {
    marginBottom: 12,
  },
  italicText: {
    fontStyle: 'italic',
  },
  alignStart: {
    textAlign: 'start',
  },
}));

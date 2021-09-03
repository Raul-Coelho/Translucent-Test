import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { url } from 'inspector';

export const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    display: 'flex',
  },
  spacing: {
    marginTop: 10,
    marginBottom: 10,
  },
  formWrapper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(8),
  },
  alignFields: {
    alignItems: 'row',
  },
}));

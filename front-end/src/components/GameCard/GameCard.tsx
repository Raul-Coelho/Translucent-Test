import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import { useStyles } from './Style';

export interface Game {
  id: number,
  title: string,
  year: string,
  console: string,
  completed: boolean,
  dateOfCompletion: string,
  personalNotes: string,
}

export default function GameCard({ game }: { game: Game }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        className={classes.title}
        title="16 years old"
      />
      <CardContent className={classes.alignStart}>
        <Typography variant="h6" component="h2">
          {game.title}
        </Typography>
        <Typography variant="h6" component="h2">
          {game.console}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {game.year}
          {' '}
          -
          {' '}
          {game.completed}

        </Typography>
        <Typography className={classes.italicText} color="textSecondary" variant="body2" component="p">
          Complete in -
          {' '}
          {game.dateOfCompletion}
        </Typography>
        <Typography className={classes.italicText} variant="body2" component="p">
          {game.personalNotes}
        </Typography>
      </CardContent>
    </Card>
  );
}

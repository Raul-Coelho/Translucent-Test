import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import { useStyles } from './Style';
import { Game } from '../../interfaces/GameInterface';

export default function GameCard({ game }: { game: Game }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        className={classes.title}
        title={game.title}
      />
      <CardContent className={classes.alignStart}>
        <Typography variant="h6" component="h2">
          16 years old
        </Typography>
        <Typography variant="h6" component="h2">
          {game.console}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {game.year}
          {' '}
          -
          {' '}
          {game.completed ? 'Completed' : 'Not Complete'}

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

import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import { useStyles } from './Style';
import { Game } from '../../interfaces/GameInterface';

export default function GameCard({ game }: { game: Game }) {
  const classes = useStyles();
  const today = new Date();

  // console.log(today);

  function renderYearsOld(gameYear: Date) {
    const formatedGameYear = new Date(gameYear);
    const yearsOld = (Number(today.getFullYear()) - Number(formatedGameYear.getFullYear()));

    if (yearsOld < 9) {
      return (
        <Typography variant="h6" component="h2">
          {yearsOld}
          {' '}
          year ago
        </Typography>
      );
    }
    return (
      <Typography variant="h6" component="h2">
        {yearsOld}
        {' '}
        years old
      </Typography>
    );
  }

  return (
    <Card className={classes.root}>
      <CardHeader
        className={classes.title}
        title={game.title}
      />
      <CardContent className={classes.alignStart}>
        {renderYearsOld(game.year)}
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
        {game.completed ? `Complete in - ${game.dateOfCompletion}` : 'Not yet finished this game :('}

        <Typography className={classes.italicText} variant="body2">
          {game.personalNotes}
        </Typography>
      </CardContent>
    </Card>
  );
}

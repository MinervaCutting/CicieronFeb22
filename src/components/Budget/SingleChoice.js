import { makeStyles, Typography } from "@material-ui/core";

export default function SingleChoice({ event }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant='subtitle1'>{event}</Typography>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: theme.spacing(-3),
  },
}));

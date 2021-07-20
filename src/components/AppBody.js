import { Paper, makeStyles, Typography } from "@material-ui/core";
import VendorOptionsTab from "../utils/TabPanel";
import Camiral from "../vendors/camiral/Camiral";
import PicassoTour from "../vendors/picasso_tour/PicassoTour";
import Budget from "./Budget/Budget";

export default function AppBody() {
  const classes = useStyles();

  return (
    <Paper elevation={2} className={classes.bodyContainer}>
      <Typography variant='h4'>BigWig Barcelona Tour</Typography>
      <Typography variant='h6'>
        Cutting Edge Events - July 14th, 2021
      </Typography>
      <Camiral />

      <Typography variant='h4' id='picasso_tour'>
        Picasso Private Tour
      </Typography>
      <PicassoTour />
      <Typography variant='h4' id='lunch01'>
        Restaurants
      </Typography>
      <VendorOptionsTab />
      <Budget />
    </Paper>
  );
}

const useStyles = makeStyles((theme) => ({
  bodyContainer: {
    margin: theme.spacing(1),
    padding: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
  },
}));

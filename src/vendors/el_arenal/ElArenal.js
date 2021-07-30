import { makeStyles, Typography, Divider } from "@material-ui/core";
import RestaurantSlider from "../vendorUtils/RestaurantUtils";
import img1 from "./rest1.jpg";
import img2 from "./rest2.jpg";
import img3 from "./rest3.jpg";
import img4 from "./rest4.jpg";
import img5 from "./rest5.jpg";
import img6 from "./rest6.jpg";

let items = [
  {
    caption: "It's right on the beach of Barceloneta",
    photo: img1,
  },
  {
    caption: "Tables are laid out perpendicular to the Sea",
    photo: img2,
  },
  {
    caption: "The tented area can protect during mild bad weather",
    photo: img3,
  },
  {
    caption: "Next to all the trendy clubs",
    photo: img4,
  },
  {
    caption: "The restaurant is only a few steps away from the Port Olimpic",
    photo: img5,
  },
  {
    caption: "There is back up in case of bad weather",
    photo: img6,
  },
];

export default function ElArenal() {
  const classes = useStyles();
  return (
    <div className={classes.root} id='day_two_2'>
      <div>
        <Typography variant='h4'>Restaurant El Arenal</Typography>
        <Typography variant='h6' component='h6' paragraph>
          <strong>El Arenal</strong> is one of the few restaurants in{" "}
          <em>Barcelona</em> that are located just by the beach - near{" "}
          <strong>Port Olímpic</strong> in la <strong>Barceloneta Beach</strong>
          . When we say, by the beach, we mean - almost at the{" "}
          <strong>sand</strong> - El Arenal meaning the{" "}
          <strong>sandy area</strong> in English.
        </Typography>
        <Typography variant='h6' component='h6' paragraph>
          The restaurant can lay a couple of tables of 8, for a group of 16 in
          the terrace, al fresco, overlooking the Mediterranean, and dining in
          the sand.
        </Typography>
        <Typography variant='h6' component='h6' paragraph>
          Their food is varied, but this would be the perfect spot to enjoy a
          Paella by the beach. Their cuisine is strong in rices and paellas,
          fish and seafood dishes.
        </Typography>
        <Typography variant='h6' component='h6' paragraph>
          The terrace can fit up to 40pax , and the total capacity of the
          restaurant is 100pax including the inner dining room.
        </Typography>
        <Divider />
      </div>
      <RestaurantSlider items={items} img1={img1} />
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    "& h6": {
      textIndent: "2rem",
    },
  },
}));

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
    caption: "Small cozy terrace",
    photo: img1,
  },
  {
    caption: "Elegant dining rooms",
    photo: img2,
  },
  {
    caption: "Front Façade",
    photo: img3,
  },
  {
    caption: "Fine wines",
    description: "The group deserves some fine dining after a long walk",
    photo: img4,
  },
  {
    caption: "Delicious mediterranean dishes",
    photo: img5,
  },
  {
    caption: "And even more delicious desserts",
    photo: img6,
  },
];

export default function CorCaliu() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <Typography variant='h4' gutterBottom>
          Restaurant Cor Caliu
        </Typography>
        <Typography variant='h6' component='h6' paragraph>
          Cor Caliu is a cozy Mediterranean restaurant located in Barcelona's
          eixample district. It is open from eary morning until mid-nigth where
          the guests will enjoy great tapas at the bar, a real showcase of small
          delights or enjoy a ful lunch or dinner in the elegant dinning room
        </Typography>
        <Typography variant='h6' component='h6' paragraph>
          The cuisine is traditional Mediterranean. It is an elegant space, with
          cream colored walls, furniture in warm colors and flashy sofas. The
          restaurant has also a small terrace on the street
        </Typography>
        <Typography variant='h6' component='h6' paragraph>
          This is a small, cozy restaurant, with a maximum dining capacity of
          50pax.
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

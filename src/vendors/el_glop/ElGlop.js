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
    caption: "View of the main dining room",
    photo: img1,
  },
  {
    caption: "Traditional Catalan Cuisine",
    photo: img2,
  },
  {
    caption: "Tapas concept",
    photo: img3,
  },
  {
    caption: "Another view of the main dining room",
    photo: img4,
  },
  {
    caption: "Another Dining room",
    photo: img5,
  },
  {
    caption: "Delicious Crème Catalane",
    photo: img6,
  },
];

export default function ElGlop() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <Typography variant='h4' gutterBottom>
          Restaurant El Glop
        </Typography>
        <Typography variant='h6' component='h6' paragraph>
          <strong>Braseria El Glop</strong> is a restaurant that is located just
          5 minutes off Plaça Catalunya.
        </Typography>
        <Typography variant='h6' component='h6' paragraph>
          The dining rooms can accommodate up to 120pax - and the cuisine style
          is traditional catalan cuisine. Since most of the programme has been
          focused on tapas , paella and fish dishes, we think that this would be
          a good spot to have some grilled meat, which is something they are
          strong at - thus the name of <em>Brasserie</em>
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

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
    caption: "Views to the Yacht Marina",
    photo: img1,
  },
  {
    caption: "Pica-pica starters",
    photo: img2,
  },
  {
    caption: "Main dining room",
    photo: img3,
  },
  {
    caption: "Dining room w/terrace",
    photo: img4,
  },
  {
    caption: "Dining room",
    photo: img5,
  },
  {
    caption: "The Yacht Marina at dawn",
    photo: img6,
  },
];

export default function Barceloneta() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <Typography variant='h4'>Restaurant Barceloneta</Typography>
        <Typography variant='h6' component='h6' paragraph>
          This restaurant is located in the district known as "Barceloneta",
          (i.e, Little Barcelona in Catalan). The district was formerly
          populated by fishing families that worked from the harbour, which is
          now one of the most impressive Yacht Marinas in the Mediterranean.
        </Typography>
        <Typography variant='h6' component='h6' paragraph>
          The property offers a main dining room in the first floor - with a
          fishing, sailing décor. Corporate groups absolutely love the upper
          floor, which has dining rooms that are open to a terrace. The group
          can be seated al-fresco in the terrace, or inside, or half-half,
          depending on the weather conditions. A pre-dinner drink in the terrace
          with views of the marina is a classic for corporate groups. They have
          dining rooms for up to 72 pax.
        </Typography>
        <Typography variant='h6' component='h6' paragraph>
          Their specialty is anything fish-related. A typical meal at
          Barceloneta starts with some pica-pica (tomato spread bread, squid
          rings, razor clams, ....), followed by a seafood paella, or some
          seabass, and ending with a delicious dessert. The restaurant serves
          top quality food with amazing and fast service.
        </Typography>
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

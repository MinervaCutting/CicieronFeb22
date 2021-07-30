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
    caption: "Front Façade in Les Rambles",
    photo: img1,
  },
  {
    caption: "Les Rambles",
    photo: img2,
  },
  {
    caption: "Restaurant Nuria is historic",
    photo: img3,
  },
  {
    caption: "Dining rooms",
    photo: img4,
  },
  {
    caption: "Dining room",
    photo: img5,
  },
  {
    caption: "Delicious Tapas",
    photo: img6,
  },
];

export default function Nuria({ id }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <Typography variant='h4'>Cafeteria Nuria</Typography>
        <Typography variant='h6' component='h6' paragraph>
          <strong>Nuria</strong> opened its doors back in 1926, and it was
          inspired by some of the most romantic Parisian restaurants back then.
          People often think that <em>Nuria</em> must be the name of the owner,
          but it is not. Nuria references the catalan{" "}
          <strong>Nuria Valley</strong> in the Pyrenees, and the owners loved
          the valley, and they thought that Nuria was a good name for a
          restaurant
        </Typography>
        <Typography variant='h6' component='h6' paragraph>
          During the 50's the place became a meeting point for artists that
          performed in Les Rambles theaters, and had their coffee, or chocolate
          with <em>xurros</em> at Nuria. Some very famous writers and artists
          were regular clients.
        </Typography>
        <Typography variant='h6' component='h6' paragraph>
          Today, the restaurant has undergone massive restoration, and it is a
          lively and cozy spot in the top part of Les Rambles. They specialize
          in traditional catalan cuisine, and in tapas - with great andalusian
          fried squid, or the delicious ham croquettes as some of their
          specialties.
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

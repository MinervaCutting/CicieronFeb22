import { Typography, makeStyles } from "@material-ui/core";
import ImageGallery from "react-image-gallery";
import tour1 from "./tour1.jpg";
import tour2 from "./tour2.jpg";
import tour3 from "./tour3.jpg";
import tour4 from "./tour4.jpg";
import tour5 from "./tour5.jpg";
import tour6 from "./tour6.jpg";

const images = [
  {
    original: tour1,
    thumbnail: tour1,
    description: "A group tasting delicious tapas",
  },
  {
    original: tour2,
    thumbnail: tour2,
    description: "Pintxos is another version of tapas",
  },
  {
    original: tour3,
    thumbnail: tour3,
    description: "Cider, beer or wine usually go well with tapas",
  },
  {
    original: tour4,
    thumbnail: tour4,
    description: "It's not all about eating - we also walk",
  },
  {
    original: tour5,
    thumbnail: tour5,
    description: "We will see some highlights of central Barcelona",
  },
  {
    original: tour6,
    thumbnail: tour6,
    description: "The tour will focus on the Ciutat Vella area",
  },
];

export default function TapasTour() {
  const classes = useStyles();
  return (
    <div className={classes.text}>
      <Typography variant='h6' component='h6' paragraph>
        Our <strong>Tapas Tour</strong> combines a gastronomic experience, with
        a guided walking tour of the city's Old Town. This tour can also run in
        the more <strong>Art-nouveau area</strong> of Passeig de Gràcia, if
        preferred by the clients.
      </Typography>
      <Typography variant='h6' component='h6' paragraph>
        <strong>CUTT/events</strong> work with a selection of the best guides in
        Barcelona. By law, every tour needs to include a licensed local guide -
        and we simply have the best ones in town, equally entertaining, funny
        and informative.
      </Typography>
      <Typography variant='h6' component='h6' paragraph>
        Our guide walks the group around the Old Town , and stop en-route to
        comment some of the monuments and hidden corners, as well as some
        gastro-bars to taste traditional tapas alongside with drinks.
      </Typography>
      <Typography variant='h6' component='h6' paragraph>
        On the gastronomic front, the tour typically includes 2 or 3 stops for
        tapas in different parts of town, and it takes around 3.5 hours to
        complete.
      </Typography>
      <ImageGallery items={images} showPlayButton={false} />
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  text: {
    "& h6": {
      textIndent: "2rem",
    },
  },
}));

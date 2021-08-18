import ImageGallery from "react-image-gallery";
import { useStyles } from "../vendorStyles/styles";
import { images } from "./photos";
import Paragraph from "../../utils/Paragraph";

const text = {
  variant: "h6",
  paras: [
    ` Our <strong>Tapas Tour</strong> combines a gastronomic experience, with
    a guided walking tour of the city's Old Town. This tour can also run in
    the more <strong>Art-nouveau area</strong> of Passeig de Gràcia, if
    preferred by the clients.`,

    ` <strong>CUTT/events</strong> work with a selection of the best guides in
    Barcelona. By law, every tour needs to include a licensed local guide -
    and we simply have the best ones in town, equally entertaining, funny
    and informative.`,

    ` Our guide walks the group around the Old Town , and stop en-route to
    comment some of the monuments and hidden corners, as well as some
    gastro-bars to taste traditional tapas alongside with drinks.`,

    ` On the gastronomic front, the tour typically includes 2 or 3 stops for
    tapas in different parts of town, and it takes around 3.5 hours to
    complete.`,
  ],
};

export default function TapasTour() {
  const classes = useStyles();
  return (
    <div className={classes.text}>
      <Paragraph variant={text.variant} paras={text.paras} />
      <ImageGallery items={images} showPlayButton={false} />
    </div>
  );
}

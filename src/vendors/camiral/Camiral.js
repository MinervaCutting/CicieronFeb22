import { Typography } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import { photos } from "./photos";
import Gallery from "react-grid-gallery";
import HotelIcons from "../../utils/HotelIcons";
import { useStyles } from "../vendorStyles/styles";
import Paragraph from "../../utils/Paragraph";

const text = {
  variant: "h6",
  paras: [
    `  The resort is a contemporary 5-star hotel, part of the PGA Golf Club
    complex. The complex is located inland on the
    <strong>Costa Brava</strong> region, surrounded by nature, and around
    20 mins drive to the actual coastline. It takes around 1h 15mins by
    bus from <em>BCN airport</em> to the resort. The facilities boast two
    of the best golf courses in <em>Europe</em>, and it is surrounded by
    nature.`,

    `<strong>Hotel Camiral</strong> has a total of 145rooms, of different
    categories, but they all feature modern decoration and offer amazing
    views. All in all, the resort breathes tranquility. The Deluxe rooms
    are the ones that are offered to corporate groups more frequently.`,

    `The <strong>Meeting rooms</strong> come in many sizes in this hotel,
    but they are all fully equipped. They have a total of 10meeting rooms,
    ranging from 20pax to 450px (theatre set up). All rooms are fitted
    with the latest generation AAVV technology. Free-wifi, LCD projectors
    and all sorts of connection outlets. The rooms have natural light.`,

    `   Other facilities include <strong>1477</strong> - a fine dining
    restaurant with "al fresco" terrace, <strong>The Club Café</strong> -
    a Clublhouse Bistro for a more informal dining option, the Lounge Bar
    and the Pool bar. If that's your thing, the <em>Wellness centre</em>
    is just one of a kind.`,

    `  If you are staying for business, the resort offers a wide range of
    different meeting room sizes, featuring natural light, and good WIFI
    connection.
    `,
  ],
};

const leftIconsText = [
  "45 mins north of BCN",
  "2 x Restaurants, 2 x bars",
  "145rooms",
  "High Speed, available",
];

const rightIconsText = [
  "1x outdoor, 1x thermal",
  "checkin/out 3pm / 12pm",
  "10 x meeting rooms",
  "Wheelchair accessible",
];

export default function Camiral() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <Typography variant='h4'>Hotel Camiral</Typography>
        <Rating name='read-only' value={5} readOnly />
        <Typography component='subtitle1'>
          <sup>Luxury</sup>{" "}
        </Typography>
      </div>
      <div className={classes.text}>
        <Paragraph variant={text.variant} paras={text.paras} />
      </div>
      <Gallery images={photos} />
      <HotelIcons
        leftIconsText={leftIconsText}
        rightIconsText={rightIconsText}
      />
    </div>
  );
}

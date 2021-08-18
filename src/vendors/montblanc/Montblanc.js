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
    `  The <strong>HCC Montblanc</strong> is a 3-star hotel which could well
    be classified as a 4-star. The location is unbeatable in Via Laietana,
    right in the Gothic district, and close to Plaça Catalunya and metro
    lines.`,

    ` Although located in a buzzing street, all 157 rooms are sound proof,
    the building is new and all rooms are modern and well appointed.
    Double Rooms for single or double use are in average 23sqm. Some rooms
    include 10sqm terraces`,

    ` The property also offers a Restaurant, a Bar/lounge to relax and an a
    spacious outdoor pool.`,

    `   The property is following the strictest of <strong>COVID</strong>
    protocols, including all linens sanitized in high-temperature wash,
    floors marked for social distancing, hand sanitizers available
    everywhere, and regularly sanitized high-traffic areas.`,
  ],
};

const leftIconsText = [
  "Gothic Quarter",
  "1x Restaurant 1 piano-Bar/Lounge",
  "157rooms",
  "High Speed, available",
];

const rightIconsText = [
  "1x outdoor pool",
  "checkin/out 2pm / 12pm",
  "2 x meeting rooms",
  "Wheelchair accessible",
];

export default function Montblanc() {
  const classes = useStyles();
  return (
    <div id='Hotel HCC Montblanc' className={classes.root}>
      <div className={classes.title}>
        <Typography variant='h4' gutterBottom>
          Hotel HCC Montblanc
        </Typography>
        <Rating name='read-only' value={3} readOnly emptyIcon />
        {/*  <Typography component='subtitle1'>
          <sup>Luxury</sup>{" "}
        </Typography> */}
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

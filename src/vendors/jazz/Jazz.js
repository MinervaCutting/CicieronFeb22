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
    `  The <strong>Hotel Jazz</strong> is one of our 3star superior
    favourites in the city. The location could not be better, only a few
    steps away from Plaça Catalunya, and the upper side of
    <em>Les Rambles</em>`,

    ` The property is very close to many of Barcelona's attractions, and it
    offers 108 really modern and elegant rooms- some of them are adapted
    for handicapped people. It really looks like a 4-star.`,
  ],
};

const leftIconsText = [
  "Off Plaça Catalunya",
  "1x Lounge Bar",
  "108 rooms",
  "High Speed, available",
];

const rightIconsText = [
  "1x outdoor pool",
  "checkin/out 3pm / 12pm",
  "2 x meeting rooms",
  "Wheelchair accessible",
];

export default function Jazz() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <Typography variant='h4' gutterBottom>
          Hotel Jazz
        </Typography>
        <Rating name='read-only' value={3} readOnly emptyIcon />
        <Typography component='subtitle1'>
          <sup>Superior</sup>{" "}
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

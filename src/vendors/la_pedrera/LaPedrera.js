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
    `    The <strong>Hotel La Pedrera</strong> occupies a prime location on the
    modernist route, close to <strong>Sagrada Familia</strong> and the
    famous <em>Passeig de Gràcia</em>`,

    `<strong>La Pedrera</strong> is a small/medium sized hotel, with 79
    rooms -broken down into double rooms, premium, superior, superior with
    terrace and junior suites.`,

    ` Other facilities include Free-wifi, a Bar a snack Bar, a Swiming Pool
    and a restaurant`,
  ],
};

const leftIconsText = [
  "Close to Sagrada Familia",
  "1 x Restaurant, 2 x bars",
  "79 rooms",
  "High Speed, available",
];

const rightIconsText = [
  "1x outdoor, 1x Spa center",
  "checkin/out 3pm / 12pm",
  "1 x meeting room for 60pax",
  "Wheelchair accessible",
];

export default function LaPedrera() {
  const classes = useStyles();
  return (
    <div id='accommodation' className={classes.root}>
      <div className={classes.title}>
        <Typography variant='h4' gutterBottom>
          Hotel Catalonia La Pedrera
        </Typography>
        <Rating name='read-only' value={4} readOnly emptyIcon />
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

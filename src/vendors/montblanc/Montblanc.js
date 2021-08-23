import { Typography } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import { leftIconsText, rightIconsText, text, photos } from "./data";
import Gallery from "react-grid-gallery";
import HotelIcons from "../../utils/HotelIcons";
import { useStyles } from "../vendorStyles/styles";
import Paragraph from "../../utils/Paragraph";

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

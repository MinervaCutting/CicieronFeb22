import { Typography } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import { leftIconsText, photos, rightIconsText, text } from "./data";
import Gallery from "react-grid-gallery";
import HotelIcons from "../../utils/HotelIcons";
import { useStyles } from "../vendorStyles/styles";
import Paragraph from "../../utils/Paragraph";

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
          <sup>Superior</sup>
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

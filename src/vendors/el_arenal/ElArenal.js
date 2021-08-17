import { Typography, Divider } from "@material-ui/core";
import Paragraph from "../../utils/Paragraph";
import RestaurantSlider from "../vendorUtils/RestaurantUtils";
import { useStyles } from "../vendorStyles/styles";
import { items } from "./photos";
import img1 from "./rest1.jpg";

const text = {
  variant: "h6",
  paras: [
    ` <strong>El Arenal</strong> is one of the few restaurants in
    <em>Barcelona</em> that are located just by the beach - near
    <strong>Port Olímpic</strong> in la <strong>Barceloneta Beach</strong>
    . When we say, by the beach, we mean - almost at the
    <strong>sand</strong> - El Arenal meaning the
    <strong>sandy area</strong> in English.`,

    ` The restaurant can lay a couple of tables of 8, for a group of 16 in
    the terrace, al fresco, overlooking the Mediterranean, and dining in
    the sand.`,

    `Their food is varied, but this would be the perfect spot to enjoy a
    Paella by the beach. Their cuisine is strong in rices and paellas,
    fish and seafood dishes.`,

    ` The terrace can fit up to 40pax , and the total capacity of the
    restaurant is 100pax including the inner dining room.`,
  ],
};

export default function ElArenal() {
  const classes = useStyles();
  return (
    <div id='day_two_2'>
      <div className={classes.text}>
        <Typography variant='h4' gutterBottom>
          Restaurant El Arenal
        </Typography>
        <Paragraph variant={text.variant} paras={text.paras} />
        <Divider />
      </div>
      <RestaurantSlider items={items} img1={img1} />
    </div>
  );
}

import { Typography, Divider } from "@material-ui/core";
import RestaurantSlider from "../vendorUtils/RestaurantUtils";
import { useStyles } from "../vendorStyles/styles";
import img1 from "./rest1.jpg";
import { items } from "./photos";
import Paragraph from "../../utils/Paragraph";

const text = {
  variant: "h6",
  paras: [
    ` <strong>Cor Caliu</strong> is a cozy Mediterranean restaurant located in Barcelona's
    eixample district. It is open from eary morning until mid-nigth where
    the guests will enjoy great tapas at the bar, a real showcase of small
    delights or enjoy a ful lunch or dinner in the elegant dinning room`,
    `  The cuisine is traditional Mediterranean. It is an elegant space, with
    cream colored walls, furniture in warm colors and flashy sofas. The
    restaurant has also a small terrace on the street`,
    ` This is a small, cozy restaurant, with a maximum dining capacity of
    50pax.`,
  ],
};

export default function CorCaliu() {
  const classes = useStyles();
  return (
    <div className={classes.text}>
      <div>
        <Typography variant='h4' gutterBottom>
          Restaurant Cor Caliu
        </Typography>
        <Paragraph variant={text.variant} paras={text.paras} />
        <Divider />
      </div>
      <RestaurantSlider items={items} img1={img1} />
    </div>
  );
}

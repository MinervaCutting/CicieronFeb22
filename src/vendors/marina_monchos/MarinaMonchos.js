import { Typography, Divider } from "@material-ui/core";
import Paragraph from "../../utils/Paragraph";
import RestaurantSlider from "../vendorUtils/RestaurantUtils";
import { useStyles } from "../vendorStyles/styles";
import { items, text } from "./data";
import img1 from "./rest1.jpg";

export default function MarinaMonchos() {
  const classes = useStyles();
  return (
    <div className={classes.text} id='day_three_5'>
      <div>
        <Typography variant='h4'>Restaurant Marina Monchos</Typography>
        <Paragraph variant={text.variant} paras={text.paras} />
        <Divider />
      </div>
      <RestaurantSlider items={items} img1={img1} />
    </div>
  );
}

import { Typography, Divider } from "@material-ui/core";
import RestaurantSlider from "../vendorUtils/RestaurantUtils";
import { useStyles } from "../vendorStyles/styles";
import img1 from "./rest1.jpg";
import { items, text } from "./data";
import Paragraph from "../../utils/Paragraph";

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

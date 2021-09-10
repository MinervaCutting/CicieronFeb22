import { Typography, Divider } from "@material-ui/core";
import RestaurantSlider from "../../vendors/vendorUtils/RestaurantUtils";
import { useStyles } from "./styles";
import Paragraph from "../Paragraph";

export default function RestaurantVendor({
  data: { title, variant, paras, items },
}) {
  const classes = useStyles();
  return (
    <div className={classes.text}>
      <div>
        <Typography variant='h4' gutterBottom>
          {title}
        </Typography>
        <Paragraph variant={variant} paras={paras} />
        <Divider />
      </div>
      <RestaurantSlider items={items} img1={items[0].photo} />
    </div>
  );
}

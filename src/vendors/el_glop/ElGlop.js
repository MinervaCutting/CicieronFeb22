import { Typography, Divider } from "@material-ui/core";
import Paragraph from "../../utils/Paragraph";
import RestaurantSlider from "../vendorUtils/RestaurantUtils";
import { useStyles } from "../vendorStyles/styles";
import { items } from "./photos";
import img1 from "./rest1.jpg";

const text = {
  variant: "h6",
  paras: [
    `  <strong>Braseria El Glop</strong> is a restaurant that is located just
    5 minutes off Plaça Catalunya.`,

    ` The dining rooms can accommodate up to 120pax - and the cuisine style
    is traditional catalan cuisine. Since most of the programme has been
    focused on tapas , paella and fish dishes, we think that this would be
    a good spot to have some grilled meat, which is something they are
    strong at - thus the name of <em>Brasserie</em>`,
  ],
};

export default function ElGlop() {
  const classes = useStyles();
  return (
    <div className={classes.text}>
      <div>
        <Typography variant='h4' gutterBottom>
          Restaurant El Glop
        </Typography>
        <Paragraph variant={text.variant} paras={text.paras} />
        <Divider />
      </div>
      <RestaurantSlider items={items} img1={img1} />
    </div>
  );
}

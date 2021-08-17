import { Typography, Divider } from "@material-ui/core";
import Paragraph from "../../utils/Paragraph";
import RestaurantSlider from "../vendorUtils/RestaurantUtils";
import { useStyles } from "../vendorStyles/styles";
import { items } from "./photos";
import img1 from "./rest1.jpg";

const text = {
  variant: "h6",
  paras: [
    `  This restaurant is located in the district known as <em>"Barceloneta"</em>,
    (i.e, Little Barcelona in Catalan). The district was formerly
    populated by fishing families that worked from the harbour, which is
    now one of the most impressive Yacht Marinas in the Mediterranean.`,

    ` The property offers a main dining room in the first floor - with a
    fishing, sailing décor. Corporate groups absolutely love the upper
    floor, which has dining rooms that are open to a terrace. The group
    can be seated al-fresco in the terrace, or inside, or half-half,
    depending on the weather conditions. A pre-dinner drink in the terrace
    with views of the marina is a classic for corporate groups. They have
    dining rooms for up to 72 pax.`,

    ` Their specialty is anything fish-related. A typical meal at
    Barceloneta starts with some pica-pica (tomato spread bread, squid
    rings, razor clams, ....), followed by a seafood paella, or some
    seabass, and ending with a delicious dessert. The restaurant serves
    top quality food with amazing and fast service.`,
  ],
};

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

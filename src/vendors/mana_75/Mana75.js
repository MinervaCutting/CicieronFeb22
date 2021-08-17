import { Typography, Divider } from "@material-ui/core";
import Paragraph from "../../utils/Paragraph";
import RestaurantSlider from "../vendorUtils/RestaurantUtils";
import { useStyles } from "../vendorStyles/styles";
import { items } from "./photos";
import img1 from "./rest1.jpg";

const text = {
  variant: "h6",
  paras: [
    ` The <strong>Mana 75</strong> is another option for your group to enjoy
    the beach. Located next to the <strong>W</strong> Hotel, next to the
    Marina Yacht Club - which is the most luxurious Yacht Marina in the
    Mediterranean, and very close to where the futuristic{" "}
    <strong>Barcelona's Hermitage Museum </strong> will be located.`,

    ` The restaurant boasts modern design, and open 20-meter kitchen, in
    which you can see how your food is cooked at all times.`,

    `Their specialty is anything fish-related. A typical meal at Mana 75
    starts with some pica-pica (tomato spread bread, squid rings, razor
    clams, ....), followed by a seafood paella, or some seabass, and
    ending with a delicious dessert. The restaurant serves top quality
    food with amazing and fast service.`,
  ],
};

export default function Mana75() {
  const classes = useStyles();
  return (
    <div className={classes.text} id='day_three_4'>
      <div>
        <Typography variant='h4'>Restaurant Mana 75</Typography>
        <Paragraph variant={text.variant} paras={text.paras} />
        <Divider />
      </div>
      <RestaurantSlider items={items} img1={img1} />
    </div>
  );
}

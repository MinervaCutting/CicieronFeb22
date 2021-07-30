import { makeStyles, Typography, Divider } from "@material-ui/core";
import RestaurantSlider from "../vendorUtils/RestaurantUtils";
import img1 from "./rest1.jpg";
import img2 from "./rest2.jpg";
import img3 from "./rest3.jpg";
import img4 from "./rest4.jpg";
import img5 from "./rest5.jpg";
import img6 from "./rest6.jpg";

let items = [
  {
    caption: "Beautiful Dining rooms",
    photo: img1,
  },
  {
    caption: "Cozy terrace",
    photo: img2,
  },
  {
    caption: "Open air terrace",
    photo: img3,
  },
  {
    caption: "Seafood experience",
    photo: img4,
  },
  {
    caption: "Front Façade",
    photo: img5,
  },
  {
    caption: "Always buzzing",
    photo: img6,
  },
];

export default function Mana75() {
  const classes = useStyles();
  return (
    <div className={classes.root} id='day_three_4'>
      <div>
        <Typography variant='h4'>Restaurant Mana 75</Typography>
        <Typography variant='h6' component='h6' paragraph>
          The <strong>Mana 75</strong> is another option for your group to enjoy
          the beach. Located next to the <strong>W</strong> Hotel, next to the
          Marina Yacht Club - which is the most luxurious Yacht Marina in the
          Mediterranean, and very close to where the futuristic{" "}
          <strong>Barcelona's Hermitage Museum </strong> will be located.
        </Typography>
        <Typography variant='h6' component='h6' paragraph>
          The restaurant boasts modern design, and open 20-meter kitchen, in
          which you can see how your food is cooked at all times.
        </Typography>
        <Typography variant='h6' component='h6' paragraph>
          Their specialty is anything fish-related. A typical meal at Mana 75
          starts with some pica-pica (tomato spread bread, squid rings, razor
          clams, ....), followed by a seafood paella, or some seabass, and
          ending with a delicious dessert. The restaurant serves top quality
          food with amazing and fast service.
        </Typography>
        <Divider />
      </div>
      <RestaurantSlider items={items} img1={img1} />
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    "& h6": {
      textIndent: "2rem",
    },
  },
}));

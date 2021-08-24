import { Typography, Divider, Button } from "@material-ui/core";
import Paragraph from "../../utils/Paragraph";
import RestaurantSlider from "../vendorUtils/RestaurantUtils";
import { useStyles } from "../vendorStyles/styles";
import { items, text } from "./data";
import img1 from "./rest1.jpg";
import pdf from "./menus.pdf";

export default function Mana75() {
  const classes = useStyles();
  return (
    <div className={classes.text} id='day_three_4'>
      <div>
        <Typography variant='h4'>Restaurant Mana 75</Typography>
        <Paragraph variant={text.variant} paras={text.paras} />
        <div className={classes.pdfContainer}>
          <Button variant='contained' className={classes.pdfButton}>
            <a href={pdf} download>
              Download Sample menus
            </a>
          </Button>
        </div>

        <Divider />
      </div>
      <RestaurantSlider items={items} img1={img1} />
    </div>
  );
}

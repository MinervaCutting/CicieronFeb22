import { Typography, Divider } from "@material-ui/core";
import RestaurantSlider from "../vendorUtils/RestaurantUtils";
import { useStyles } from "../vendorStyles/styles";
import img1 from "./rest1.jpg";
import { items } from "./photos";
import Paragraph from "../../utils/Paragraph";

const text = {
  variant: "h6",
  paras: [
    `  Back in <em>1851</em>, <strong>Louis Moritz</strong>, a local of
    Pfaffenhoffen, Alsace, established in Barcelona. He started producing
    beer and he soon became one of the city's top brewers.{" "}
    <strong>Moritz Brewers</strong> kept growing, and survived the Civil
    war. The brand became very prestigious and local to Barcelona, and the
    6th generation of the family, relaunched the brand in 2004.`,

    ` In 2011, the brewers decided to go big, and refurbished the Old
    factory , right in the center of Barcelona. The famous architect{" "}
    <strong>Jean Nouvel</strong> was in charge of the restoration, by
    creating the <strong>Fabrica Moritz</strong>, which is today a
    brewery, restaurant, and trendy bar of <strong>Barcelona</strong>`,

    `The old factory has now been converted to an amazing gastronomic,
    cultural and leisure center, where guests can enjoy informal dining
    with beer, as well as an extensive menu of tapas. The dinner can be
    combined with a tour of the old brewery. The complex also houses a
    "Bar à Vins", a bakery, a gift shop, and a more formal restaurant.`,
  ],
};

export default function FabricaMoritz() {
  const classes = useStyles();
  return (
    <div className={classes.text} id='day_one_3'>
      <div>
        <Typography variant='h4' gutterBottom>
          Fabrica Moritz
        </Typography>
        <Paragraph variant={text.variant} paras={text.paras} />
        <Divider />
      </div>
      <RestaurantSlider items={items} img1={img1} />
    </div>
  );
}

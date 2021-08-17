import { Typography, Divider } from "@material-ui/core";
import RestaurantSlider from "../vendorUtils/RestaurantUtils";
import Paragraph from "../../utils/Paragraph";
import { useStyles } from "../vendorStyles/styles";
import img1 from "./rest1.jpg";
import { items } from "./photos";

const text = {
  variant: "h6",
  paras: [
    ` Este es el restaurante del <strong>Real Círculo Artístico de Barcelona</strong> , al pie
    del Portal del Àngel , y a unos metros de la Catedral de Barcelona.
    Dispone de una de las terrazas más emblemáticas de la ciudad, y el
    edificio en el que está ubicado constituye un magnífico palacio gótico.`,
    ` El restaurante tiene una carta con una mezcla muy curiosa de cocina
    catalana y japonesa de a diario, aunque los menús para grupo se
    concentran en la cocina catalana, y desde luego, está a la altura de la
    belleza del edificio. A parte de la terraza , el restaurante dispone de
    varios comedores, donde incluso fuera de horas, se pueden hacer
    reuniones de hasta 75pax.`,
  ],
};

const ElCercle = () => {
  const classes = useStyles();
  return (
    <div className={classes.text}>
      <div>
        <Typography variant='h4'>Restaurant El Cercle</Typography>
        <Paragraph variant={text.variant} paras={text.paras} />
        <Divider />
      </div>
      <RestaurantSlider items={items} img1={img1} />
    </div>
  );
};

export default ElCercle;

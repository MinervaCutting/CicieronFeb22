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
    caption: "Terraza",
    photo: img1,
  },
  {
    caption: "Terraza",
    photo: img2,
  },
  {
    caption: "Terraza",
    photo: img3,
  },
  {
    caption: "Coffee Breaks",
    photo: img4,
  },
  {
    caption: "Reial Cercle Artístic de Barcelona",
    photo: img5,
  },
  {
    caption: "Más detalles",
    photo: img6,
  },
];

const ElCercle = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant='h4' component='h4'>
        Restaurant El Cercle
      </Typography>
      <Typography variant='h6' component='h6' paragraph>
        Este es el restaurante del Real Círculo Artístico de Barcelona , al pie
        del Portal del Àngel , y a unos metros de la Catedral de Barcelona.
        Dispone de una de las terrazas más emblemáticas de la ciudad, y el
        edificio en el que está ubicado constituye un magnífico palacio gótico.
      </Typography>
      <Typography variant='h6' component='h6' paragraph>
        El restaurante tiene una carta con una mezcla muy curiosa de cocina
        catalana y japonesa de a diario, aunque los menús para grupo se
        concentran en la cocina catalana, y desde luego, está a la altura de la
        belleza del edificio. A parte de la terraza , el restaurante dispone de
        varios comedores, donde incluso fuera de horas, se pueden hacer
        reuniones de hasta 75pax.
      </Typography>

      <RestaurantSlider items={items} img1={img1} />
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    "& h6": {
      textIndent: "2rem",
    },
  },
}));

export default ElCercle;

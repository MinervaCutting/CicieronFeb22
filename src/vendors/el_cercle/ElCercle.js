import { makeStyles, Typography, Paper } from "@material-ui/core";
import Carousel from "react-material-ui-carousel";
import img1 from "./el_cercle1.jpeg";
import img2 from "./el_cercle2.jpeg";
import img3 from "./el_cercle3.jpeg";
import img4 from "./el_cercle4.jpeg";
import img5 from "./el_cercle5.jpeg";
import img6 from "./el_cercle6.jpeg";

function ImageSlider(props) {
  let items = [
    {
      name: "Terraza",
      description: "Solo puede ser reservada por grupos corporativos",
      image: img1,
    },
    {
      name: "Terraza",
      description: "La lluvia leve está prevista",
      image: img2,
    },
    {
      name: "Terraza",
      description: "Otra vista diferente",
      image: img3,
    },
    {
      name: "Coffee Breaks",
      description: "Se pueden organizar reuniones en el Palacete",
      image: img4,
    },
    {
      name: "Reial Cercle Artístic de Barcelona",
      description: "Fundado en 1881",
      image: img5,
    },
    {
      name: "Más detalles",
      description: "",
      image: img6,
    },
  ];
  return (
    <Carousel autoPlay={false}>
      {items.map((item, i) => (
        <Paper key={i}>
          <Typography variant='h4'>{item.name}</Typography>
          <Typography variant='subtitle1'>{item.description}</Typography>
          <img src={item.image} alt='' />
        </Paper>
      ))}
    </Carousel>
  );
}

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

      <ImageSlider />
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

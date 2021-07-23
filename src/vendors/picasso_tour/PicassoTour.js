import { Typography, makeStyles } from "@material-ui/core";
import ImageGallery from "react-image-gallery";
import tour1 from "./tour1.jpg";
import tour2 from "./tour2.jpg";
import tour3 from "./tour3.jpg";
import tour4 from "./tour4.jpg";
import tour5 from "./tour5.jpg";
import tour6 from "./tour6.jpg";

const images = [
  {
    original: tour1,
    thumbnail: tour1,
    description: "La famosa plaza del rey",
  },
  {
    original: tour2,
    thumbnail: tour2,
    description: "Vista frontal de la Catedral de Barcelona",
  },
  {
    original: tour3,
    thumbnail: tour3,
    description: "Pablo Picasso",
  },
  {
    original: tour4,
    thumbnail: tour4,
    description: "La espera (Margot)",
  },
  {
    original: tour5,
    thumbnail: tour5,
    description: "Pequeño aperitivo",
  },
  {
    original: tour6,
    thumbnail: tour6,
    description: "Interior de un palacio Gótico",
  },
];

export default function PicassoTour() {
  const classes = useStyles();
  return (
    <div className={classes.text}>
      <Typography variant='h6' component='h6' paragraph>
        El próximo <em>dia 23 de Julio</em>, les proponemos que descubran el
        barrio Gótico de Barcelona, de la mano de nuestra guía Maite Audet.
        Nadie conoce mejor Barcelona que Maite, y ninguna guía les hará pasar un
        mejor rato.
      </Typography>
      <Typography variant='h6' component='h6' paragraph>
        A las <strong>10.00</strong> de la mañana, nos encontraremos con ella en
        Pl. Cataluña y pasearemos, como no, por las Ramblas, pasando por visitas
        icónicas como la iglesia de Sta María del Pi,
      </Typography>
      <Typography variant='h6' component='h6' paragraph>
        A las <strong>11.00</strong>, tenemos reservada la entrada para el museo
        Picasso, - uno de los mejores museos de Barcelona, que alberga una de
        las colecciones más completas del artista - 4.251 obras, expuestas en 5
        palacetes medievales interconectados. Como curiosidad, el museo, es el
        único que fue abierto cuando el artista todavía vivía ( 1963).
      </Typography>
      <Typography variant='h6' component='h6' paragraph>
        A las <strong>12.00</strong>, les proponemos una pequeña parada para
        refrescarse, y de paso, disfrutar de preciosas vistas a la Catedral
        desde la Terraza de uno de los hoteles, donde les ofreceremos un
        aperitivo con vino, cerveza, cava, y algo de picar como pan de vidrio
        con jamón ibérico, y daditos de quedo en aceite.
      </Typography>
      <Typography variant='h6' component='h6' paragraph>
        Tras esta breve parada, proseguiremos con Maite por el Gótico y el Born,
        y acaberemos la ruta sobre las <strong>14.00</strong> en el restaurante.
      </Typography>
      <ImageGallery items={images} showPlayButton={false} />
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  text: {
    "& h6": {
      textIndent: "2rem",
    },
  },
}));

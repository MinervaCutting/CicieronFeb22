import ImageGallery from "react-image-gallery";
import { useStyles } from "../vendorStyles/styles";
import { images } from "./photos";
import Paragraph from "../../utils/Paragraph";

const text = {
  variant: "h6",
  paras: [
    `   El próximo <em>dia 23 de Julio</em>, les proponemos que descubran el
    barrio Gótico de Barcelona, de la mano de nuestra guía Maite Audet.
    Nadie conoce mejor Barcelona que Maite, y ninguna guía les hará pasar un
    mejor rato.`,

    `  A las <strong>10.00</strong> de la mañana, nos encontraremos con ella en
    Pl. Catalunya y pasearemos, como no, por las Ramblas, pasando por visitas
    icónicas como la iglesia de Sta María del Pi,`,

    ` A las <strong>11.00</strong>, tenemos reservada la entrada para el museo
    Picasso, - uno de los mejores museos de Barcelona, que alberga una de
    las colecciones más completas del artista - 4.251 obras, expuestas en 5
    palacetes medievales interconectados. Como curiosidad, el museo, es el
    único que fue abierto cuando el artista todavía vivía ( 1963).`,

    ` A las <strong>12.00</strong>, les proponemos una pequeña parada para
    refrescarse, y de paso, disfrutar de preciosas vistas a la Catedral
    desde la Terraza de uno de los hoteles, donde les ofreceremos un
    aperitivo con vino, cerveza, cava, y algo de picar como pan de vidrio
    con jamón ibérico, y daditos de quedo en aceite.`,

    `  Tras esta breve parada, proseguiremos con Maite por el Gótico y el Born,
    y acaberemos la ruta sobre las <strong>14.00</strong> en el restaurante.`,
  ],
};

export default function PicassoTour() {
  const classes = useStyles();
  return (
    <div className={classes.text}>
      <Paragraph variant={text.variant} paras={text.paras} />
      <ImageGallery items={images} showPlayButton={false} />
    </div>
  );
}

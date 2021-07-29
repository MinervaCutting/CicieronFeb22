import { makeStyles, Typography, Paper, Divider } from "@material-ui/core";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from "./rest1.jpg";
import img2 from "./rest2.jpg";
import img3 from "./rest3.jpg";
import img4 from "./rest4.jpg";
import img5 from "./rest5.jpg";
import img6 from "./rest6.jpg";

function ImageSlider(props) {
  let items = [
    {
      name: "The Bar area is always buzzing",
      description: "This is the largest area of the 4500sqm Old factory",
      image: img1,
    },
    {
      name: "The House is almost a museum",
      description: "Full of memorabilia of Old Barcelona",
      image: img2,
    },
    {
      name: "The Place is still a brewery...",
      description: "some of the beer tanks",
      image: img3,
    },
    {
      name: "A more formal restaurant",
      description: "by Michelin-starred Jordi Vilà",
      image: img4,
    },
    {
      name: "Craft beer",
      description: "In-house produced exclusive beer",
      image: img5,
    },
    {
      name: "Gift shop",
      description: "Exclusive craft beer can be bought in the premises",
      image: img6,
    },
  ];
  return (
    <Carousel>
      {items.map((item, i) => (
        <Paper key={i}>
          <img src={item.image} alt='' />
          <Typography variant='h6' className='legend'>
            {item.description}
          </Typography>
        </Paper>
      ))}
    </Carousel>
  );
}

export default function FabricaMoritz() {
  const classes = useStyles();
  return (
    <div className={classes.root} id='day_one_3'>
      <div>
        <Typography variant='h4' gutterBottom>
          Fabrica Moritz
        </Typography>
        <Typography variant='h6' component='h6' paragraph>
          Back in <em>1851</em>, <strong>Louis Moritz</strong>, a local of
          Pfaffenhoffen, Alsace, established in Barcelona. He started producing
          beer and he soon became one of the city's top brewers.{" "}
          <strong>Moritz Brewers</strong> kept growing, and survived the Civil
          war. The brand became very prestigious and local to Barcelona, and the
          6th generation of the family, relaunched the brand in 2004.
        </Typography>
        <Typography variant='h6' component='h6' paragraph>
          In 2011, the brewers decided to go big, and refurbished the Old
          factory , right in the center of Barcelona. The famous architect{" "}
          <strong>Jean Nouvel</strong> was in charge of the restoration, by
          creating the <strong>Fabrica Moritz</strong>, which is today a
          brewery, restaurant, and trendy bar of <strong>Barcelona</strong>
        </Typography>
        <Typography variant='h6' component='h6' paragraph>
          The old factory has now been converted to an amazing gastronomic,
          cultural and leisure center, where guests can enjoy informal dining
          with beer, as well as an extensive menu of tapas. The dinner can be
          combined with a tour of the old brewery. The complex also houses a
          "Bar à Vins", a bakery, a gift shop, and a more formal restaurant.
        </Typography>
        <Divider />
      </div>
      <ImageSlider />
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

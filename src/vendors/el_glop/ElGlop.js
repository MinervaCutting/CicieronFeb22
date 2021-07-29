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
      name: "View of the main dining room",
      description: "Braseria El Glop is centrally located",
      image: img1,
    },
    {
      name: "Traditional Catalan Cuisine",
      description: "Here's the 'Calçots - catalan delicatessen",
      image: img2,
    },
    {
      name: "Tapas concept",
      description: "Starters to share",
      image: img3,
    },
    {
      name: "Another view of the main dining room",
      description: "Tables are flexible for all group sizes",
      image: img4,
    },
    {
      name: "Another Dining room",
      description: "There are more spaces in the restaurant",
      image: img5,
    },
    {
      name: "Delicious Crème Catalane",
      description: "Catalunya's most traditional dessert",
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

export default function ElGlop() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <Typography variant='h4' gutterBottom>
          Restaurant El Glop
        </Typography>
        <Typography variant='h6' component='h6' paragraph>
          <strong>Braseria El Glop</strong> is a restaurant that is located just
          5 minutes off Plaça Catalunya.
        </Typography>
        <Typography variant='h6' component='h6' paragraph>
          The dining rooms can accommodate up to 120pax - and the cuisine style
          is traditional catalan cuisine. Since most of the programme has been
          focused on tapas , paella and fish dishes, we think that this would be
          a good spot to have some grilled meat, which is something they are
          strong at - thus the name of <em>Brasserie</em>
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

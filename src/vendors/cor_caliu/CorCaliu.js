import { makeStyles, Typography, Paper, Divider } from "@material-ui/core";
import Carousel from "react-material-ui-carousel";
import img1 from "./rest1.jpg";
import img2 from "./rest2.jpg";
import img3 from "./rest3.jpg";
import img4 from "./rest4.jpg";
import img5 from "./rest5.jpg";
import img6 from "./rest6.jpg";

function ImageSlider(props) {
  let items = [
    {
      name: "Small cozy terrace",
      description: "",
      image: img1,
    },
    {
      name: "Elegant dining rooms",
      description: "",
      image: img2,
    },
    {
      name: "Front Façade",
      description: "",
      image: img3,
    },
    {
      name: "Fine wines",
      description: "The group deserves some fine dining after a long walk",
      image: img4,
    },
    {
      name: "Delicious mediterranean dishes",
      description: "",
      image: img5,
    },
    {
      name: "And even more delicious desserts",
      description: "",
      image: img6,
    },
  ];
  return (
    <Carousel autoPlay={false}>
      {items.map((item, i) => (
        <Paper key={i}>
          <Typography variant='h5'>{item.name}</Typography>
          <Typography variant='h6'>{item.description}</Typography>
          <img src={item.image} alt='' />
        </Paper>
      ))}
    </Carousel>
  );
}

export default function CorCaliu() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <Typography variant='h4' gutterBottom>
          Restaurant Cor Caliu
        </Typography>
        <Typography variant='h6' component='h6' paragraph>
          Cor Caliu is a cozy Mediterranean restaurant located in Barcelona's
          eixample district. It is open from eary morning until mid-nigth where
          the guests will enjoy great tapas at the bar, a real showcase of small
          delights or enjoy a ful lunch or dinner in the elegant dinning room
        </Typography>
        <Typography variant='h6' component='h6' paragraph>
          The cuisine is traditional Mediterranean. It is an elegant space, with
          cream colored walls, furniture in warm colors and flashy sofas. The
          restaurant has also a small terrace on the street
        </Typography>
        <Typography variant='h6' component='h6' paragraph>
          This is a small, cozy restaurant, with a maximum dining capacity of
          50pax.
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

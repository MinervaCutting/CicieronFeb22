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
      name: "El Arenal -Terrace",
      description: "It's right on the beach of Barceloneta",
      image: img1,
    },
    {
      name: "More Terrace",
      description: "Tables are laid out perpendicular to the Sea",
      image: img2,
    },
    {
      name: "Terrace is protected",
      description: "The tented area can protect during mild bad weather",
      image: img3,
    },
    {
      name: "Front view of the restaurant",
      description: "Next to all the trendy clubs",
      image: img4,
    },
    {
      name: "Prime location",
      description:
        "The restaurant is only a few steps away from the Port Olimpic",
      image: img5,
    },
    {
      name: "Inner diningroom",
      description: "There is back up in case of bad weather",
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

export default function ElArenal() {
  const classes = useStyles();
  return (
    <div className={classes.root} id='day_two_2'>
      <div>
        <Typography variant='h4'>Restaurant El Arenal</Typography>
        <Typography variant='h6' component='h6' paragraph>
          <strong>El Arenal</strong> is one of the few restaurants in{" "}
          <em>Barcelona</em> that are located just by the beach - near{" "}
          <strong>Port Olímpic</strong> in la <strong>Barceloneta Beach</strong>
          . When we say, by the beach, we mean - almost at the{" "}
          <strong>sand</strong> - El Arenal meaning the{" "}
          <strong>sandy area</strong> in English.
        </Typography>
        <Typography variant='h6' component='h6' paragraph>
          The restaurant can lay a couple of tables of 8, for a group of 16 in
          the terrace, al fresco, overlooking the Mediterranean, and dining in
          the sand.
        </Typography>
        <Typography variant='h6' component='h6' paragraph>
          Their food is varied, but this would be the perfect spot to enjoy a
          Paella by the beach. Their cuisine is strong in rices and paellas,
          fish and seafood dishes.
        </Typography>
        <Typography variant='h6' component='h6' paragraph>
          The terrace can fit up to 40pax , and the total capacity of the
          restaurant is 100pax including the inner dining room.
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

import {
  Typography,
  makeStyles,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import { photos } from "./photos";
import Gallery from "react-grid-gallery";
import RoomTwoToneIcon from "@material-ui/icons/RoomTwoTone";
import RestaurantTwoToneIcon from "@material-ui/icons/RestaurantTwoTone";
import HotelTwoToneIcon from "@material-ui/icons/HotelTwoTone";
import WifiTwoToneIcon from "@material-ui/icons/WifiTwoTone";
import PoolTwoToneIcon from "@material-ui/icons/PoolTwoTone";
import QueryBuilderTwoToneIcon from "@material-ui/icons/QueryBuilderTwoTone";
import LocalCafeTwoToneIcon from "@material-ui/icons/LocalCafeTwoTone";
import AccessibleForwardTwoToneIcon from "@material-ui/icons/AccessibleForwardTwoTone";

const iconsLeft = [
  {
    icon: <RoomTwoToneIcon />,
    text: "Location: 45 mins north of BCN",
  },
  {
    icon: <RestaurantTwoToneIcon />,
    text: "Gastro: 2 x Restaurants, 2 x bars",
  },
  {
    icon: <WifiTwoToneIcon />,
    text: "High Speed, available",
  },
  {
    icon: <HotelTwoToneIcon />,
    text: "Nr Rooms: 145rooms",
  },
];

const iconsRight = [
  {
    icon: <PoolTwoToneIcon />,
    text: "Swimming Pool: 1x outdoor, 1x thermal",
  },
  {
    icon: <QueryBuilderTwoToneIcon />,
    text: "Check in/out: 3pm / 12pm",
  },
  {
    icon: <LocalCafeTwoToneIcon />,
    text: "Meeting-rooms: 10 spaces",
  },
  {
    icon: <AccessibleForwardTwoToneIcon />,
    text: "Wheelchair accessible : Yes",
  },
];

export default function Camiral() {
  const classes = useStyles();
  return (
    <div id='camiral' className={classes.root}>
      <div className={classes.title}>
        <Typography variant='h4'>Hotel Camiral</Typography>
        <Rating name='read-only' value={5} readOnly />
        <Typography component='subtitle1'>
          <sup>Luxury</sup>{" "}
        </Typography>
      </div>
      <div className={classes.text}>
        <Typography variant='h6' component='h6' paragraph>
          The resort is a contemporary 5-star hotel, part of the PGA Golf Club
          complex. The complex is located inland on the{" "}
          <strong>Costa Brava</strong> region, surrounded by nature, and around
          20 mins drive to the actual coastline. It takes around 1h 15mins by
          bus from <em>BCN airport</em> to the resort. The facilities boast two
          of the best golf courses in <em>Europe</em>, and it is surrounded by
          nature.
        </Typography>
        <Typography variant='h6' component='h6' paragraph>
          <strong>Hotel Camiral</strong> has a total of 145rooms, of different
          categories, but they all feature modern decoration and offer amazing
          views. All in all, the resort breathes tranquility. The Deluxe rooms
          are the ones that are offered to corporate groups more frequently.
        </Typography>
        <Typography variant='h6' component='h6' paragraph>
          The <strong>Meeting rooms</strong> come in many sizes in this hotel,
          but they are all fully equipped. They have a total of 10meeting rooms,
          ranging from 20pax to 450px (theatre set up). All rooms are fitted
          with the latest generation AAVV technology. Free-wifi, LCD projectors
          and all sorts of connection outlets. The rooms have natural light.
        </Typography>
        <Typography variant='h6' component='h6' paragraph>
          Other facilities include <strong>1477</strong> - a fine dining
          restaurant with "al fresco" terrace, <strong>The Club Café</strong> -
          a Clublhouse Bistro for a more informal dining option, the Lounge Bar
          and the Pool bar. If that's your thing, the <em>Wellness centre</em>{" "}
          is just one of a kind.
        </Typography>
        <Typography variant='h6' component='h6' paragraph>
          If you are staying for business, the resort offers a wide range of
          different meeting room sizes, featuring natural light, and good WIFI
          connection.
        </Typography>
      </div>
      <Gallery images={photos} />
      <div className={classes.icons}>
        <List
          component='nav'
          aria-label='main mailbox folders'
          className={classes.left}
        >
          {iconsLeft.map((item, i) => (
            <ListItem key={i}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
        <List
          component='nav'
          aria-label='main mailbox folders'
          className={classes.right}
        >
          {iconsRight.map((item, i) => (
            <ListItem key={i}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  title: {
    display: "flex",
    alignItems: "center",
  },
  text: {
    "& h6": {
      textIndent: "2rem",
    },
  },

  icons: {
    display: "flex",
    justifyContent: "flex-start",
  },
}));

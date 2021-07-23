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
    text: "Location: Central - close to Sagrada Familia",
  },
  {
    icon: <RestaurantTwoToneIcon />,
    text: "Gastro:1 x Restaurants, 2 x bars",
  },
  {
    icon: <WifiTwoToneIcon />,
    text: "High Speed, available",
  },
  {
    icon: <HotelTwoToneIcon />,
    text: "Nr Rooms: 79 rooms",
  },
];

const iconsRight = [
  {
    icon: <PoolTwoToneIcon />,
    text: "Swimming Pool: 1x outdoor, 1x Spa center",
  },
  {
    icon: <QueryBuilderTwoToneIcon />,
    text: "Check in/out: 3pm / 12pm",
  },
  {
    icon: <LocalCafeTwoToneIcon />,
    text: "Meeting-rooms: 1 x meeting room for 60pax",
  },
  {
    icon: <AccessibleForwardTwoToneIcon />,
    text: "Wheelchair accessible : Yes",
  },
];

export default function LaPedrera() {
  const classes = useStyles();
  return (
    <div id='accommodation' className={classes.root}>
      <div className={classes.title}>
        <Typography variant='h4' gutterBottom>
          Hotel Catalonia La Pedrera
        </Typography>
        <Rating name='read-only' value={4} readOnly emptyIcon />
        {/*  <Typography component='subtitle1'>
          <sup>Luxury</sup>{" "}
        </Typography> */}
      </div>
      <div className={classes.text}>
        <Typography variant='h6' component='h6' paragraph>
          The <strong>Hotel La Pedrera</strong> occupies a prime location on the
          modernist route, close to <strong>Sagrada Familia</strong> and the
          famous <em>Passeig de Gràcia</em>
        </Typography>
        <Typography variant='h6' component='h6' paragraph>
          <strong>La Pedrera</strong> is a small/medium sized hotel, with 79
          rooms -broken down into double rooms, premium, superior, superior with
          terrace and junior suites.
        </Typography>
        <Typography variant='h6' component='h6' paragraph>
          Other facilities include Free-wifi, a Bar a snack Bar, a Swiming Pool
          and a restaurant
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

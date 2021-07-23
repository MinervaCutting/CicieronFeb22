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
    text: "Location: Gothic Quarter",
  },
  {
    icon: <RestaurantTwoToneIcon />,
    text: "1 x Outdoor Pool - 1x Restauant 1 piano-Bar/Lounge",
  },
  {
    icon: <WifiTwoToneIcon />,
    text: "High Speed, available",
  },
  {
    icon: <HotelTwoToneIcon />,
    text: "Nr Rooms: 157rooms",
  },
];

const iconsRight = [
  {
    icon: <PoolTwoToneIcon />,
    text: "Swimming Pool: 1x outdoor",
  },
  {
    icon: <QueryBuilderTwoToneIcon />,
    text: "Check in/out: 2pm / 12pm",
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

export default function Montblanc() {
  const classes = useStyles();
  return (
    <div id='Hotel HCC Montblanc' className={classes.root}>
      <div className={classes.title}>
        <Typography variant='h4' gutterBottom>
          Hotel HCC Montblanc
        </Typography>
        <Rating name='read-only' value={3} readOnly emptyIcon />
        {/*  <Typography component='subtitle1'>
          <sup>Luxury</sup>{" "}
        </Typography> */}
      </div>
      <div className={classes.text}>
        <Typography variant='h6' component='h6' paragraph>
          The <strong>HCC Montblanc</strong> is a 3-star hotel which could well
          be classified as a 4-star. The location is unbeatable in Via Laietana,
          right in the Gothic district, and close to Plaça Catalunya and metro
          lines.
        </Typography>
        <Typography variant='h6' component='h6' paragraph>
          Although located in a buzzing street, all 157 rooms are sound proof,
          the building is new and all rooms are modern and well appointed.
          Double Rooms for single or double use are in average 23sqm. Some rooms
          include 10sqm terraces
        </Typography>
        <Typography variant='h6' component='h6' paragraph>
          The property also offers a Restaurant, a Bar/lounge to relax and an a
          spacious outdoor pool.
        </Typography>
        <Typography variant='h6' component='h6' paragraph>
          The property is following the strictest of <strong>COVID</strong>{" "}
          protocols, including all linens sanitized in high-temperature wash,
          floors marked for social distancing, hand sanitizers available
          everywhere, and regularly sanitized high-traffic areas.
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

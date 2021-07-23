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
    text: "Location: Off Plaça Catalunya",
  },
  {
    icon: <RestaurantTwoToneIcon />,
    text: "Gastro: 1 x Lounge Bar",
  },
  {
    icon: <WifiTwoToneIcon />,
    text: "High Speed, available",
  },
  {
    icon: <HotelTwoToneIcon />,
    text: "Nr Rooms: 108rooms",
  },
];

const iconsRight = [
  {
    icon: <PoolTwoToneIcon />,
    text: "Swimming Pool: 1x outdoor",
  },
  {
    icon: <QueryBuilderTwoToneIcon />,
    text: "Check in/out: 3pm / 12pm",
  },
  {
    icon: <LocalCafeTwoToneIcon />,
    text: "Meeting-rooms: 2 spaces",
  },
  {
    icon: <AccessibleForwardTwoToneIcon />,
    text: "Wheelchair accessible : Yes",
  },
];

export default function Jazz() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <Typography variant='h4' gutterBottom>
          Hotel Jazz
        </Typography>
        <Rating name='read-only' value={3} readOnly emptyIcon />
        <Typography component='subtitle1'>
          <sup>Superior</sup>{" "}
        </Typography>
      </div>
      <div className={classes.text}>
        <Typography variant='h6' component='h6' paragraph>
          The <strong>Hotel Jazz</strong> is one of our 3star superior
          favourites in the city. The location could not be better, only a few
          steps away from Plaça Catalunya, and the upper side of{" "}
          <em>Les Rambles</em>
        </Typography>
        <Typography variant='h6' component='h6' paragraph>
          The property is very close to many of Barcelona's attractions, and it
          offers 108 really modern and elegant rooms- some of them are adapted
          for handicapped people. It really looks like a 4-star.
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

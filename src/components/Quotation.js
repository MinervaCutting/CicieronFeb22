import {
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  useScrollTrigger,
  Grid,
  Slide,
  makeStyles,
  Switch,
} from "@material-ui/core";

import AppBody from "./AppBody";
import SidebarMenu from "./SidebarMenu";
import darkLogo from "../assets/logodark.png";
import lightLogo from "../assets/logolight.png";
import { selectDarkMode, SET_DARKMODE } from "../features/DarkModeSlice";
import { useSelector, useDispatch } from "react-redux";
import WbSunnyTwoToneIcon from "@material-ui/icons/WbSunnyTwoTone";
import Brightness2TwoToneIcon from "@material-ui/icons/Brightness2TwoTone";

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  );
}

export default function Quotation(props) {
  const darkMode = useSelector(selectDarkMode);
  const dispatch = useDispatch();

  const toggleDarkMode = () => {
    dispatch(SET_DARKMODE(!darkMode));
  };
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar className={classes.toolbar}>
            <a target='_blank' href='https://www.cuttingedge-events.com'>
              <img
                src={`${darkMode ? darkLogo : lightLogo}`}
                alt='logo'
                className={classes.logo}
              />
            </a>

            <ul className={classes.header_list}>
              <li>
                <Typography
                  variant='h5'
                  color={`${darkMode ? "#fff" : "#000"}`}
                >
                  Quotation prepared for Pavla Lukásová at ASIANA, spol s.r.o
                </Typography>
              </li>
              {/* <li>
                <Typography variant='h5'>Credentials</Typography>
              </li> */}
            </ul>
            <Switch
              checked={darkMode}
              checkedIcon={<WbSunnyTwoToneIcon />}
              icon={<Brightness2TwoToneIcon />}
              onChange={toggleDarkMode}
            />
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      <Grid container spacing={3}>
        <Grid item xs={12} sm={3} className={classes.sidebar}>
          <SidebarMenu />
        </Grid>
        <Grid item xs={12} sm={9}>
          <AppBody />
        </Grid>
      </Grid>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  [theme.breakpoints.up("sm")]: {
    sidebar: {
      position: "relative",
    },
  },
  header_list: {
    "& li h5": {
      [theme.breakpoints.down("md")]: {
        fontSize: "1rem",
      },
    },
  },

  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0 2rem",
    "& ul": {
      display: "flex;",
      listStyleType: "none",
      "& li": {
        margin: "0 2rem",
        cursor: "pointer",
      },
    },
  },
  logo: {
    width: "10rem",
  },
}));

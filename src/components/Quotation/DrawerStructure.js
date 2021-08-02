import { useState } from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  useScrollTrigger,
  Slide,
  Drawer,
  Hidden,
  IconButton,
  Switch,
  Typography,
  makeStyles,
  useTheme,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { selectDarkMode, SET_DARKMODE } from "../../features/DarkModeSlice";
import { useSelector, useDispatch } from "react-redux";
import darkLogo from "../../assets/logodark.png";
import lightLogo from "../../assets/logolight.png";
import WbSunnyTwoToneIcon from "@material-ui/icons/WbSunnyTwoTone";
import Brightness2TwoToneIcon from "@material-ui/icons/Brightness2TwoTone";
import AppBody from "./AppBody";
import SidebarMenu from "./SidebarMenu";

const drawerWidth = 240;

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

export default function DrawerStructure(props) {
  const darkMode = useSelector(selectDarkMode);
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const dispatch = useDispatch();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;
  const toggleDarkMode = () => {
    dispatch(SET_DARKMODE(!darkMode));
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              edge='start'
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
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
      <nav className={classes.drawer} aria-label='mailbox folders'>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation='css'>
          <Drawer
            container={container}
            variant='temporary'
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <SidebarMenu />
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation='css'>
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant='permanent'
            open
          >
            <SidebarMenu />
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <AppBody />
      </main>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: {
    ...theme.mixins.toolbar,

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
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  header_list: {
    "& li h5": {
      [theme.breakpoints.down("md")]: {
        fontSize: "1rem",
      },
    },
  },
  logo: {
    width: "10rem",
  },
}));

import {
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  useScrollTrigger,
  Grid,
  Slide,
  makeStyles,
} from "@material-ui/core";
import AppBody from "./AppBody";
import SidebarMenu from "./SidebarMenu";
import logo from "../assets/logodark.png";

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
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar className={classes.toolbar}>
            <img src={logo} alt='logo' className={classes.logo} />
            <ul>
              <li>
                <Typography variant='h5'>Home</Typography>
              </li>
              <li>
                <Typography variant='h5'>Credentials</Typography>
              </li>
            </ul>
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

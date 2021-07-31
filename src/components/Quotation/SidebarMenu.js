import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import {
  Typography,
  ListSubheader,
  List,
  ListItem,
  ListItemText,
  Collapse,
} from "@material-ui/core";
import { Link } from "react-scroll";
import { toc } from "../../data/table_of_contents";
import { useDispatch } from "react-redux";
import { SET_TABOPTION } from "../../features/TabOptionSlice";

export default function SidebarMenu() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = useState({
    open: false,
  });

  return (
    <List
      dense
      component='nav'
      aria-labelledby='nested-list-subheader'
      subheader={
        <ListSubheader component='div' id='nested-list-subheader'>
          <Typography variant='h6'>Table of Contents</Typography>
        </ListSubheader>
      }
      className={classes.root}
    >
      {toc.map((item) => (
        <div key={item.id}>
          <Link
            to={item.id}
            spy={true}
            smooth={true}
            activeClass='active'
            duration={500}
            offset={-70}
          >
            <ListItem
              button
              onClick={() => setOpen({ ...open, [item.id]: !open[item.id] })}
            >
              <ListItemText
                primary={<Typography variant='h6'>{item.title}</Typography>}
                disableTypography
              />
              {item.options ? (
                open[item.id] ? (
                  <ExpandLess />
                ) : (
                  <ExpandMore />
                )
              ) : null}
            </ListItem>
          </Link>

          <Collapse in={open[item.id]} timeout='auto' unmountOnExit>
            <List
              component='div'
              disablePadding
              dense
              onMouseLeave={() =>
                setOpen({ ...open, [item.id]: !open[item.id] })
              }
            >
              {item.options?.map((option) => (
                <Link
                  key={option.id}
                  to={option.id}
                  spy={true}
                  smooth={true}
                  activeClass='active'
                  duration={700}
                  offset={-0}
                >
                  <ListItem button className={classes.nested}>
                    <ListItemText
                      primary={option.service}
                      onClick={(e) =>
                        dispatch(SET_TABOPTION(option.tabPosition))
                      }
                    />
                  </ListItem>
                </Link>
              ))}
            </List>
          </Collapse>
        </div>
      ))}
    </List>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,

    [theme.breakpoints.up("sm")]: {
      position: "sticky",
      top: 100,
      left: 0,
    },
  },
  nested: {
    paddingLeft: theme.spacing(3),
  },
}));

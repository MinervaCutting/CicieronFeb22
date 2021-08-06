import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import TreeItem from "@material-ui/lab/TreeItem";
import { toc } from "../../data/table_of_contents";
import { Link } from "react-scroll";
import { useDispatch } from "react-redux";
import { SET_TABOPTION } from "../../features/TabOptionSlice";

export default function MultiSelectTreeView() {
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      multiSelect
    >
      {toc.map((item) => (
        <Link
          to={item.id}
          spy={true}
          smooth={true}
          activeClass='active'
          duration={500}
          offset={-70}
        >
          <TreeItem key={item.id} nodeId={item.id} label={item.title}>
            {item.options?.map((option) => (
              <Link
                to={option.id}
                spy={true}
                smooth={true}
                activeClass='active'
                duration={500}
                offset={-70}
              >
                <TreeItem
                  key={option.id}
                  nodeId={option.id}
                  label={option.service}
                >
                  {option.choices?.map((choice) => (
                    <TreeItem
                      key={choice.id}
                      nodeId={choice.id}
                      label={choice.service}
                      onClick={(e) =>
                        dispatch(SET_TABOPTION(choice.tabPosition))
                      }
                    />
                  ))}
                </TreeItem>
              </Link>
            ))}
          </TreeItem>
        </Link>
      ))}
    </TreeView>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "fit-content",
    maxWidth: 360,
    marginLeft: theme.spacing(2),

    [theme.breakpoints.up("sm")]: {
      position: "sticky",
      top: 100,
      left: 0,
    },
  },
}));

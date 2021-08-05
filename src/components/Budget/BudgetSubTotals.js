import { getHospitalityTotal, getSubTotal } from "../../utils/utils";
import { makeStyles, Paper } from "@material-ui/core";
import { Icon } from "@iconify/react";

export default function BudgetSubTotals({ cost, itemType, icon }) {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Icon icon={icon} className={classes.icon} />
      <div className={classes.money}>
        {itemType !== "Hospitality" ? (
          <div>{getSubTotal(cost, itemType)}</div>
        ) : (
          <div>{getHospitalityTotal(cost, itemType)}</div>
        )}
      </div>
      <div className={classes.title}>{itemType}</div>
    </Paper>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "200px",
    height: "200px",
    position: "relative",
  },
  icon: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#ea5933",
    opacity: 0.4,
  },
  money: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 50,
  },
  title: {
    position: "absolute",
    bottom: 0,
    right: 10,
    fontSize: 35,
  },
}));

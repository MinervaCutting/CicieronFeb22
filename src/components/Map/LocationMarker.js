import { Icon } from "@iconify/react";

import { makeStyles, SvgIcon } from "@material-ui/core";

export default function LocationMarker({ lat, lng, onClick, icon }) {
  const classes = useStyles();
  return (
    <div className={classes.location_marker} onClick={onClick}>
      <Icon icon={icon} className={classes.location_icon} />
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  location_icon: {
    fontSize: "2.5rem",
    color: "#ea5933",
  },
}));

import { useState } from "react";
import { Button, Menu, MenuItem, Typography } from "@material-ui/core";
import RoomTwoToneIcon from "@material-ui/icons/RoomTwoTone";
import SentimentSatisfiedTwoToneIcon from "@material-ui/icons/SentimentSatisfiedTwoTone";

export default function AboutRFP() {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Button onMouseOver={handleClick}>
        <Typography variant='h5'>About your RFP</Typography>
      </Button>
      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <Typography variant='h6'>
            <em>
              Quotation written for <strong>Pavla Szencei at ASIANA srl</strong>{" "}
              - group <strong>Generali</strong>
            </em>
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <span>
            <RoomTwoToneIcon fontSize='large' />
          </span>
          {"  "}
          <Typography variant='h6'>Destination</Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <span>
            <SentimentSatisfiedTwoToneIcon fontSize='large' />
          </span>
          {"  "}
          <Typography variant='h6'>Credentials</Typography>
        </MenuItem>
      </Menu>
    </>
  );
}

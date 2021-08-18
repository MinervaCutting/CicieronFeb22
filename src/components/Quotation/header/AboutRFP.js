import { useState } from "react";
import { Avatar, Button, Snackbar } from "@material-ui/core";
import parse from "html-react-parser";

const message = `Hey, I'm <strong>Montse Miranda</strong>,
and I will be your account manager for this beautiful project !!!`;

export default function AboutRFP() {
  const [state, setState] = useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;

  const handleClick = () => {
    setState({ ...state, open: true });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  return (
    <>
      <Button onMouseOver={handleClick}>
        <Avatar />
      </Button>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message={parse(message)}
        key={vertical + horizontal}
      />
    </>
  );
}

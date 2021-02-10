import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const BootstrapButton = withStyles({
  root: {
    outline: "none",
    boxShadow: "none",
    textTransform: "none",
    fontSize: 16,
    padding: "6px 12px",
    border: "1px solid",
    lineHeight: 1.5,
    backgroundColor: "#1172da",
    borderColor: "#0063cc",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
      backgroundColor: "#599de6",
      borderColor: "#9eccfd",
      boxShadow: "none",
    },
  },
})(Button);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(3),
  },
}));

export default function CustomizedButtons({ handleToggle }) {
  const classes = useStyles();

  return (
    <div onClick={handleToggle}>
      <BootstrapButton
        variant="contained"
        color="primary"
        disableRipple
        className={classes.margin}
      >
        Show Profile
      </BootstrapButton>
    </div>
  );
}

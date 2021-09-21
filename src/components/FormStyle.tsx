import { makeStyles, Theme, createStyles } from "@material-ui/core";

const fromStyles = makeStyles((theme: Theme) =>
  createStyles({
    wall: {
      background: "#e5e5e5",
      width: "100%",
      minHeight: "900px",
    },
    body: {
      maxWidth: "614px",
      margin: "0 auto",
      height: "5px",
    },
    button: {
      background: "#02e0b1",
      color: "white",
      textTransform: "uppercase",
      border: "none",

      padding: "20px",
      fontSize: "16px",
      fontWeightProperty: "100",
      letterSpacing: "10px",
      width: "366px",
      "& .input:disabled": {
        opacity: "0.4",
      },
    },
  })
);

export default fromStyles;

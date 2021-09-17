import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import Australia from "/home/ishfaq/training-app/src/flags/Australia.png"
import america from "/home/ishfaq/training-app/src/flags/america.png"
import { Typography } from "@material-ui/core";

const flags = {
  imgs: [america, Australia],
  name: ["+1-United States", "+61-Australia"]
}
const useStyles = makeStyles({
  flags: {
    paddingLeft: "12px"

  }
});

export interface SimpleDialogProps {
  open: boolean;
  selectedIndex: number;
  onClose: (selectedIndex: number) => void;
}

function SimpleDialog(props: SimpleDialogProps) {
  const classes = useStyles();
  const { onClose, selectedIndex, open } = props;

  const handleClose = () => {
    onClose(selectedIndex);
  };

  const handleListItemClick = (selectedIndex: number) => {
    onClose(selectedIndex);
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle id="simple-dialog-title">Select country</DialogTitle>
      <List>
        {flags.imgs.map((img, selectedIndex) => (
          <ListItem
            button
            onClick={() => handleListItemClick(selectedIndex)}
            key={img}>
            <img src={img} alt="logo" />
            <Typography variant="subtitle1" className={classes.flags}> {flags.name[selectedIndex]}</Typography>
          </ListItem>

        ))}

      </List>
    </Dialog>
  );
}

export default function FlagSelect(props: any) {
  const [open, setOpen] = useState(props.value ? true : false);
  

  //console.log("open and props : ", open,props.value)

  useEffect(() => {
    setOpen(props.value)
  }, [props.value]);

  const handleClose = (index: number) => {
    setOpen(false);
    //console.log("close log", index);
    props.callBack(index)
  };

  return (
    <div>
      <SimpleDialog
        selectedIndex={0}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}

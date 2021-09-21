import { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Australia from 'flags/Australia.png';
import america from 'flags/america.png';
import { Typography, List, ListItem, DialogTitle, Dialog } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
  flags: {
    paddingLeft: '12px',
  },
});

const Flags = [
  {
    img: america,
    code: '+1-United States',
  },
  {
    img: Australia,
    code: '+61-Australia',
  },
];
interface SimpleDialogProps {
  open: boolean;
  selectedIndex: number;
  onClose: (selectedIndex: number) => void;
}

function SimpleDialog(props: SimpleDialogProps) {
  const classes = useStyles();
  const { onClose, selectedIndex, open } = props;
  const handleClose = () => onClose(selectedIndex);
  const handleListItemClick = (selectedIndex: number) => onClose(selectedIndex);

  return (
    <Dialog onClose={handleClose} aria-labelledby='simple-dialog-title' open={open}>
      <DialogTitle id='simple-dialog-title'>Select country</DialogTitle>
      <List>
        {Flags.map((row, selectedIndex) => (
          <ListItem button onClick={() => handleListItemClick(selectedIndex)} key={row.img}>
            <img src={row.img} alt='logo' />
            <Typography variant='subtitle1' className={classes.flags}>
              {' '}
              {row.code}
            </Typography>
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}

export default function FlagSelect(props: any) {
  const [open, setOpen] = useState(props.isFlagDialog ? true : false);

  useEffect(() => {
    setOpen(props.isFlagDialog);
  }, [props.isFlagDialog]);

  const handleClose = (index: number) => {
    setOpen(false);
    console.log('callBack ', props);
    props.getIndex(index);
  };

  return (
    <div>
      <SimpleDialog selectedIndex={0} open={open} onClose={handleClose} />
    </div>
  );
}

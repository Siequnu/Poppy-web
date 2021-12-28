import React from 'react';
import Slide from '@mui/material/Slide';
import Dialog from '@mui/material/Dialog';

import CardComponent from '../Card/CardComponent';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ActivityPreviewDialog(props) {
  const { onClose, product, open } = props;

  return (
    <Dialog onClose={onClose} open={open} TransitionComponent={Transition}>
      <CardComponent cards={[product]} margin={0} height="auto" />
    </Dialog>
  );
}
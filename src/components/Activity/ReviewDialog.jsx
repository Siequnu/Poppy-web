import React from 'react';

import { Link as RouterLink } from 'react-router-dom';
import { Link, Button, TextField } from '@mui/material';

import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

import Rate from 'rc-rate';
import 'rc-rate/assets/index.css';

import FeedbackSlider from './Slider';

import './ReviewDialog.css';

export default function ReviewDialog(props) {

    const [feelingSliderValue, setFeelingSliderValue] = React.useState(70);
    const [sliderValue, setSliderValue] = React.useState(0);
    const [userFeedback, setUserFeedback] = React.useState('');

    const handleSliderChange = (event, value) => setFeelingSliderValue(value)

    const gatherData = () => {
        const feedback = 
            {
                feeling: feelingSliderValue,
                slider: sliderValue,
                userFeedback: userFeedback
            }

        props.onSubmit(feedback)
    }

    const submitWithoutData = () => {
        const feedback = {}
        props.onSubmit(feedback)
    }

    return (
        <Dialog  onClose={submitWithoutData} open={props.open} disableEnforceFocus>
            <DialogTitle align="center" id="dialog-title">Congratulations! 🎉</DialogTitle>
            <DialogContent align="center"  className="ReviewDialogContent">
                <DialogContentText>
                    How did you feel?
                        <FeedbackSlider value={feelingSliderValue} onChange={handleSliderChange}/>
                </DialogContentText>
                <DialogContentText>
                    How would you rate this activity?
                        <br />
                    <Rate value={sliderValue} onChange={setSliderValue}/>
                </DialogContentText>
                <DialogContentText>

                    <TextField
                        fullWidth
                        align="center" 
                        variant="standard" 
                        id="feedbackText"
                        multiline
                        name="feedbackText"
                        label="Any notes to yourself?"
                        value={userFeedback}
                        onChange={event => setUserFeedback(event.target.value)}
                    />
                </DialogContentText>

            </DialogContent>
            <DialogActions>
                <Link component={RouterLink} to={{ pathname: "/" }} style={{ textDecoration: 'none' }}>
                    <Button onClick={submitWithoutData}>
                        Skip
                    </Button>
                </Link>
                <Link component={RouterLink} to={{ pathname: "/" }} style={{ textDecoration: 'none' }}>
                    <Button variant="contained" onClick={gatherData} color="primary" type="submit">
                    Done
                    </Button>
                </Link>
            </DialogActions>
        </Dialog>
    )
}
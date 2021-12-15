import React from 'react';
import './Contact.css';

import { useFormik } from 'formik';

import { TextField, Button } from '@mui/material';

import { SnackbarContext } from '../../App';

import { postApiData } from '../../services/api.service';

import Confetti from 'confetti-react'

export default function Contact() {

    const { setSnackbar } = React.useContext(SnackbarContext);

    const width = window.innerWidth;
    const height = window.innerHeight;
    const [recycleConfetti, setRecycleConfetti] = React.useState (true)
    const [confetti, setConfetti] = React.useState(false)
    const [submitted, setSubmitted] = React.useState(false)

    React.useEffect(() => {
        if (submitted) {
            setConfetti(true);
            setTimeout(() => {
                setRecycleConfetti(false);
            }, 3000);
            setTimeout(() => {
                setConfetti(false);
            }, 10000);
        }
    }, [submitted]);

    var initialValues = {
        name: '',
        email: '',
        inquiry: ''
    }

    const handleNewInquiry = (values) => {
        setSubmitted(true);
        postApiData('/api/inquiries/add', values).then(
          response => setSnackbar({
            text: response.success || response.error,
            open: true,
            severity: (response.success ? 'success' : 'error')
          })
        )
      };

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: initialValues,
        onSubmit: (values) => {
            handleNewInquiry(values);
        },
    });

    if (submitted) {
        return <div>
            <Confetti
                width={width}
                height={height}
                run={confetti}
                recycle={recycleConfetti}
            />
            <h1>Let's talk soon.</h1>
        </div>
    }
    
    return (
        <div>
            <h1>Get in touch!</h1>
            <form onSubmit={formik.handleSubmit} style={{'margin': '20px'}}>
                <TextField
                    id="name"
                    name="name"
                    variant="standard"
                    label="Your name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                />
                <TextField
                    id="email"
                    variant="standard"
                    name="email"
                    label="Your email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                />
                <TextField
                    fullWidth
                    id="inquiry"
                    variant="standard"
                    name="inquiry"
                    label="Your inquiry"
                    value={formik.values.inquiry}
                    onChange={formik.handleChange}
                />
                <Button variant="contained" color="primary" type="submit" style={{'margin': '20px'}}>
                    Submit
                </Button>
            </form>
        </div>
    )
}
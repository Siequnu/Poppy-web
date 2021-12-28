import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import { useFormik } from 'formik';

import { Button, TextField } from '@mui/material';

import { SnackbarContext } from '../../App';

function Reset(props) {

    const { setSnackbar } = React.useContext(SnackbarContext);

    const formik = useFormik({
        initialValues: {
            email: '',
        },
        onSubmit: (values) => {
            fetch('/auth/reset', {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(response => response.json())
                .then(data => {
                    if (data.hasOwnProperty('error')) {
                        throw data.error;
                    }
                    
                    setSnackbar({
                        text: data.success,
                        open: true,
                        severity: 'success'
                    })

                    props.history.push('login');
                    
                })
                .catch(function (error) {
                    
                    setSnackbar({
                        text: error,
                        open: true,
                        severity: 'error'
                    })

                })
        },
    });

    // Display an email form, to which reset email can be sent
    return (
        <div className="AuthForm">
            <form onSubmit={formik.handleSubmit}>
                <TextField
                    fullWidth
                    variant="standard"
                    id="email"
                    name="email"
                    label="Email"
                    type="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                />

                <Button color="primary" variant="contained" fullWidth type="submit">
                    Send password reset email
                </Button>

                <Button component={Link} to="/login">
                    Back to Login
                </Button>
            </form>
        </div>
    )
}

export default withRouter(Reset)
import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import './Auth.css';

import { useFormik } from 'formik';
import { Button, TextField } from '@mui/material';
import { authenticationService } from '../../services';

import { SnackbarContext } from '../../App';

import config from '../../config';

function SignUp(props) {

    const { setSnackbar } = React.useContext(SnackbarContext);

    if (authenticationService.currentUserValue) {
        props.history.push('/');
    }

    
    if (!config.signupEnabled) {
        setSnackbar({
            text: 'Sign-ups are currently disabled',
            open: true,
            severity: 'warning'
        });
        props.history.push('/');
    }

    // Async validation
    const validate = async (values, props) => {
        const validation = await authenticationService.validateRegistration(values.username, values.email);
        
        const errors = {};
        
        if (['admin', 'null', 'god'].includes(values.username)) {
            errors.username = 'Please choose a different username';
        }
        if (validation.username_exists)
            errors.username = 'This username is already taken';
        if (validation.email_exists)
            errors.email = 'This email is already registered';

        Object.entries(errors).map(error => {
            setSnackbar({
                text: error.pop(),
                open: true,
                severity: 'warning'
            })
            return true
        })
        
        return errors;
    };


    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
        },
        onSubmit: (values) => {
            authenticationService.signUp(values.username, values.email, values.password)
                .then(
                    (user) => {
                        props.history.push('/login');

                        setSnackbar({
                            text: `An email has been sent to ${values.email}. Please open it to continue.`,
                            open: true,
                            severity: 'success'
                        })
                    }
                );
        },
        validate: validate,
    });

    return (
        <div className="AuthForm">
            <form onSubmit={formik.handleSubmit}>
                <TextField
                    fullWidth
                    variant="standard"
                    id="username"
                    name="username"
                    label="Username"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    error={formik.touched.username && Boolean(formik.errors.username)}
                />
                <TextField
                    fullWidth
                    variant="standard"
                    id="email"
                    name="email"
                    label="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                />
                <TextField
                    fullWidth
                    variant="standard"
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                />
                <Button className="SubmitButton" color="primary" variant="contained" fullWidth type="submit">
                    Submit
                </Button>
                <Button component={Link} to="/login" className="ResetPasswordButton">
                    Back to log-in
                </Button>
            </form>
        </div>
    )
}

export default withRouter(SignUp);
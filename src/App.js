// React imports
import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Authentication imports
import { PrivateRoute } from './components/Auth/PrivateRoute';
import Login from './components/Auth/Login';
import Logout from './components/Auth/Logout';
import ResetWithToken from './components/Auth/ResetWithToken';
import Reset from './components/Auth/Reset';
import SignUp from './components/Auth/SignUp';
import ConfirmEmail from './components/Auth/ConfirmEmail';

// App styling
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline';
import useMediaQuery from '@mui/material/useMediaQuery';

// Navigation components
import Navbar from './components/Navbar/Navbar';
import TopBar from './components/TopBar/TopBar';

// Page components
import Home from './components/Home/Home.jsx'
import SplashScreen from './components/SplashScreen/SplashScreen';
import UserMenu from './components/UserMenu/UserMenu.jsx';
import About from './components/About/About';
import CourseMaterials from './components/CourseMaterials/CourseMaterials';
import Contact from './components/Contact/Contact';

// Admin components
import Dashboard from './components/Dashboard/Dashboard';

// Notifications
import Snackbar from '@mui/material/Snackbar';
import { Alert } from '@mui/material';

export const SnackbarContext = React.createContext();


export default function App() {

  const [splashScreen, setSplashScreen] = React.useState(true)

  useEffect(() => {
    setTimeout(() => {
      setSplashScreen(false)
    }, 1500);
  }, []);

  const theme = createTheme({
    palette: {
      mode: (useMediaQuery('(prefers-color-scheme: dark)') ? 'dark' : 'light'),
      primary: {
        main: '#FD37AA'
      },
      secondary: {
        main: '#CAE8FF'
      }
    },
    typography: {
      h1: {
        fontFamily: [
          'Bona Nova',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(','),
      },
      fontFamily: [
        'Assistant',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(',')
    },
    components: {
      MuiTouchRipple: {
        styleOverrides: {
          child: {
            backgroundColor: '#FD37AA'
          }
        }
      }
    }
  });

  // Snackbar
  const [snackbar, setSnackbar] = React.useState({
    text: '',
    severity: 'info', // default value
    open: false,
  });
  const handleClose = () => {
    setSnackbar({ open: false });
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <link rel="shortcut icon" href="./favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Assistant:wght@200;300;400;500;600&family=Bona+Nova:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />


        <header className="App-header">

          <SnackbarContext.Provider value={{ snackbar, setSnackbar }}>

            <Snackbar open={snackbar.open} autoHideDuration={6000} onClose={handleClose}>
              <Alert onClose={handleClose} severity={snackbar.severity}>
                {snackbar.text}
              </Alert>
            </Snackbar>

            {splashScreen ? (<SplashScreen />) : (

              <BrowserRouter>

                <TopBar />

                <div className="AppWrapper">

                  <Switch>
                    <Route exact path="/"> <Home /> </Route>

                    <Route exact path="/about" component={About} />
                    <Route exact path="/library" component={CourseMaterials} />

                    <Route exact path="/contact" component={Contact} />

                    <PrivateRoute exact path="/user" component={UserMenu} />

                    <Route exact path="/login" component={Login} />
                    <Route exact path="/logout" component={Logout} />
                    <Route exact path="/reset" component={Reset} />
                    <Route exact path="/register" component={SignUp} />
                    <Route exact path="/confirm/:token" component={ConfirmEmail} />
                    <Route exact path="/reset/:token" component={ResetWithToken} />

                    <PrivateRoute exact path="/dashboard" component={Dashboard} />
                  </Switch>

                </div>

                <Navbar />

              </BrowserRouter>
            )}

          </SnackbarContext.Provider>
        </header>
      </div>
    </ThemeProvider>
  );
}

// React imports
import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Authentication imports
import { PrivateRoute } from './views/Auth/PrivateRoute';
import Login from './views/Auth/Login';
import Logout from './views/Auth/Logout';
import ResetWithToken from './views/Auth/ResetWithToken';
import Reset from './views/Auth/Reset';
import SignUp from './views/Auth/SignUp';
import ConfirmEmail from './views/Auth/ConfirmEmail';

// App styling
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline';
import useMediaQuery from '@mui/material/useMediaQuery';

// Navigation components
import Navbar from './components/Navbar/Navbar';
import TopBar from './components/TopBar/TopBar';

// Page components
import Home from './views/Home/Home.jsx'
import SplashScreen from './views/SplashScreen/SplashScreen';
import UserMenu from './views/UserMenu/UserMenu.jsx';
import Art from './views/Art/Art';
import Contact from './views/Contact/Contact';
import Collection from './views/Collection/Collection';

// Admin components
import Dashboard from './views/Dashboard/Dashboard';

// Notifications
import Snackbar from '@mui/material/Snackbar';
import { Alert } from '@mui/material';

// Scrolling
import ScrollToTop from './helpers/scroll-to-top';

export const SnackbarContext = React.createContext();


export default function App() {

  const [splashScreen, setSplashScreen] = React.useState(false)

  useEffect(() => {
    setTimeout(() => {
      setSplashScreen(false)
    }, 800);
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

                <ScrollToTop />

                <div className="AppWrapper">

                  <Switch>
                    <Route exact path="/"> <Home /> </Route>

                    <Route exact path="/art" component={Art} />
                    <Route exact path="/collection/:collectionId" component={Collection} />

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

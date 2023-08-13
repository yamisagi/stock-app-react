import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppRouter from './router/AppRouter';
import { grey, blueGrey, purple } from '@mui/material/colors';
import { Provider } from 'react-redux';
import store from './app/store';
import { ToastContainer } from 'react-toastify';

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: grey['900'],
        button: purple['600'],
        text: grey['50'],
        buttonHover: purple['800'],
        textHeaderColor: purple['800'],
      },
      secondary: {
        main: blueGrey['900'],
      },
    },
    typography: {
      fontFamily: 'Poppins',
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <AppRouter />
        </Provider>
        <ToastContainer />
      </ThemeProvider>
    </>
  );
}

export default App;

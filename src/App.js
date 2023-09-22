import logo from "./logo.svg";
import "./App.css";
import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material";
import MainRoutes from "./routes";

import Routes from './routes';

const theme = createTheme({
  typography: {
    fontFamily: ["Poppins"].join(","),
    fontSize: 13
  },
  palette: {
    primary: {
      main: '#b66dff',
      contrastText: '#fff',
    },
    secondary: {
      main: '#d8d8d8'
    },
    background: {
      default: "#f2edf3"
    },
    danger: {
      main: "#973030"
    }
  },
  shadows: Array(25).fill('none')
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack> */}
      {/* <NavBar></NavBar> */}
      {/* <MainLayout></MainLayout> */}
      <Routes />
    </ThemeProvider>
  );
}

export default App;

import Quotation from "./components/Quotation";
import { Container } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import { selectDarkMode } from "./features/DarkModeSlice";

function App() {
  const darkMode = useSelector(selectDarkMode);
  const theme = createTheme({
    palette: {
      type: darkMode ? "dark" : "light",
      primary: {
        main: darkMode ? "#22281b" : "#DDBCB0",
        contrastText: "#fff",
      },
      secondary: {
        main: "#ea5933",
        contrastText: "#fff",
      },
    },
    typography: {
      fontFamily: "Barlow Condensed",
      fontWeightLight: 400,
      fontWeightRegular: 500,
      fontWeightBold: 700,
      h4: {
        color: "#ea5933",
      },
    },
    overrides: {
      MuiListItemText: {
        dense: {
          color: "#ea5933",
          "&:hover": {
            backgroundColor: "#ea5933",
            color: "#fff",
          },
        },
      },
      MuiSwitch: {
        switchBase: {
          color: "#0000ff",
        },
        colorSecondary: {
          "&$checked": {
            color: "#ffff00",
          },
        },
        track: {
          opacity: 0.2,
          backgroundColor: "#fff",
          width: 50,
        },
      },
    },
  });
  return (
    <Container maxWidth='lg'>
      <ThemeProvider theme={theme}>
        <Quotation />
      </ThemeProvider>
    </Container>
  );
}

export default App;

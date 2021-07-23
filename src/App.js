import Quotation from "./components/Quotation";
import { Container } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#22281b",
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
  },
});

function App() {
  return (
    <Container maxWidth='lg'>
      <ThemeProvider theme={theme}>
        <Quotation />
      </ThemeProvider>
    </Container>
  );
}

export default App;

import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import NavBar from "./components/navbar";
import { Cards } from "./components/main";
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <NavBar />
        <Cards />
      </div>
    </ThemeProvider>
  );
}

export default App;

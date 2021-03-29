import React, {useState} from "react"
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./constants/theme";
import Router from "./router/Router"
import Header from "./components/Header/Header";
import { BrowserRouter } from "react-router-dom";


function App() {

  const token = localStorage.getItem("token")
  const [rightButtonText, setRightButtonText] = useState(token ? "Sair" : "Entrar")

  return ( 
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header  rightButtonText = {rightButtonText} setRightButtonText = {setRightButtonText}/>
        <Router  setRightButtonText = {setRightButtonText}/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

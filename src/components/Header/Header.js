import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { StyledToolbar } from './styled'
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom"


export default function Header({rightButtonText, setRightButtonText}) {

    const token = localStorage.getItem("token")  

    const history = useHistory()

    const goToLogin = () => {
        history.push("/login")
    }

    const goToHomepage = () => {
        history.push("/")
    }

    const logout = () => {
      localStorage.removeItem("token")
    }

    const rightButtonAction = () => {
      if(token){
          logout()
          setRightButtonText("Entrar")
          goToLogin(history)
      } else {
        goToLogin(history)
      }
    }

    return (
        <AppBar position="static">
            <StyledToolbar>
            <Button onClick={() => goToHomepage(history)} color="inherit">
                <h2>LabeX</h2>
            </Button>
            <Button onClick={rightButtonAction} color="inherit">
                {rightButtonText}
            </Button>
            </StyledToolbar>
        </AppBar>
    );
}
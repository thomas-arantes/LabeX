import React, { useEffect } from 'react'
import {useHistory} from 'react-router-dom'
import { useInput } from '../../hooks/useInput.js'
import axios from 'axios'
import { Button, TextField } from "@material-ui/core"
import Header from '../../components/Header/Header.js'

const LoginPage = () => {
    const [email, handleEmail] = useInput(); 
    const [password, handlePassword] = useInput(); 
    const history = useHistory(); 

    useEffect(() => {
      const token = localStorage.getItem("token");

      if(token) {
        history.push("/trips/list")
      }
    }, [history]);

    const login = () => {
      const body = {
        email: email, 
        password: password
      };

      axios
        .post(
          "https://us-central1-labenu-apis.cloudfunctions.net/labeX/thomas-dumont/login", body
        )
        .then((response) => {
          localStorage.setItem("token", response.data.token);
          history.push("/trips/list")
        })
    }



    return (
      <div className="App">
          <Header />
          <div>
            <p>E-mail:</p>
            <TextField 
              name = {"email"}
              value = {email} 
              label = {"E-mail"}
              variant = {"outlined"}
              type = {"email"}
              onChange = {handleEmail} />
            <p>Senha:</p>
            <TextField 
              name = {"password"}
              label = {"Senha"}
              type = {"password"}
              variant = {"outlined"}
              value = {password} 
              onChange = {handlePassword} />
            <Button 
              onClick = {login}> 
                Login 
            </Button>
        </div>
      </div>
    );
  }
  
  export default LoginPage;
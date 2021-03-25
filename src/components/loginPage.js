import React, { useEffect } from 'react'
import {Header,} from './styles.js'
import {useHistory} from 'react-router-dom'
import { useInput } from '../hooks/useInput.js'
import axios from 'axios'

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
          <Header>
              <p>Logo</p>
          </Header>
          <div>
            <p>E-mail:</p>
            <input value = {email} onChange = {handleEmail} />
            <p>Senha:</p>
            <input type = "password" value = {password} onChange = {handlePassword} />
            <button onClick = {login}> Login </button>
        </div>
      </div>
    );
  }
  
  export default LoginPage;
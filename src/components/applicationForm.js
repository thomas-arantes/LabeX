import React, { useState, useEffect} from 'react'
import {Header,} from './styles.js'
import {useHistory} from 'react-router-dom'
import { useInput } from '../hooks/useInput.js'
import axios from 'axios'

const ApplicationForm = () => {
  const [form, handleForm] = useInput({
    name: "",
    age: "",
    applicationText: "",
    job: "",
    country: "",
  })
  const [selectTrip, handleSelectTrip] = useInput();
  const [trips, setTrips] = useState([]);
  const history = useHistory(); 

  useEffect(() => {
    getTrips();
  }, []);

  const getTrips = () => {
    const body = {
      name: form.name,
      age: form.age,
      applicationText: form.applicationText,
      profession: form.job,
      country: form.country,
    }

    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/thomas-dumont/trips", body,
          {
            headers: {
            auth: localStorage.getItem("token")
            }
          }
        )
          .then((response) => {
            setTrips(response.data.trips)
          })
            .catch((error) => {
              console.log(error);
          })
        }
  
  const applyToTrip = () =>{
    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/thomas-dumont/trips/${selectTrip}/apply`,
        {
          headers: {
          auth: localStorage.getItem("token")
          },

        }
      )
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
    }      
   

  const goToLoginPage = () => {
    history.push("/login")
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
  }

  console.log(selectTrip)

  return (
    <div className="App">
      <Header>
        <p>Logo</p>
          <button onClick = {goToLoginPage}>Login</button>
      </Header>
      <div>

        <form onSubmit={onSubmitForm}> 

          <p>Nome:</p>
          <input name = {"name"} value = {form.name} type={"text"} onChange = {handleForm} pattern = {"[a-zA-ZsÀ-ú ]{3,}"} required/>

          <p>Idade:</p>
          <input name = {"age"} value = {form.age} type={"number"} onChange = {handleForm} min="18" required />

          <p>Texto de aplicação:</p>
          <input name = {"applicationText"} value = {form.applicationText} type = {"text"} pattern = {"[a-zA-ZsÀ-ú ]{30,}"} onChange = {handleForm} required/>

          <p>Profissão:</p>
          <input name = {"profession"} value = {form.job} type = {"text"} pattern = {"[a-zA-ZsÀ-ú ]{10,}"} onChange = {handleForm} required />

          <p>País:</p>
          <input value = {form.country} onChange = {handleForm} />

          <p>Viagens:</p>
          <select name = "trip" value = {selectTrip} onChange={handleSelectTrip} >
            {trips.map((trip) => {
              return(<option value = {trip.id}> {trip.name} </option>)
            })}        
          </select>

        </form>
        
        <button onClick = {applyToTrip}> Enviar </button>

        </div>
      </div>
    );
  }
  
  export default ApplicationForm;
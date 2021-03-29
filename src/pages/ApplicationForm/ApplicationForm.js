import React, { useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import { useInput } from '../../hooks/useInput.js'
import { Button, TextField } from "@material-ui/core"
import axios from 'axios'
import { PageContainer } from './styled.js'

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
    <PageContainer>

      <div>

        <form onSubmit={onSubmitForm}> 

          <p>Nome:</p>
          <TextField name = {"name"} value = {form.name} type={"text"} onChange = {handleForm} pattern = {"[a-zA-ZsÀ-ú ]{3,}"} required/>

          <p>Idade:</p>
          <TextField name = {"age"} value = {form.age} type={"number"} onChange = {handleForm} min="18" required />

          <p>Texto de aplicação:</p>
          <TextField name = {"applicationText"} value = {form.applicationText} type = {"text"} pattern = {"[a-zA-ZsÀ-ú ]{30,}"} onChange = {handleForm} required/>

          <p>Profissão:</p>
          <TextField name = {"profession"} value = {form.job} type = {"text"} pattern = {"[a-zA-ZsÀ-ú ]{10,}"} onChange = {handleForm} required />

          <p>País:</p>
          <TextField value = {form.country} onChange = {handleForm} />

          <p>Viagens:</p>
          <select name = "trip" value = {selectTrip} onChange={handleSelectTrip} >
            {trips.map((trip) => {
              return(<option value = {trip.id}> {trip.name} </option>)
            })}        
          </select>

          <Button 
            gutterBottom 
            variant = {"contained"}
            align={'center'} 
            color={'Primary'}
            onClick = {applyToTrip}
            > 
              Enviar 
          </Button> 

        </form>

        </div>
      </PageContainer>
    );
  }
  
  export default ApplicationForm;
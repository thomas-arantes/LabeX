import React from 'react'
import {Header} from './styles.js'
import {useHistory} from 'react-router-dom'
import { useInput } from '../hooks/useInput.js'
import { useProtectedPage } from '../hooks/useProtectedPage.js'

const CreateTrip = () => {
    useProtectedPage();
    const [name, setName] = useInput();
    const [date, setDate] = useInput();
    const [destiny, setDestiny] = useInput();
    const [duration, setDuration] = useInput();
    const [description, setDescription] = useInput();
  
    const history = useHistory(); 
  
    const goToTripsList = () => {
      history.push("/trips/list")
  }

  const onSubmitForm = (event) => {
    event.preventDefault();
  }

    return (
      <div className="App">
          <Header>
              <p>Logo</p>
              <button onClick = {goToTripsList}> Criar Viagens </button>
          </Header>
          <div>
          <form onSubmit={onSubmitForm}> 
              <p>Nome:</p>
              <input name = {"name"} value = {name} type = {"text"} pattern = {"[a-zA-ZsÀ-ú ]{5,}"} onChange = {setName} required />
              <p>Data:</p>
              <input name = {"date"} value = {date} type = {"date"} onChange = {setDate} required />
              <p>Destino:</p>
              <input value = {destiny} onChange = {setDestiny} />
              <p>Duração:</p>
              <input name = {"duration"} value = {duration} type = {"number"} max = {"50"} onChange = {setDuration} />
              <p>Descrição:</p>
              <input name = {"description"} value = {description} type = {"text"} pattern =  {"[a-zA-ZsÀ-ú ]{30,}"} onChange = {setDescription} />
              <button> Criar Viagem </button>
            </form>
        </div>
      </div>
    );
  }
  
  export default CreateTrip;
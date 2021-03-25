import React, { useEffect, useState } from 'react'
import {Header} from './styles.js'
import { useHistory, useParams } from 'react-router-dom'
import { useProtectedPage } from '../hooks/useProtectedPage.js'
import axios from 'axios'


const ListTrips = () => {
  const [trips, setTrips] = useState([])
  useProtectedPage();
  
  useEffect(() => {
    getTrips();
  }, []);

  const getTrips = () => {
    axios
        .get(
            "https://us-central1-labenu-apis.cloudfunctions.net/labeX/thomas-dumont/trips",
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

  const history = useHistory(); 
  
  const goToCreateTrip = () => {
      history.push("/trips/create")
  }

  const goToTripDetails = (id) => {
    history.push(`/trips/details/${id}`)
  }

  const renderTrips = trips.map((trip) => {
    return(
      <div key={trip.id}>
        <p>Nome: {trip.name}</p>
        <p>Descrição: {trip.description}</p>
        <button onClick = {() => {goToTripDetails(trip.id)}}> Detalhes da Viagem </button>
      </div>
    )
  })


    return (
      <div className="App">
          <Header>
              <p>Logo</p>
              <button onClick = {goToCreateTrip}> Criar Viagens </button>
          </Header>
          <div>
            {renderTrips}
          </div>

      </div>
    );
  }

  
  export default ListTrips;
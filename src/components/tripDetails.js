import React, { useEffect, useState } from 'react'
import {Header} from './styles.js'
import { useHistory, useParams } from "react-router-dom";
import { useProtectedPage } from '../hooks/useProtectedPage.js';
import axios from  'axios'

function TripDetails() {
  const [detail, setDetail] = useState({})
  const history = useHistory();
  const pathParams = useParams()
  const id = pathParams.id
  useProtectedPage();

  useEffect(() => {
    getTripDetail();
  })
  
  const getTripDetail = () => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/thomas-dumont/trip/${id}`,{
          headers: {
            auth: localStorage.getItem("token")
          }
        }
      )
      .then((response) => {
        setDetail(response.data.trip)
      })
      .catch((error) => {
        console.log(error)
      });
  }

  console.log(detail)

  const goBack = () => {
    history.goBack();
  }

  const candidates = detail.candidates.map((candidate) => {
    return(
      <div key = {candidate.id}>
        <p> Nome: {candidate.name} </p>
        <p> Idade: {candidate.age} </p>
        <p> País: {candidate.country} </p>
        <p> Profissão: {candidate.profession} </p>
        <p> Texto de aplicação: {candidate.applicationText} </p>
      </div>
    )
  })

    return (
      <div className="App">
          <Header>
              <p>Logo</p>
          </Header>
          <div>
            <p> Destino: {detail.planet} </p>
            <p> Duração: {detail.durationInDays} dias </p>
            <p> Data: {detail.date} </p>
            <p> Nome: {detail.name} </p>
            <p> Descrição: {detail.description} </p>
            <button onClick = {goBack} > Voltar </button>
          </div>
          <div>
            {candidates}
          </div>

      </div>
    );
  }
  
  export default TripDetails;
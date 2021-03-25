import React from 'react'
import Homepage from './components/homepage'
import ApplicationForm from './components/applicationForm'
import ListTrips from './components/listTrips'
import CreateTrip from './components/createTrip'
import TripDetails from './components/tripDetails'
import LoginPage from './components/loginPage'
import './App.css';
import Router from './router/router'

function App() {
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;

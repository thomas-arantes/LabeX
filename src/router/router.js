import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Homepage from '../components/homepage'
import ApplicationForm from '../components/applicationForm'
import LoginPage from '../components/loginPage'
import ListTrips from '../components/listTrips'
import CreateTrip from '../components/createTrip'
import TripDetails from '../components/tripDetails'
import ErrorPage from '../components/errorPage'


function Router() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path = "/applicationform">
            <ApplicationForm />
          </Route>
          <Route exact path = "/login">
            <LoginPage />
          </Route>
          <Route exact path = "/trips/create">
            <CreateTrip />
          </Route> 
          <Route exact path = "/trips/list">
            <ListTrips />
          </Route> 
          <Route exact path = "/trips/details/:id">
            <TripDetails />
          </Route> 
          <Route>
            <ErrorPage />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
  
  export default Router;
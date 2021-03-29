import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Homepage from '../pages/Homepage/Homepage'
import ApplicationForm from '../pages/ApplicationForm/ApplicationForm'
import LoginPage from '../pages/LoginPage/LoginPage'
import ListTrips from '../pages/ListTrips/ListTrips'
import CreateTrip from '../pages/CreateTrip/CreateTrip'
import TripDetails from '../pages/TripDetails/TripDetails'
import ErrorPage from '../pages/ErrorPage'


function Router({setRightButtonText}) {
    return (
        <Switch>
          <Route exact path="/">
            <Homepage setRightButtonText = {setRightButtonText}/>
          </Route>
          <Route exact path = "/applicationform">
            <ApplicationForm setRightButtonText = {setRightButtonText}/>
          </Route>
          <Route exact path = "/login">
            <LoginPage setRightButtonText = {setRightButtonText}/>
          </Route>
          <Route exact path = "/trips/create">
            <CreateTrip setRightButtonText = {setRightButtonText}/>
          </Route> 
          <Route exact path = "/trips/list">
            <ListTrips setRightButtonText = {setRightButtonText}/>
          </Route> 
          <Route exact path = "/trips/details/:id">
            <TripDetails setRightButtonText = {setRightButtonText}/>
          </Route> 
          <Route>
            <ErrorPage />
          </Route>
        </Switch>
    );
  }
  
  export default Router;
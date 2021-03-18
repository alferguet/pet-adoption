import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Listings } from '../views/Listings'
import { Profile } from '../views/Profile'

export const RouteView: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <h1>This is the home view</h1>
      </Route>
      <Route exact path="/listings">
        <Listings></Listings>
      </Route>
      <Route path="/listings/:id">
        <Profile></Profile>
      </Route>
    </Switch>
  )
}

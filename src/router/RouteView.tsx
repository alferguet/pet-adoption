import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Listings } from '../views/Listings'

export const RouteView: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <h1>This is the home view</h1>
      </Route>
      <Route path="/pets">
        <Listings></Listings>
      </Route>
    </Switch>
  )
}

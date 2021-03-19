import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Home } from '../views/Home'
import { Listings } from '../views/Listings'
import { Profile } from '../views/Profile'

export const RouteView: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/listings">
        <Listings />
      </Route>
      <Route path="/listings/:id">
        <Profile />
      </Route>
    </Switch>
  )
}

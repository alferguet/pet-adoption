import React, { FunctionComponent } from 'react'
import { Route, Switch } from 'react-router-dom'

export const RouteView: FunctionComponent = () => {
  return (
    <Switch>
      <Route exact path="/">
        <h1>This is the home view</h1>
      </Route>
      <Route path="/pets">
        <h1>This is pets view</h1>
      </Route>
    </Switch>
  )
}

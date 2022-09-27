import React from 'react'
import {Redirect, Route} from 'react-router-dom'

function ProtectedRout({path, children, loggedIn}) {
  return (
    <Route exact path={path}>
      {loggedIn ? children : <Redirect to="/" />}
    </Route>
  )
}

export default ProtectedRout
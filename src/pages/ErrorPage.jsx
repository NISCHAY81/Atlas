import React from 'react'
import { NavLink, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const error = useRouteError();
  return (
  <div>
    <h1>Oops! An error occurred</h1>
    {error && <p>{error.data}</p>}
    {<p>{error.status} {error.statusText}</p>}
    <NavLink to="/">
      <button>Go Back</button>
    </NavLink>
  </div>
  )
}

export default ErrorPage
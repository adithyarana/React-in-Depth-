import React from 'react'
import { useRouteError } from 'react-router-dom'
const Error = () => {

  const err = useRouteError();
  console.log(err);
  return (
    <div>
        <h1>404 Not Found</h1>
        <h2>Page Not Found</h2>
        <p>{err?.status}</p>
        <p>{err?.statusText}</p>
    </div>
  )
}

export default Error
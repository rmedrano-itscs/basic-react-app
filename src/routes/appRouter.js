/*
  - Descripcion
    All routing config and processing is here.
    It was extracted from app and index for separation of concerns
*/

import React from 'react';
import {BrowserRouter as Router } from 'react-router-dom'

const AppRouter = (props) => {
  return (
    <Router>
      {props.children}
    </Router>
  )
}

export default AppRouter;

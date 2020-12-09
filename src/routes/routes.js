/*
-  Description

*/


import React from 'react';
import { Route } from 'react-router-dom'

import Home from '../components/home/Home'; 

const Routes = () => {
  return (
    <>
      <Route exact path = '/'> <Home/> </Route>
      {/* <Route exact path = '/'> <xxx/> </Route> */}
    </>
  )
};

export default Routes;
export const HOME ='/';

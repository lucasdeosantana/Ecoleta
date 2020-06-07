import { Route, BrowserRouter, Switch } from 'react-router-dom'
import React from 'react';
import Home from './pages/Home/index'
import FindPoint from './pages/FindPoint'
import CreatePoint from './pages/CreatePoint/index'

const Routes: React.FC = () => {
  return(
      <BrowserRouter>
          <Route  component= {Home} path="/" exact/>
          <Route  component= {CreatePoint} path="/create-point" />
          <Route component={FindPoint} path="/find-point/" />
      </BrowserRouter>
  )
}

export default Routes;
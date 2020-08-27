import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import Bar from './GradBar'
import Header from './Header'
import Home from './Home'

export default () => {
  return (
    <Router>
      <Bar/>
      <Header/>
      <Home />
    </Router>
  )
}
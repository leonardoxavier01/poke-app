import React from 'react'
import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom'

import { Home, About } from '../pages'
import { Layout } from '../components'

const Routes = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<About />} exact />
      </Switch>
    </Layout>
  </BrowserRouter>
)

export default Routes

import React from 'react'
import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom'
import { Home, About } from '../pages'
import { Layout, InfoPokemon } from '../components'

const Routes = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<About />} exact />
        <Route path="/pokemon/:id" element={<InfoPokemon />} exact />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Switch>
    </Layout>
  </BrowserRouter>
)

export default Routes

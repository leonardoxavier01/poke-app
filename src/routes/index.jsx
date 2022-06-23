import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom'
import { Home, About, Pokemon } from '../pages'
import { Layout } from '../components'

const Routes = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<About />} exact />
        <Route path="/pokemon/:id" element={<Pokemon />} exact />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Switch>
    </Layout>
  </BrowserRouter>
)

export default Routes

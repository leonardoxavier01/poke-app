import { Container, Alert } from './styles'
import pokeball from '../../assets/images/pokeball.png'
import { Button } from '../../components'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <Container>
      <Alert>
        <h1>4</h1>
        <img src={pokeball} alt="pokeball image" />
        <h1>4</h1>
      </Alert>
      <h2>This page does not exist</h2>
      <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to={'/'}>
        <Button color={({ theme }) => theme.blue}>Back home</Button>
      </Link>
    </Container>
  )
}

export default NotFound

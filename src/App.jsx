import { Container } from '@mui/material'
import { useState } from 'react'
import RouterComponent from './routes'

function App() {
  const [backgroundColor, setBackgroundColor] = useState('primary.main')
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        height: 'auto',
        backgroundColor: backgroundColor,
        px: '80px', //lùi 2 bên trái phải
        py: '100px'//lùi 2 bên trên dưới
      }}>
      <RouterComponent backgroundColor={backgroundColor} setBackgroundColor={setBackgroundColor} />
    </Container>
  )
}

export default App

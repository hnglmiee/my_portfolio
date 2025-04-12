import { Box, Button } from '@mui/material'
import { useLocation } from 'react-router-dom'

function AppBar() {
  const location = useLocation()
  const color = () => {
    switch (location.pathname) {
      case '/':
        return 'primary.main'
      case '/catalog':
        return '#fffcec'
      case '/profile':
        return '#fffcec'
      case '/catalog/spaceArena':
        return 'primary.main'
      case '/catalog/RodeBattle':
        return '#fffcec'
      case '/catalog/hackingTheRisks':
        return '#fffcec'
      case '/catalog/KoiCareClinic':
        return '#051159'
      default:
        return 'primary.main'
    }
  }
  return (
    <Box sx={{
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-evenly'
    }}>
      {/* LOGO */}
      <Button href='/' sx={{
        fontFamily: 'Neue Kabel, Roboto, Arial, sans-serif',
        textTransform: 'lowercase',
        fontSize: '18px',
        color: color,
        '&:hover': {
          bgcolor: 'transparent',
          opacity: '50%'
        }
      }}>
        HoangLam
      </Button>
      {/* LAND */}
      <Button href='/land' sx={{
        fontFamily: 'Neue Kabel, Roboto, Arial, sans-serif',
        textTransform: 'uppercase',
        fontSize: '18px',
        color: color,
        '&:hover': {
          bgcolor: 'transparent',
          opacity: '50%'
        }
      }}>
        Land
      </Button>
      {/* CATALOG */}
      <Button href='/catalog' sx={{
        fontFamily: 'Neue Kabel, Roboto, Arial, sans-serif',
        textTransform: 'uppercase',
        fontSize: '18px',
        color: color,
        '&:hover': {
          bgcolor: 'transparent',
          opacity: '50%'
        }
      }}>
        Catalog
      </Button>
      {/* PROFILE */}
      <Button href='/profile' sx={{
        fontFamily: 'Neue Kabel, Roboto, Arial, sans-serif',
        textTransform: 'uppercase',
        fontSize: '18px',
        color: color,
        '&:hover': {
          bgcolor: 'transparent',
          opacity: '50%'
        }
      }}>
        Profile
      </Button>
    </Box>
  )
}

export default AppBar

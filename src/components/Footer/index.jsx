import React from 'react'
import { Box, Typography } from '@mui/material'
import Divider from '@mui/material/Divider'
import { useLocation } from 'react-router-dom'

function Footer() {
  const location = useLocation()
  const color = () => {
    switch (location.pathname) {
      case '/':
        return 'primary.main'
      case '/land':
        return 'primary.main'
      case '/profile':
        return '#fffcec'
      case '/catalog':
        return '#fffcec'
      case '/catalog/hackingTheRisks':
        return '#fffcec'
      case '/catalog/RodeBattle':
        return '#fffcec'
      case '/catalog/KoiCareClinic':
        return '#051159'
      default:
        return 'primary.main'
    }
  }
  return (
    <Box sx={{
      // bgcolor: '#fff'
    }}>
      <Divider style={{
        marginTop: '50px',
        borderWidth: '1px',
        borderColor: color,
        opacity: '80%'
      }} />

      <Typography sx={{
        fontFamily: 'Neue Kabel, Roboto, Arial, sans-serif',
        textTransform: 'uppercase',
        fontWeight: '300',
        fontSize: '20px',
        marginTop: '50px',
        color: color
      }}>
        GET IN TOUCH
      </Typography>

      <Typography sx={{
        fontFamily: 'Neue Kabel, Roboto, Arial, sans-serif',
        textTransform: 'lowercase',
        fontWeight: '300',
        fontSize: '20px',
        marginTop: '10px',
        color: color
      }}>
        lamieedesign1204@gmail.com
      </Typography>
    </Box>
  )
}

export default Footer

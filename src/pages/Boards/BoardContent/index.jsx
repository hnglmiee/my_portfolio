import { Box, Typography } from '@mui/material'
import Divider from '@mui/material/Divider'

function BoardContent() {
  return (
    <Box sx={{
      // bgcolor: '#fff'
    }}>
      <Divider style={{
        marginTop: '150px',
        borderWidth: '1px',
        borderColor: 'primary.main',
        opacity: '80%'
      }} />

      <Typography sx={{
        fontFamily: 'Neue Kabel, Roboto, Arial, sans-serif',
        textTransform: 'uppercase',
        fontWeight: '300',
        fontSize: '20px',
        marginTop: '50px'
      }}>
        GET IN TOUCH
      </Typography>

      <Typography sx={{
        fontFamily: 'Neue Kabel, Roboto, Arial, sans-serif',
        textTransform: 'lowercase',
        fontWeight: '300',
        fontSize: '20px',
        marginTop: '10px'
      }}>
        lamieedesign1204@gmail.com
      </Typography>
    </Box>
  )
}

export default BoardContent

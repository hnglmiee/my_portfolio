import { Box, Button, Typography } from '@mui/material'
import heroImg from '~/assets/images/LamieeLand.png'
import bigPic from '~/assets/images/bigPic.jpg'

function BoardBar() {
  return (
    <Box sx={{
      // bgcolor: 'secondary.main'
    }}>

      <Box sx={{
        width: '100%',
        // height: '1000px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'

      }}>
        <Box
          component={'img'}
          sx={{
            width: '100%',
            height: 'auto',
            marginTop: '60px'
          }}
          src={heroImg}
        />

        <Box
          component={'img'}
          sx={{
            width: '100%',
            height: 'auto',
            marginTop: '60px'
          }}
          src={bigPic}
        />

      </Box>

      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: '50px'
      }}>
        <Typography sx={{
          fontFamily: 'Neue Kabel, Roboto, Arial, sans-serif',
          // textTransform: 'uppercase',
          fontWeight: '700',
          fontSize: '36px'
        }}>
          Hi, I&apos;m Lamiee, a designer <br /> and frontend developer.
        </Typography>

        <Typography sx={{
          fontFamily: 'Neue Kabel, Roboto, Arial, sans-serif',
          // textTransform: 'uppercase',
          fontWeight: '300',
          fontSize: '36px'
        }}>
          With experience in multiple disciplines, <br /> I work with people to create intuitive <br /> and engaging digital experiences.
        </Typography>
      </Box>

      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '100px'
      }}>
        <Button href='/catalog' sx={{
          border: '1px solid #d039af',
          borderRadius: '60px',
          padding: '0px 50px',
          fontFamily: 'Neue Kabel, Roboto, Arial, sans-serif',
          textTransform: 'uppercase',
          fontSize: '36px',
          textAlign: 'center',
          '&:hover': {
            bgcolor: 'transparent',
            opacity: '50%'
          }
        }}>
          YEAH OKAY LET’S DO IT
        </Button>
      </Box>
    </Box>
  )
}

export default BoardBar

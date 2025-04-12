import { Box, Button, Typography } from '@mui/material'
import aboutMe from '~/assets/images/LamieeAboutMe.png'
import bigPic from '~/assets/images/bigPic.jpg'

function ProfileBar() {
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
            width: '35%',
            height: 'auto',
            marginTop: '60px',
            display: 'flex',
            alignSelf: 'flex-start'
          }}
          src={aboutMe}
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
          fontSize: '36px',
          color: '#FFFCEC'
        }}>
          Hi, I&apos;m Lamiee, a designer <br /> and frontend developer.
        </Typography>

        <Typography sx={{
          fontFamily: 'Neue Kabel, Roboto, Arial, sans-serif',
          // textTransform: 'uppercase',
          fontWeight: '300',
          fontSize: '36px',
          color: '#FFFCEC'
        }}>
          With experience in multiple disciplines, <br /> I work with people to create intuitive <br /> and engaging digital experiences.
        </Typography>
      </Box>
    </Box>
  )
}

export default ProfileBar

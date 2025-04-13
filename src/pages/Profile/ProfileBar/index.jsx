import { Box, Button, Divider, Typography } from '@mui/material'
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
            alignSelf: 'flex-start',
            mb: 20
          }}
          src={aboutMe}
        />
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box>
          <Typography sx={{
            fontFamily: 'Neue Kabel, Roboto, Arial, sans-serif',
            fontWeight: '300',
            fontSize: '30px',
            color: '#fffcec'
          }}>
            EDUCATION
          </Typography>

          <Box>
            <Typography sx={{
              fontFamily: 'Neue Kabel, Roboto, Arial, sans-serif',
              fontWeight: '300',
              fontSize: '25px',
              color: '#fffcec',
              mb: 5
            }}>
              October 2022- Now
            </Typography>

            <Box>
              <Typography sx={{
                fontFamily: 'Neue Kabel, Roboto, Arial, sans-serif',
                fontWeight: '300',
                fontSize: '25px',
                color: '#fffcec'
              }}>
                FPT University Ho Chi Minh City Campus
              </Typography>

              <Typography sx={{
                fontFamily: 'Neue Kabel, Roboto, Arial, sans-serif',
                fontWeight: '300',
                fontSize: '25px',
                color: '#fffcec',
                mb: 10
              }}>
                Specialization in Software Engineering
              </Typography>
            </Box>
          </Box>

          <Box>
            <Typography sx={{
              fontFamily: 'Neue Kabel, Roboto, Arial, sans-serif',
              fontWeight: '300',
              fontSize: '25px',
              color: '#fffcec',
              mb: 5
            }}>
              September 2023- Now
            </Typography>

            <Box sx={{}}>
              <Typography sx={{
                fontFamily: 'Neue Kabel, Roboto, Arial, sans-serif',
                fontWeight: '300',
                fontSize: '25px',
                color: '#fffcec',
              }}>
                MindX Technology School
              </Typography>

              <Typography sx={{
                fontFamily: 'Neue Kabel, Roboto, Arial, sans-serif',
                fontWeight: '300',
                fontSize: '25px',
                color: '#fffcec',
                mb: 10
              }}>
                Fullstack Web Developer Course
              </Typography>
            </Box>
          </Box>
        </Box>


        <Box >
          <Typography sx={{
            fontFamily: 'Neue Kabel, Roboto, Arial, sans-serif',
            fontWeight: '300',
            fontSize: '30px',
            color: '#fffcec'
          }}>
            EXPERIENCES
          </Typography>

          <Box>
            <Typography sx={{
              fontFamily: 'Neue Kabel, Roboto, Arial, sans-serif',
              fontWeight: '300',
              fontSize: '25px',
              color: '#fffcec',
              mb: 5
            }}>
              January 2025- April 2025
            </Typography>

            <Box>
              <Typography sx={{
                fontFamily: 'Neue Kabel, Roboto, Arial, sans-serif',
                fontWeight: '300',
                fontSize: '25px',
                color: '#fffcec'
              }}>
                FPT Software Ho Chi Minh City
              </Typography>

              <Typography sx={{
                fontFamily: 'Neue Kabel, Roboto, Arial, sans-serif',
                fontWeight: '300',
                fontSize: '25px',
                color: '#fffcec',
                mb: 10
              }}>
                Manual Tester Internship
              </Typography>
            </Box>
          </Box>

          <Box>
            <Typography sx={{
              fontFamily: 'Neue Kabel, Roboto, Arial, sans-serif',
              fontWeight: '300',
              fontSize: '25px',
              color: '#fffcec',
              mb: 5
            }}>
              July 2024- Now
            </Typography>

            <Box sx={{}}>
              <Typography sx={{
                fontFamily: 'Neue Kabel, Roboto, Arial, sans-serif',
                fontWeight: '300',
                fontSize: '25px',
                color: '#fffcec'
              }}>
                Personal Portfolio
              </Typography>

              <Typography sx={{
                fontFamily: 'Neue Kabel, Roboto, Arial, sans-serif',
                fontWeight: '300',
                fontSize: '25px',
                color: '#fffcec',
                mb: 10
              }}>
                UI/UX Designer - Front End Developer
              </Typography>
            </Box>
          </Box>

          <Box>
            <Typography sx={{
              fontFamily: 'Neue Kabel, Roboto, Arial, sans-serif',
              fontWeight: '300',
              fontSize: '25px',
              color: '#fffcec',
              mb: 5
            }}>
              September - November 2024
            </Typography>

            <Box sx={{}}>
              <Typography sx={{
                fontFamily: 'Neue Kabel, Roboto, Arial, sans-serif',
                fontWeight: '300',
                fontSize: '25px',
                color: '#fffcec'
              }}>
                Koi Veterinary Service Center
              </Typography>

              <Typography sx={{
                fontFamily: 'Neue Kabel, Roboto, Arial, sans-serif',
                fontWeight: '300',
                fontSize: '25px',
                color: '#fffcec', mb: 10
              }}>
                UI/UX Designer - Front End Developer
              </Typography>
            </Box>
          </Box>
        </Box>


        <Box>
          <Typography sx={{
            fontFamily: 'Neue Kabel, Roboto, Arial, sans-serif',
            fontWeight: '300',
            fontSize: '30px',
            color: '#fffcec'
          }}>
            ACTIVITIES
          </Typography>

          <Box>
            <Typography sx={{
              fontFamily: 'Neue Kabel, Roboto, Arial, sans-serif',
              fontWeight: '300',
              fontSize: '25px',
              color: '#fffcec',
              mb: 5
            }}>
              December 2022- April 2025
            </Typography>

            <Box>
              <Typography sx={{
                fontFamily: 'Neue Kabel, Roboto, Arial, sans-serif',
                fontWeight: '300',
                fontSize: '25px',
                color: '#fffcec'
              }}>
                F-Code Academic Club
              </Typography>

              <Typography sx={{
                fontFamily: 'Neue Kabel, Roboto, Arial, sans-serif',
                fontWeight: '300',
                fontSize: '25px',
                color: '#fffcec'
              }}>
                Vice President
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>

  )
}

export default ProfileBar

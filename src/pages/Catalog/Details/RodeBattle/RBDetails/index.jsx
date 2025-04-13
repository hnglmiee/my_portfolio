import { Box, Typography } from '@mui/material'
import RodeBattle from '~/assets/images/RodeBattle/RODEBattle.png'
import Container from '@mui/material/Container'
import { CATALOG_MOCK_DATAS, HTR_DATAS } from '~/contants'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import { RODE_IMG } from '~/contants'
import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import Divider from '@mui/material/Divider'
import { useFindPath } from '~/hooks/useFindPath'
import { useNavigate } from 'react-router-dom'

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`
  }
}

function Detail() {
  const [percentage, setPercentage] = useState('53')
  const [prevPage, setPrevPage] = useState('/catalog/hackingTheRisks')
  const [nextPage, setNextPage] = useState('/catalog/KoiCareClinic')
  const navigate = useNavigate()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const path = useFindPath('spaceArena')

  useEffect(() => {
    if (path !== '') {
      const pageData = CATALOG_MOCK_DATAS.find(item => item.id === path)

      if (pageData) {
        setPrevPage(pageData.prevPage)
        setNextPage(pageData.nextPage)
      }
    }
  }, [path])
  const randomNumber = (lastestResult) => {
    const durantion = 2000 // chay trong 2s
    const started = new Date().getTime()

    const startAnimate = setInterval(() => {
      if (new Date().getTime() - started > durantion) {
        setPercentage(lastestResult)
        clearInterval(startAnimate)
      } else {
        setPercentage(Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10))
      }
    }, 10)

  }

  useEffect(() => {
    if (isInView) {
      randomNumber('53')
    }
  }, [isInView])

  const handlePrevPageClick = () => {
    navigate(prevPage)
  }

  const handleNextPageClick = () => {
    navigate(nextPage)
  }

  return (
    <Box sx={{
      bgcolor: '#161616'
    }}>
      <Box sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        my: '60px'
      }}>
        <Box
          component={'img'}
          sx={{
            width: '35%',
            height: 'auto',
            display: 'flex',
            alignSelf: 'flex-start'
          }}
          src={RodeBattle}
        />
      </Box>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        mb: '50px'
      }}>
        <Typography sx={{
          fontFamily: 'Neue Kabel, Roboto, Arial, sans-serif',
          fontWeight: '700',
          fontSize: '40px',
          color: '#fffcec'
        }}>
          Programming contest
        </Typography>

        <Typography sx={{
          fontFamily: 'Neue Kabel, Roboto, Arial, sans-serif',
          fontWeight: '300',
          fontSize: '20px',
          color: '#fffcec'
        }}>
          Every year, the F-Code Club hosts R.ODE BATTLE, an event that aims<br /> to create a lively and healthy playground where students who are<br /> interested in information technology may practice and develop their skills.
        </Typography>
      </Box>
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Box
          width={'75vw'}
          display={'flex'}
          alignItems='flex-start'
          justifyContent='space-around'
          gap={4}
          p={9}
          paddingLeft={20}
          paddingRight={20}
          mb={20}
          sx={{
            border: '1px solid #fffcec',
            borderRadius: '25px'
          }}
        >
          {HTR_DATAS.map((item, idx) => (
            <>
              <Box key={idx} maxWidth={250} display={'flex'} flexDirection={'column'}>
                <Typography sx={{
                  fontFamily: 'Neue Kabel, Roboto, Arial, sans-serif',
                  fontWeight: '400',
                  fontSize: {
                    xs: '12px',
                    sm: '14px',
                    md: '16px',
                    xl: '20px'
                  },
                  color: '#fffcec'
                }}>
                  {item.title}
                </Typography>
                <Typography component='div' dangerouslySetInnerHTML={{ __html: item.description }} sx={{
                  fontFamily: 'Neue Kabel, Roboto, Arial, sans-serif',
                  fontWeight: '400',
                  fontSize: {
                    xs: '12px',
                    sm: '14px',
                    md: '16px',
                    xl: '20px'
                  },
                  color: '#fffcec'
                }} />
              </Box>
            </>
          ))}
        </Box>
      </Container>
      <Container maxWidth='xl' sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        mb: 0
      }}>
        <ImageList sx={{
          height: 705
        }} cols={3} variant='quilted' rowHeight={350}>
          {RODE_IMG.map((item) => (
            <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
              <img
                {...srcset(item.img, 350, item.rows, item.cols)}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>

      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        my: '50px'
      }}>
        <Typography sx={{
          fontFamily: 'Neue Kabel, Roboto, Arial, sans-serif',
          fontWeight: '700',
          fontSize: '40px',
          color: '#fffcec'
        }}>
          Our Missons
        </Typography>

        <Typography sx={{
          fontFamily: 'Neue Kabel, Roboto, Arial, sans-serif',
          fontWeight: '300',
          fontSize: '20px',
          color: '#fffcec'
        }}>
          This promises to provide an important career and opportunity to convert<br /> ambitions into reality in the field of information technology, with the goal<br /> of continuing to expand and becoming one of the top programming<br /> playgrounds.
        </Typography>
      </Box>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        mb: '20px'
      }}>
        <img src="../src/assets/images/RodeBattle/all.jpg" alt="All" style={{
          height: 580
        }} />
      </Box>

      <Box sx={{ mb: 20, mt: 20 }}>
        <Typography sx={{
          fontFamily: 'Neue Kabel, Roboto, Arial, sans-serif',
          fontWeight: '300',
          fontSize: '20px',
          color: '#fffcec',
          textAlign: 'center'
        }}>
          R.ODE Battle is a coding competition designed for students who want to sharpen their skills in Front-End and Back-End development. Whether you're passionate about building sleek interfaces or architecting solid server-side logic, this event offers the perfect chance to challenge yourself, collaborate with others, and grow through friendly competition. It’s not just about winning — it’s about learning, coding smarter, and leveling up in both skills.
        </Typography>
      </Box>

      <Container maxWidth='xl' sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box ref={ref} maxWidth={'75vw'} sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 8
        }}>
          <Typography textTransform={'uppercase'} sx={{
            fontFamily: 'Neue Kabel, Roboto, Arial, sans-serif',
            fontWeight: '600',
            fontSize: '25px',
            color: '#fffcec'
          }}>
            AND IT WORKED
          </Typography>
          <motion.div>
            <Box sx={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: 100
            }}>
              <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Typography sx={{
                  fontFamily: 'ITC Kabel Std Ultra, Roboto, Arial, sans-serif',
                  fontWeight: '700',
                  fontSize: '60px',
                  color: '#fffcec'
                }}>
                  {58 + 'K'}
                </Typography>
                <Typography sx={{
                  fontFamily: 'Neue Kabel, Roboto, Arial, sans-serif',
                  fontWeight: '400',
                  fontSize: '20px',
                  color: '#fffcec'
                }}>
                  Social Media Reach
                </Typography>
              </Box>
              <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Typography sx={{
                  fontFamily: 'ITC Kabel Std Ultra, Roboto, Arial, sans-serif',
                  fontWeight: '700',
                  fontSize: '60px',
                  color: '#fffcec'
                }}>
                  {200 + '+'}
                </Typography>
                <Typography sx={{
                  fontFamily: 'Neue Kabel, Roboto, Arial, sans-serif',
                  fontWeight: '400',
                  fontSize: '20px',
                  color: '#fffcec'
                }}>
                  Competitors
                </Typography>
              </Box>
            </Box>
          </motion.div>
        </Box>
      </Container >
      <Divider sx={{
        borderWidth: '1px',
        opacity: '80%',
        my: '50px'
      }} />
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Box component={'button'} onClick={handlePrevPageClick} sx={{
          display: 'flex',
          alignItems: 'center',
          bgcolor: 'transparent',
          color: 'primary.main',
          borderColor: 'transparent',
          '&:hover': {
            bgcolor: 'transparent',
            opacity: '50%'
          },
          gap: 15
        }}>
          <img src="../src/assets/images/HTRisks/arrow.png" alt="Timeline" style={{
            height: 60,
            transform: 'rotate(180deg)',
            color: '#d039af'
          }} />
          <Typography sx={{
            fontFamily: 'ITC Kabel Std Ultra, Roboto, Arial, sans-serif',
            fontWeight: '700',
            fontSize: '80px',
            color: '#fffcec'
          }}>
            This way
          </Typography>
        </Box>
        <Box component={'button'} onClick={handleNextPageClick} sx={{
          display: 'flex',
          alignItems: 'center',
          bgcolor: 'transparent',
          color: 'primary.main',
          borderColor: 'transparent',
          '&:hover': {
            bgcolor: 'transparent',
            opacity: '50%'
          },
          gap: 15
        }}>
          <Typography sx={{
            fontFamily: 'ITC Kabel Std Ultra, Roboto, Arial, sans-serif',
            fontWeight: '700',
            fontSize: '80px',
            color: '#fffcec'
          }}>
            That way
          </Typography>
          <img src="../src/assets/images/HTRisks/arrow.png" alt="Timeline" style={{
            height: 60,
            // transform: 'rotate(180deg)',
            color: '#d039af'
          }} />
        </Box>
      </Box>
    </Box >
  )
}

export default Detail

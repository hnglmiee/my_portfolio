import { Box, Typography } from '@mui/material'
import SpaceArena from '~/assets/images/SpaceArenaName.png'
import Container from '@mui/material/Container'
import { CATALOG_MOCK_DATAS, SPACE_ARENA_DATAS } from '~/contants'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import { SPACE_ARENA_IMG } from '~/contants'
import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import Divider from '@mui/material/Divider'
import { useFindPath } from '~/hooks/useFindPath'
import { Navigate, useNavigate } from 'react-router-dom'

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`
  }
}

function Detail() {
  const [percentage, setPercentage] = useState('53')
  const [prevPage, setPrevPage] = useState('/catalog')
  const [nextPage, setNextPage] = useState('/catalog')
  const navigate = useNavigate()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const path = useFindPath('spaceArena')

  useEffect(() => {
    if (path !== '') {
      const pageData = CATALOG_MOCK_DATAS.find(item => item.id === path);

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
      bgcolor: 'secondary.main'
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
          src={SpaceArena}
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
          fontSize: '40px'
        }}>
          F-Code&apos;s annual event
        </Typography>

        <Typography sx={{
          fontFamily: 'Neue Kabel, Roboto, Arial, sans-serif',
          fontWeight: '300',
          fontSize: '20px'
        }}>
          Based on the "Ring the Golden Bell" competition, SPACE ARENA  <br />hosts the knowledge competition for incoming K–18 students. <br />Students that take part will have the chance to compete in<br /> a variety of knowledge categories, ranging from academic to <br />general practical knowledge.
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
            border: '1px solid #d039af',
            borderRadius: '25px'
          }}
        >
          {SPACE_ARENA_DATAS.map((item, idx) => (
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
                  }
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
                  }
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
          height: 720
        }} cols={3} variant='quilted' rowHeight={350}>
          {SPACE_ARENA_IMG.map((item) => (
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
          fontSize: '40px'
        }}>
          Space Arena&apos;s rules
        </Typography>

        <Typography sx={{
          fontFamily: 'Neue Kabel, Roboto, Arial, sans-serif',
          fontWeight: '300',
          fontSize: '20px'
        }}>
          All of the competitors will gather at the competition site during the <br />tournament to respond to questions from the organizers. Players <br />who provide an accurate response will be allowed to stay on <br />the field; those who provide an inaccurate response will have to leave <br />the field.
        </Typography>
      </Box>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        mb: '20px'
      }}>
        <img src="../src/assets/images/Backdrop.png" alt="Timeline" style={{
          height: 580
        }} />
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
            fontWeight: '400',
            fontSize: '25px'
          }}>
            Result
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
                  fontSize: '60px'
                }}>
                  {percentage + '%'}
                </Typography>
                <Typography sx={{
                  fontFamily: 'Neue Kabel, Roboto, Arial, sans-serif',
                  fontWeight: '400',
                  fontSize: '20px'
                }}>
                  Increase in enablement site visits
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
                  fontSize: '60px'
                }}>
                  {percentage + '%'}
                </Typography>
                <Typography sx={{
                  fontFamily: 'Neue Kabel, Roboto, Arial, sans-serif',
                  fontWeight: '400',
                  fontSize: '20px'
                }}>
                  Increase in enablement site visits
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
        // marginTop: '40px'
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
          <img src="../src/assets/images/arrow.png" alt="Timeline" style={{
            height: 60,
            transform: 'rotate(180deg)',
            color: '#d039af'
          }} />
          <Typography sx={{
            fontFamily: 'ITC Kabel Std Ultra, Roboto, Arial, sans-serif',
            fontWeight: '700',
            fontSize: '80px'
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
            fontSize: '80px'
          }}>
            That way
          </Typography>
          <img src="../src/assets/images/arrow.png" alt="Timeline" style={{
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

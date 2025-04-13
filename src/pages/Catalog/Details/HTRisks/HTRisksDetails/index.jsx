import { Box, Typography } from '@mui/material'
import HTRisks from '~/assets/images/HTRisks/HTRisksTitle.png'
import Container from '@mui/material/Container'
import { CATALOG_MOCK_DATAS, HTR_DATAS } from '~/contants'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import { HTR_IMG } from '~/contants'
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
  const [prevPage, setPrevPage] = useState('/catalog/spaceArena')
  const [nextPage, setNextPage] = useState('/catalog/RodeBattle')
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
            alignSelf: 'flex-start',
          }}
          src={HTRisks}
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
          Academic Workshop
        </Typography>

        <Typography sx={{
          fontFamily: 'Neue Kabel, Roboto, Arial, sans-serif',
          fontWeight: '300',
          fontSize: '20px',
          color: '#fffcec'
        }}>
          An engaging session designed to raise awareness among IT students about cybersecurity threats,<br /> fraud, and how to stay protected in the digital world. This workshop aims to introduce key concepts<br /> in information security, highlight common hacking techniques, and explore real-world risks associated<br /> with cyberattacks. Participants will learn practical tips on how to identify vulnerabilities, protect personal<br /> and organizational data, and build a strong security mindset for their future careers.
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
          height: 1060
        }} cols={3} variant='quilted' rowHeight={350}>
          {HTR_IMG.map((item) => (
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
          This workshop promises to provide a valuable foundation for building a future in cybersecurity,<br /> offering opportunities to turn curiosity into expertise in the field of information technology.<br />With the mission of raising awareness and opening new paths of knowledge, it aims<br /> to inspire students to explore the world of digital security and contribute to shaping<br /> a safer cyber environment.
        </Typography>
      </Box>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        mb: '20px'
      }}>
        {/* <img src="../src/assets/images/HTRisks/LED.png" alt="Timeline" style={{
          height: 580
        }} /> */}
      </Box>

      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        my: '50px'
      }}>
        <Typography sx={{
          fontFamily: 'Neue Kabel, Roboto, Arial, sans-serif',
          fontWeight: '300',
          fontSize: '20px',
          color: '#fffcec',
          textAlign: 'center',
        }}>
          This workshop is designed for IT students with a keen interest in technology and a growing curiosity about cybersecurity. Hacking the Risks offers a practical introduction to digital threats, ethical hacking, and defense strategies in today’s tech-driven world. Whether you're exploring career paths or just want to deepen your knowledge, this is a great opportunity to get hands-on with the foundations of cybersecurity.
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
            color: '#fffcec',
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
                  {'~' + 10.3 + 'K'}
                </Typography>
                <Typography sx={{
                  fontFamily: 'Neue Kabel, Roboto, Arial, sans-serif',
                  fontWeight: '400',
                  fontSize: '20px',
                  color: '#fffcec'
                }}>
                  Social media views
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
                  {'~' + 150}
                </Typography>
                <Typography sx={{
                  fontFamily: 'Neue Kabel, Roboto, Arial, sans-serif',
                  fontWeight: '400',
                  fontSize: '20px',
                  color: '#fffcec'
                }}>
                  Attendees
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
          <img src="../src/assets/images/HTRisks/arrow.png" alt="Timeline" style={{
            height: 60,
            transform: 'rotate(180deg)',
            color: '#fffcec'
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
          color: '#fffcec',
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
            color: '#fffcec'
          }} />
        </Box>
      </Box>
    </Box >
  )
}

export default Detail

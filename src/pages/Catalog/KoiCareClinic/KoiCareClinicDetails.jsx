import { AppBar, Box, Typography, Container, ImageList, ImageListItem, Divider } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import Logo from '~/assets/images/KoiCareClinic/KoiCareClinic_Logo.png'
import ArrowIcon from '~/assets/images/KoiCareClinic/arrow.png'
import BackdropImage from '~/assets/images/KoiCareClinic/AboutUs.png'
import AboutUs from '~/assets/images/KoiCareClinic/About Us.png'
import Profile from '~/assets/images/KoiCareClinic/User_Account.png'
import Statistic from '~/assets/images/KoiCareClinic/Admin_Dashboard_Bookings.png'

import Staff from '~/assets/images/KoiCareClinic/Staff_Prescription.png'
import Management from '~/assets/images/KoiCareClinic/Staff_Prescription (1).png'
import Mobile from '~/assets/images/KoiCareClinic/Mobile.png'
import { CATALOG_MOCK_DATAS, KOI_CARE_CLINIC_DATAS, KOI_CARE_CLINIC_IMG } from '~/contants'
import { useFindPath } from '~/hooks/useFindPath'

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
  }
}

function KoiCareClinicDetails() {
  const [percentage, setPercentage] = useState('53')
  const [prevPage, setPrevPage] = useState('/catalog')
  const [nextPage, setNextPage] = useState('/catalog')
  const navigate = useNavigate()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const path = useFindPath('spaceArena')

  useEffect(() => {
    if (path !== '') {
      const pageData = CATALOG_MOCK_DATAS.find((item) => item.id === path)

      if (pageData) {
        setPrevPage(pageData.prevPage)
        setNextPage(pageData.nextPage)
      }
    }
  }, [path])

  const randomNumber = (latestResult) => {
    const duration = 2000 // 2 seconds
    const started = new Date().getTime()

    const startAnimate = setInterval(() => {
      if (new Date().getTime() - started > duration) {
        setPercentage(latestResult)
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
    <Box sx={{ bgcolor: '#E6F4F3' }}>
      <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', my: '60px' }}>
        <Box
          component="img"
          sx={{ width: '35%', height: 'auto', display: 'flex', alignSelf: 'flex-start' }}
          src={Logo}
          alt="Koi Care Logo"
        />
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: '50px' }}>
        <Typography sx={{ fontFamily: 'Neue Kabel, Roboto, Arial, sans-serif', fontWeight: '700', fontSize: '40px', color: '#051159' }}>
          Software development project
        </Typography>

        <Typography sx={{ fontFamily: 'Neue Kabel, Roboto, Arial, sans-serif', fontWeight: '300', fontSize: '20px', color: '#051159' }}>
          A specialized website allows customers to book appointments for their koi with  <br />
          certified aquatic vets, while vets can schedule, track, and manage assignments.  <br />
          The platform streamlines communication, ensures timely care, and  <br />
          supports a healthy aquatic environment for koi enthusiasts.
        </Typography>
      </Box>

      <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box
          width="75vw"
          display="flex"
          alignItems="flex-start"
          justifyContent="space-around"
          gap={4}
          p={9}
          paddingLeft={20}
          paddingRight={20}
          mb={20}
          sx={{ border: '1px solid #051159', borderRadius: '25px' }}
        >
          {KOI_CARE_CLINIC_DATAS.map((item, idx) => (
            <Box key={idx} maxWidth={250} display="flex" flexDirection="column">
              <Typography
                sx={{
                  fontFamily: 'Neue Kabel, Roboto, Arial, sans-serif',
                  fontWeight: '400',
                  fontSize: { xs: '12px', sm: '14px', md: '16px', xl: '20px' }, color: '#051159'
                }}
              >
                {item.title}
              </Typography>
              <Typography
                component="div"
                dangerouslySetInnerHTML={{ __html: item.description }}
                sx={{
                  fontFamily: 'Neue Kabel, Roboto, Arial, sans-serif',
                  fontWeight: '400',
                  fontSize: { xs: '12px', sm: '14px', md: '16px', xl: '20px' }, color: '#051159'
                }}
              />
            </Box>
          ))}
        </Box>
      </Container>

      <Container maxWidth="xl" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', mb: 0 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: '20px' }}>
          <Box>
            <Typography sx={{ fontFamily: 'Neue Kabel, Roboto, Arial, sans-serif', fontWeight: '700', fontSize: '40px', color: '#051159' }}>
              About This Project
            </Typography>
            <Typography sx={{ fontFamily: 'Neue Kabel, Roboto, Arial, sans-serif', fontWeight: '300', fontSize: '20px', color: '#051159' }}>
              This 3-month project uses ReactJS for building interactive user interfaces and Figma for designing UI prototypes. <br />
              Together, they support efficient collaboration, smooth design-to-development handoff, and a polished final product.
            </Typography>
          </Box>
          <img src={BackdropImage} alt="Timeline" style={{ height: 400 }} />
        </Box>

      </Container >

      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', my: '50px' }}>
        <Typography sx={{ fontFamily: 'Neue Kabel, Roboto, Arial, sans-serif', fontWeight: '700', fontSize: '40px', color: '#051159' }}>
          My Contribution
        </Typography>

        <Typography sx={{ fontFamily: 'Neue Kabel, Roboto, Arial, sans-serif', fontWeight: '300', fontSize: '20px', color: '#051159' }}>
          Design and develop intuitive user interfaces for the Koi Veterinary Service System, ensuring <br />
          a seamless user experience for veterinary services. <br />
          Translate wireframes and prototypes into functional and interactive components<br />
          Ensure consistency and scalability in design systems, contributing to enhanced usability and
          satisfaction.
        </Typography>
      </Box>


      <Box sx={{ display: 'flex', flexDirection: 'column', mb: 20 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20, mb: 0 }}>
          <img src={Staff} alt="Timeline" style={{ height: 400 }} />
          <img src={Management} alt="Timeline" style={{ height: 400 }} />
        </Box>
      </Box>


      <Container maxWidth="xl" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box
          ref={ref}
          maxWidth="75vw"
          sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8 }}
        >
          <Typography textTransform="uppercase" sx={{ fontFamily: 'Neue Kabel, Roboto, Arial, sans-serif', fontWeight: '600', fontSize: '25px', color: '#051159' }}>
            Result
          </Typography>
          <motion.div>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 100 }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <Typography sx={{ fontFamily: 'ITC Kabel Std Ultra, Roboto, Arial, sans-serif', fontWeight: '700', fontSize: '60px', color: '#051159' }}>
                  {7 + '+'}
                </Typography>
                <Typography sx={{ fontFamily: 'Neue Kabel, Roboto, Arial, sans-serif', fontWeight: '400', fontSize: '20px', color: '#051159' }}>
                  Overall Score
                </Typography>
              </Box>
            </Box>
          </motion.div>
        </Box>
      </Container>

      <Divider sx={{ borderWidth: '1px', opacity: '80%', my: '50px' }} />

      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box
          component="button"
          onClick={handlePrevPageClick}
          sx={{
            display: 'flex',
            alignItems: 'center',
            bgcolor: 'transparent',
            color: 'primary.main',
            borderColor: 'transparent',
            '&:hover': { bgcolor: 'transparent', opacity: '50%' },
            gap: 15
          }}
        >
          <img src={ArrowIcon} alt="Previous" style={{ height: 60, transform: 'rotate(180deg)', color: '#d039af' }} />
          <Typography sx={{ fontFamily: 'ITC Kabel Std Ultra, Roboto, Arial, sans-serif', fontWeight: '700', fontSize: '80px', color: '#051159' }}>
            This way
          </Typography>
        </Box>
        <Box
          component="button"
          onClick={handleNextPageClick}
          sx={{
            display: 'flex',
            alignItems: 'center',
            bgcolor: 'transparent',
            color: 'primary.main',
            borderColor: 'transparent',
            '&:hover': { bgcolor: 'transparent', opacity: '50%' },
            gap: 15,
          }}
        >
          <Typography sx={{ fontFamily: 'ITC Kabel Std Ultra, Roboto, Arial, sans-serif', fontWeight: '700', fontSize: '80px', color: '#051159' }}>
            That way
          </Typography>
          <img src={ArrowIcon} alt="Next" style={{ height: 60, color: '#d039af' }} />
        </Box>
      </Box>
    </Box >
  );
}

export default KoiCareClinicDetails;

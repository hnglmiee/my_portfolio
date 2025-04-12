import React from 'react'
import KoiCareClinicDetails from './KoiCareClinicDetails'
import AppBar from '~/components/AppBar'
import Footer from '~/components/Footer'

function KoiCareClinic({ setBackgroundColor }) {
  setBackgroundColor('#E6F4F3')
  return (
    <div>
      <AppBar />
      <KoiCareClinicDetails />
      <Footer />
    </div>
  )
}

export default KoiCareClinic

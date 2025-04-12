import Detail from './SADetails/index'
import AppBar from '~/components/AppBar'
import Footer from '~/components/Footer'

function SpaceArena({ setBackgroundColor }) {
  setBackgroundColor('#fffcec')
  return (
    <>
      <AppBar />
      <Detail />
      <Footer />
    </>
  )
}

export default SpaceArena

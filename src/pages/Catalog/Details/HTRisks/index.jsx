import Detail from './HTRisksDetails/index'
import AppBar from '~/components/AppBar'
import Footer from '~/components/Footer'

function HTRisks({ setBackgroundColor }) {
  setBackgroundColor('#161616')
  return (
    <div>
      <AppBar />
      <Detail />
      <Footer />
    </div>
  )
}

export default HTRisks
